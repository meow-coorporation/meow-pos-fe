import React from "react";
import { User } from "../types";

interface CurrentUserDisplayProps {
  user: User;
  onClick: () => void;
}

/**
 * Current User Display Component
 * Shows currently selected user with clickable area to change user
 */
const CurrentUserDisplay: React.FC<CurrentUserDisplayProps> = ({ user, onClick }) => {
  return (
    <div
      className="d-flex align-items-center gap-2 mb-3 p-2 rounded"
      style={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <img
        src={user.avatar}
        alt={user.name}
        style={{ width: 40, height: 40, borderRadius: 20 }}
      />
      <div>
        <div className="fw-semibold">{user.name}</div>
        <div className="text-xs text-secondary-light">{user.time}</div>
      </div>
    </div>
  );
};

export default CurrentUserDisplay;

