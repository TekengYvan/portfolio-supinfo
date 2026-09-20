require("dotenv").config();
const { createApp, configuredTransport } = require("./app");
const app = createApp({
  mailer: configuredTransport(),
  settings: {
    from: process.env.EMAIL_USER
      ? `Yvan Tekeng Portfolio <${process.env.EMAIL_USER}>`
      : undefined,
    to: process.env.EMAIL_TO || "tekengyvan2@gmail.com",
  },
});
if (require.main === module) {
  const port = Number(process.env.PORT || 5000);
  app.listen(port, () =>
    console.log("Portfolio contact API listening on port " + port),
  );
}

module.exports = app;
