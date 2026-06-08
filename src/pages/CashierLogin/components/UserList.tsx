import React from "react";
import { User } from "../types";

interface UserListProps {
  users: User[];
  selectedUser: number;
  onUserSelect: (index: number) => void;
}

/**
 * User List Component
 * Displays list of available users for selection
 */
const UserList: React.FC<UserListProps> = ({ users, selectedUser, onUserSelect }) => {
  return (
    <div className="mb-4">
      {users.map((user, idx) => (
        <div
          key={user.name}
          className={`d-flex align-items-center gap-2 p-2 mb-2 border rounded ${
            selectedUser === idx ? "border-primary bg-light" : ""
          }`}
          style={{ cursor: "pointer" }}
          onClick={() => onUserSelect(idx)}
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
      ))}
    </div>
  );
};

export default UserList;

