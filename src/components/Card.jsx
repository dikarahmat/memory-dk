function Card({ card, onFlip }) {
  return (
    <div
      className={`card ${card.flipped || card.matched ? "flipped" : ""} ${card.matched ? "matched" : ""}`}
      onClick={() => onFlip(card.id)}
    >
      <div className="card-inner">
        <div className="card-front">?</div>
        <div className="card-back">{card.emoji}</div>
      </div>
    </div>
  );
}

export default Card;
