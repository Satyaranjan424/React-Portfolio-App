import { useState } from "react";

const GoldToggle = ({ onToggle }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    const newState = !active;
    setActive(newState);
    onToggle(newState); // send state to parent
  };

  return (
    <div className="gold-toggle">
      <span className="gold-label">EFFECT</span>

      <button
        onClick={handleClick}
        className={`toggle-btn ${active ? "active" : ""}`}
      >
        <div className="toggle-circle"></div>
      </button>
    </div>
  );
};

export default GoldToggle;