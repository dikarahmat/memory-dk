import Card from "./Card";

function Board({ cards, onFlip }) {
  const cols = cards.length <= 8 ? 4 : cards.length <= 16 ? 4 : 6;
  return (
    <div className="board" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {cards.map((card) => (
        <Card key={card.id} card={card} onFlip={onFlip} />
      ))}
    </div>
  );
}

export default Board;
