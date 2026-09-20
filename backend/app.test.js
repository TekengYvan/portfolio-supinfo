const test = require("node:test");
const assert = require("node:assert/strict");
const { createApp } = require("./app");
const valid = {
  kind: "message",
  name: "Test Visitor",
  email: "visitor@example.com",
  subject: "Website project",
  message: "I would like to discuss a website project.",
  website: "",
};
async function run(options, fn) {
  const server = createApp(options).listen(0, "127.0.0.1");
  await new Promise((resolve) => server.once("listening", resolve));
  const base = "http://127.0.0.1:" + server.address().port;
  const post = (data, headers = {}) =>
    fetch(base + "/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json", ...headers },
      body: JSON.stringify(data),
    });
  try {
    await fn({ base, post });
  } finally {
    server.closeAllConnections();
    await new Promise((resolve) => server.close(resolve));
  }
}
test("unconfigured email never reports a successful delivery", async () =>
  run({}, async ({ base, post }) => {
    assert.equal(
      (await (await fetch(base + "/api/contact/config")).json()).available,
      false,
    );
    assert.equal((await post(valid)).status, 503);
  }));
test("delivers to the owner and uses visitor email only as reply-to", async () => {
  let message;
  await run(
    {
      mailer: {
        sendMail: async (data) => {
          message = data;
          return { accepted: ["tekengyvan2@gmail.com"] };
        },
      },
      settings: { from: "sender@example.com" },
    },
    async ({ post }) => {
      const response = await post(valid);
      assert.equal(response.status, 200);
      assert.equal((await response.json()).status, "sent");
      assert.equal(message.from, "sender@example.com");
      assert.equal(message.to, "tekengyvan2@gmail.com");
      assert.equal(message.replyTo, "visitor@example.com");
      assert.ok(message.text.includes(valid.message));
    },
  );
});
test("appointment is explicitly a request pending confirmation", async () => {
  let message;
  await run(
    {
      mailer: {
        sendMail: async (data) => {
          message = data;
          return { accepted: ["owner"] };
        },
      },
      settings: { from: "sender@example.com" },
    },
    async ({ post }) => {
      const response = await post({
        ...valid,
        kind: "appointment",
        date: "2030-10-10",
        time: "14:30",
        timezone: "Africa/Douala",
      });
      assert.equal(response.status, 200);
      assert.match(message.text, /Pending your confirmation/);
      assert.match(message.text, /UTC\+1/);
    },
  );
});
test("rejects past appointments and invalid calendar dates", async () =>
  run({}, async ({ post }) => {
    for (const date of ["2000-01-01", "2030-02-30", "invalid"])
      assert.equal(
        (
          await post({
            ...valid,
            kind: "appointment",
            date,
            time: "10:00",
            timezone: "Africa/Douala",
          })
        ).status,
        400,
      );
  }));
test("rejects invalid fields, header injection and honeypot submissions", async () =>
  run({}, async ({ post }) => {
    for (const data of [
      { ...valid, email: "not-an-email" },
      { ...valid, subject: "Hello\r\nBcc: other@example.com" },
      { ...valid, website: "spam" },
      { ...valid, message: "short" },
    ])
      assert.equal((await post(data)).status, 400);
  }));
test("rejects unwanted origins and rate-limits repeated requests", async () =>
  run({}, async ({ post }) => {
    assert.equal(
      (await post(valid, { Origin: "https://unrelated.example" })).status,
      403,
    );
    for (let n = 0; n < 5; n++) assert.equal((await post(valid)).status, 503);
    assert.equal((await post(valid)).status, 429);
  }));
test("allows the deployed Render frontend origins", async () =>
  run({}, async ({ base }) => {
    for (const origin of [
      "https://portfolio-supinfo.onrender.com",
      "https://portfolio-frontend-tekeng.onrender.com",
    ]) {
      const response = await fetch(base + "/api/contact/config", {
        headers: { Origin: origin },
      });
      assert.equal(response.status, 200);
      assert.equal(response.headers.get("access-control-allow-origin"), origin);
    }
  }));
test("delivery failures never become success responses", async () => {
  for (const mailer of [
    {
      sendMail: async () => {
        throw new Error("SMTP unavailable");
      },
    },
    { sendMail: async () => ({ accepted: [] }) },
  ])
    await run(
      { mailer, settings: { from: "sender@example.com" } },
      async ({ post }) => assert.equal((await post(valid)).status, 502),
    );
});
