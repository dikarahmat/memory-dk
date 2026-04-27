function WinModal({ moves, time, onRestart }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-emoji">🏆</div>
        <h2 className="modal-title">You Win!</h2>
        <p className="modal-sub">Great memory!</p>
        <div className="modal-stats">
          <div className="modal-stat">
            <span className="modal-stat-label">moves</span>
            <span className="modal-stat-value">{moves}</span>
          </div>
          <div className="modal-stat">
            <span className="modal-stat-label">time</span>
            <span className="modal-stat-value">{time}</span>
          </div>
        </div>
        <button className="modal-btn" onClick={onRestart}>play again →</button>
      </div>
    </div>
  );
}

export default WinModal;
