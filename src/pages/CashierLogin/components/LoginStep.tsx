import React from "react";
import PinInput from "./PinInput";
import Keypad from "./Keypad";
import CurrentUserDisplay from "./CurrentUserDisplay";
import { User, Step } from "../types";
import { PIN_LENGTH, BRANDING } from "../constants";

interface LoginStepProps {
  currentUser: User;
  pin: string;
  onKeyPress: (value: string) => void;
  onUserClick: () => void;
  onForgotPinClick: () => void;
}

/**
 * Login Step Component
 * Main login screen with PIN input
 */
const LoginStep: React.FC<LoginStepProps> = ({
  currentUser,
  pin,
  onKeyPress,
  onUserClick,
  onForgotPinClick,
}) => {
  return (
    <div className="p-4 w-100" style={{ maxWidth: 400 }}>
      {/* Header */}
      <div className="text-center mb-3">
        <img src={BRANDING.logoPath} alt="logo" style={{ width: 100, height: 100 }} />
        <h5 className="mt-2 mb-1">Cashier Login</h5>
        <div className="text-xs text-secondary-light mb-3">
          Handle transactions efficiently with the {BRANDING.appName} cashier system.
        </div>
      </div>

      {/* User Selection */}
      <CurrentUserDisplay user={currentUser} onClick={onUserClick} />

      {/* PIN Input Section */}
      <div className="mb-2 text-center">Please enter your PIN to validate yourself.</div>
      <div className="d-flex flex-column align-items-center w-100">
        <PinInput pin={pin} />

        {/* Forgot PIN Link */}
        <div className="mb-2 text-center w-100">
          <button
            className="btn btn-link p-0 text-primary-600 text-xs"
            onClick={onForgotPinClick}
          >
            Forgot PIN?
          </button>
        </div>

        {/* Keypad */}
        <Keypad onKeyPress={onKeyPress} />
      </div>

      {/* Submit Button */}
      <button className="btn btn-primary w-100" disabled={pin.length !== PIN_LENGTH}>
        Start Shift
      </button>
    </div>
  );
};

export default LoginStep;

