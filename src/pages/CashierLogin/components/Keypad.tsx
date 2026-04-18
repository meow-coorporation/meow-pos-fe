import React from "react";
import { KEYPAD_NUMBERS } from "../constants";

interface KeypadProps {
  onKeyPress: (value: string) => void;
}

/**
 * Keypad Component
 * Displays numeric keypad (0-9) with delete button
 */
const Keypad: React.FC<KeypadProps> = ({ onKeyPress }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-2 mb-4" style={{ maxWidth: 240 }}>
      {KEYPAD_NUMBERS.map((n) => (
        <button
          key={n}
          className="btn btn-outline-secondary"
          style={{ width: 60, height: 48 }}
          onClick={() => onKeyPress(n.toString())}
        >
          {n}
        </button>
      ))}
      <button
        className="btn btn-outline-secondary"
        style={{ width: 60, height: 48 }}
        onClick={() => onKeyPress("back")}
      >
        ⌫
      </button>
    </div>
  );
};

export default Keypad;

