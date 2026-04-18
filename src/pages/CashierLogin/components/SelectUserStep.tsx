import React from "react";
import UserList from "./UserList";
import { User } from "../types";
import { BRANDING } from "../constants";

interface SelectUserStepProps {
  users: User[];
  selectedUser: number;
  onUserSelect: (index: number) => void;
}

/**
 * Select User Step Component
 * Shows list of users to select from
 */
const SelectUserStep: React.FC<SelectUserStepProps> = ({
  users,
  selectedUser,
  onUserSelect,
}) => {
  return (
    <div className="p-4 w-100" style={{ maxWidth: 400 }}>
      <div className="text-center mb-3">
        <img src={BRANDING.logoPath} alt="logo" style={{ width: 48, height: 48 }} />
        <h5 className="mt-2 mb-1">Select User</h5>
        <div className="text-xs text-secondary-light mb-3">Choose a user to continue.</div>
      </div>
      <UserList users={users} selectedUser={selectedUser} onUserSelect={onUserSelect} />
    </div>
  );
};

export default SelectUserStep;

