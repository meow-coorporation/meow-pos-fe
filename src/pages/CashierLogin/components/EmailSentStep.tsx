import React from "react";

interface EmailSentStepProps {
  onBackToLogin: () => void;
  onResend: () => void;
}

/**
 * Email Sent Step Component
 * Confirmation screen after sending PIN recovery email
 */
const EmailSentStep: React.FC<EmailSentStepProps> = ({ onBackToLogin, onResend }) => {
  return (
    <div className="p-4 w-100" style={{ maxWidth: 400 }}>
      <div className="text-center mb-3">
        <span className="display-4">
          <i className="ri-mail-line"></i>
        </span>
        <h5 className="mt-2 mb-1">Forgot PIN</h5>
        <div className="text-xs text-secondary-light mb-3">
          We sent a PIN to <b>kasir@yourmail.com</b>
        </div>
      </div>

      <div className="mb-2 text-center">
        DIDN'T receive the email?{" "}
        <button className="btn btn-link p-0 text-primary-600 text-xs" onClick={onResend}>
          Resend
        </button>
      </div>

      <button className="btn btn-link w-100" onClick={onBackToLogin}>
        Back to login
      </button>
    </div>
  );
};

export default EmailSentStep;

