import React from "react";

interface ForgotPinStepProps {
  onSend: () => void;
  onBackToLogin: () => void;
}

/**
 * Forgot PIN Step Component
 * Shows email input form to receive PIN
 */
const ForgotPinStep: React.FC<ForgotPinStepProps> = ({ onSend, onBackToLogin }) => {
  return (
    <div className="p-4 w-100" style={{ maxWidth: 400 }}>
      <div className="text-center mb-3">
        <span className="display-4">
          <i className="ri-lock-2-line"></i>
        </span>
        <h5 className="mt-2 mb-1">Forgot PIN</h5>
        <div className="text-xs text-secondary-light mb-3">
          Enter your email to receive your PIN.
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" placeholder="Enter your email address" />
      </div>

      <button className="btn btn-primary w-100 mb-2" onClick={onSend}>
        Send
      </button>
      <button className="btn btn-link w-100" onClick={onBackToLogin}>
        Back to login
      </button>
    </div>
  );
};

export default ForgotPinStep;

