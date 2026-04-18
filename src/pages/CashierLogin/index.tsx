import React, {JSX, useState} from "react";
import BrandingPanel from "./components/BrandingPanel";
import LoginStep from "./components/LoginStep";
import SelectUserStep from "./components/SelectUserStep";
import ForgotPinStep from "./components/ForgotPinStep";
import EmailSentStep from "./components/EmailSentStep";
import {Step} from "./types";
import {USERS, PIN_LENGTH, BRANDING} from "./constants";

/**
 * Cashier Login Page
 * Main page component for cashier authentication
 */
const CashierLoginPage: React.FC = () => {
    // ========== State Management ==========
    const [selectedUser, setSelectedUser] = useState<number>(0);
    const [pin, setPin] = useState<string>("");
    const [step, setStep] = useState<Step>("login");

    // ========== Event Handlers ==========
    /**
     * Handle keypad button press
     * @param val - The value pressed ("back" for delete, or number as string)
     */
    const handleKey = (val: string): void => {
        if (val === "back") {
            setPin((prev) => prev.slice(0, -1));
        } else {
            setPin((prev) => (prev.length < PIN_LENGTH ? prev + val : prev));
        }
    };

    /**
     * Open user selection dropdown and reset PIN
     */
    const handleOpenUserDropdown = (): void => {
        setStep("select-user");
        setPin("");
    };

    /**
     * Select a user from the dropdown and return to login
     * @param index - Index of the selected user
     */
    const handleSelectUser = (index: number): void => {
        setSelectedUser(index);
        setStep("login");
        setPin("");
    };

    /**
     * Navigate to a specific step
     * @param newStep - The step to navigate to
     */
    const handleStepChange = (newStep: Step): void => {
        setStep(newStep);
    };

    /**
     * Handle resend email action (placeholder)
     */
    const handleResend = (): void => {
        // TODO: Implement resend email logic
        console.log("Resend email");
    };

    // ========== Step Content Renderer ==========
    /**
     * Get content based on current step
     */
    const getStepContent = (): JSX.Element => {
        switch (step) {
            case "login":
                return (
                    <LoginStep
                        currentUser={USERS[selectedUser]}
                        pin={pin}
                        onKeyPress={handleKey}
                        onUserClick={handleOpenUserDropdown}
                        onForgotPinClick={() => handleStepChange("forgot")}
                    />
                );
            case "select-user":
                return (
                    <SelectUserStep
                        users={USERS}
                        selectedUser={selectedUser}
                        onUserSelect={handleSelectUser}
                    />
                );
            case "forgot":
                return (
                    <ForgotPinStep
                        onSend={() => handleStepChange("email-sent")}
                        onBackToLogin={() => handleStepChange("login")}
                    />
                );
            case "email-sent":
                return (
                    <EmailSentStep
                        onBackToLogin={() => handleStepChange("login")}
                        onResend={handleResend}
                    />
                );
            default:
                return (
                    <LoginStep
                        currentUser={USERS[selectedUser]}
                        pin={pin}
                        onKeyPress={handleKey}
                        onUserClick={handleOpenUserDropdown}
                        onForgotPinClick={() => handleStepChange("forgot")}
                    />
                );
        }
    };

    // ========== Main Render ==========
    return (
        <div className="d-flex min-vh-100">
            {/* Left Branding Panel */}
            <BrandingPanel/>

            {/* Right Content Panel */}
            <div
                className="d-flex flex-column justify-content-center align-items-center flex-grow-1"
                style={{background: "#fff"}}
            >
                {getStepContent()}

                {/* Footer */}
                <div className="text-center text-xs text-secondary-light mt-4">
                    ©2026 {BRANDING.appName}, Inc. All rights reserved. &nbsp;
                    <a href="#">Privacy Policy</a> · <a href="#">Terms & Conditions</a>
                </div>
            </div>
        </div>
    );
};

export default CashierLoginPage;

