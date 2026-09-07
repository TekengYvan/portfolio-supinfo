export default function LifelineVisual({ language = "fr" }) {
  return (
    <div className="lifeline-composite">
      <img
        className="lifeline-car"
        src="/images/lifeline-car.jpeg"
        alt={
          language === "fr"
            ? "Prototype automobile Lifeline"
            : "Lifeline car prototype"
        }
      />
      <img
        className="lifeline-phone"
        src="/images/lifeline-app.png"
        alt={
          language === "fr"
            ? "Interface Lifeline Saver"
            : "Lifeline Saver interface"
        }
      />
      <span>
        LIFELINE <b>SAVER</b>
      </span>
    </div>
  );
}
