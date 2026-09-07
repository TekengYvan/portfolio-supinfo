import { useEffect, useState } from "react";
export default function Typewriter({ word = "TEKENG DJANG YVAN DUPLEX PACOM" }) {
  const [text, setText] = useState(word);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer;
    let index = word.length;
    let deleting = true;
    function tick() {
      if (media.matches) {
        setText(word);
        return;
      }
      index += deleting ? -1 : 1;
      setText(word.slice(0, index));
      let delay = deleting ? 95 : 145;
      if (index === 0) {
        deleting = false;
        delay = 450;
      }
      if (index === word.length) {
        deleting = true;
        delay = 2400;
      }
      timer = setTimeout(tick, delay);
    }
    function reset() {
      clearTimeout(timer);
      index = word.length;
      deleting = true;
      setText(word);
      if (!media.matches) timer = setTimeout(tick, 2400);
    }
    media.addEventListener("change", reset);
    reset();
    return () => {
      clearTimeout(timer);
      media.removeEventListener("change", reset);
    };
  }, [word]);
  return (
    <span className="typed-line" aria-hidden="true">
      <span className="typed-measure">{word}<span className="typing-cursor" /></span>
      <span className="typed-content">{text}<span className="typing-cursor" /></span>
    </span>
  );
}
