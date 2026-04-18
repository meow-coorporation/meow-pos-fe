import React, {JSX, useState} from "react";

// ==================== TYPES ====================
interface User {
    name: string;
    time: string;
    avatar: string;
}

type Step = "login" | "select-user" | "forgot" | "email-sent";

// ==================== CONSTANTS ====================
const USERS: User[] = [
    { name: "Broidad", time: "10:00 am - 22:00 pm", avatar: "/assets/images/meow-logo.png" },
    { name: "Leonardo", time: "09:00 am - 22:00 pm", avatar: "/assets/images/meow-logo.png" },
    { name: "Alexa", time: "08:00 am - 22:00 pm", avatar: "/assets/images/meow-logo.png" },
];

const PIN_LENGTH = 6;
const KEYPAD_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// ==================== MAIN COMPONENT ====================
function CashierLoginPage() {
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

    // ========== Render Functions ==========
    /**
     * Render PIN input boxes
     */
    const renderPinBoxes = () => (
        <div className="d-flex justify-content-center gap-2 mb-3">
            {Array.from({ length: PIN_LENGTH }, (_, i) => {
                const hasValue = i < pin.length;
                return (
                    <div
                        key={i}
                        className="border rounded d-flex align-items-center justify-content-center"
                        style={{
                            width: 48,
                            height: 48,
                            fontSize: 32,
                            fontWeight: "bold",
                            backgroundColor: "#fff",
                            color: "#000",
                            borderColor: hasValue ? "#0d6efd" : "#dee2e6",
                            borderWidth: hasValue ? "2px" : "1px",
                        }}
                    >
                        {hasValue ? "●" : ""}
                    </div>
                );
            })}
        </div>
    );

    /**
     * Render numeric keypad with delete button
     */
    const renderKeypad = () => (
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4" style={{ maxWidth: 240 }}>
            {KEYPAD_NUMBERS.map((n) => (
                <button
                    key={n}
                    className="btn btn-outline-secondary"
                    style={{ width: 60, height: 48 }}
                    onClick={() => handleKey(n.toString())}
                >
                    {n}
                </button>
            ))}
            <button
                className="btn btn-outline-secondary"
                style={{ width: 60, height: 48 }}
                onClick={() => handleKey("back")}
            >
                ⌫
            </button>
        </div>
    );

    /**
     * Render user selection list
     */
    const renderUserList = () => (
        <div className="mb-4">
            {USERS.map((user, idx) => (
                <div
                    key={user.name}
                    className={`d-flex align-items-center gap-2 p-2 mb-2 border rounded ${
                        selectedUser === idx ? "border-primary bg-light" : ""
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleSelectUser(idx)}
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

    /**
     * Render current user info (clickable to open dropdown)
     */
    const renderCurrentUser = () => (
        <div
            className="d-flex align-items-center gap-2 mb-3 p-2 rounded"
            style={{ cursor: "pointer" }}
            onClick={handleOpenUserDropdown}
        >
            <img
                src={USERS[selectedUser].avatar}
                alt={USERS[selectedUser].name}
                style={{ width: 40, height: 40, borderRadius: 20 }}
            />
            <div>
                <div className="fw-semibold">{USERS[selectedUser].name}</div>
                <div className="text-xs text-secondary-light">{USERS[selectedUser].time}</div>
            </div>
        </div>
    );

    // ========== Step Content Renderers ==========
    /**
     * Render login step content
     */
    const renderLoginStep = () => (
        <div className="p-4 w-100" style={{ maxWidth: 400 }}>
            {/* Header */}
            <div className="text-center mb-3">
                <img src="/assets/images/meow-logo.png" alt="logo" style={{ width: 100, height: 100 }} />
                <h5 className="mt-2 mb-1">Cashier Login</h5>
                <div className="text-xs text-secondary-light mb-3">
                    Handle transactions efficiently with the Meow cashier system.
                </div>
            </div>

            {/* User Selection */}
            {renderCurrentUser()}

            {/* PIN Input Section */}
            <div className="mb-2 text-center">Please enter your PIN to validate yourself.</div>
            <div className="d-flex flex-column align-items-center w-100">
                {renderPinBoxes()}

                {/* Forgot PIN Link */}
                <div className="mb-2 text-center w-100">
                    <button
                        className="btn btn-link p-0 text-primary-600 text-xs"
                        onClick={() => setStep("forgot")}
                    >
                        Forgot PIN?
                    </button>
                </div>

                {/* Keypad */}
                {renderKeypad()}
            </div>

            {/* Submit Button */}
            <button className="btn btn-primary w-100" disabled={pin.length !== PIN_LENGTH}>
                Start Shift
            </button>
        </div>
    );

    /**
     * Render user selection step content
     */
    const renderSelectUserStep = () => (
        <div className="p-4 w-100" style={{ maxWidth: 400 }}>
            <div className="text-center mb-3">
                <img src="/assets/images/meow-logo.png" alt="logo" style={{ width: 48, height: 48 }} />
                <h5 className="mt-2 mb-1">Select User</h5>
                <div className="text-xs text-secondary-light mb-3">Choose a user to continue.</div>
            </div>
            {renderUserList()}
        </div>
    );

    /**
     * Render forgot PIN step content
     */
    const renderForgotPinStep = () => (
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

            <button className="btn btn-primary w-100 mb-2" onClick={() => setStep("email-sent")}>
                Send
            </button>
            <button className="btn btn-link w-100" onClick={() => setStep("login")}>
                Back to login
            </button>
        </div>
    );

    /**
     * Render email sent confirmation step content
     */
    const renderEmailSentStep = () => (
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
                <button className="btn btn-link p-0 text-primary-600 text-xs">Resend</button>
            </div>

            <button className="btn btn-link w-100" onClick={() => setStep("login")}>
                Back to login
            </button>
        </div>
    );

    /**
     * Get content based on current step
     */
    const getStepContent = (): JSX.Element => {
        switch (step) {
            case "login":
                return renderLoginStep();
            case "select-user":
                return renderSelectUserStep();
            case "forgot":
                return renderForgotPinStep();
            case "email-sent":
                return renderEmailSentStep();
            default:
                return renderLoginStep();
        }
    };

    // ========== Main Render ==========
    return (
        <div className="d-flex min-vh-100">
            {/* Left Branding Panel */}
            <div
                className="d-flex flex-column justify-content-center align-items-center bg-orange"
                style={{
                    flex: 1,
                    minWidth: 400,
                    background: "#FF5A1F",
                    borderRadius: 24,
                    margin: 24,
                }}
            >
                <div className="text-white text-center" style={{ maxWidth: 340 }}>
                    <h2 className="fw-bold mb-4">
                        Transform Your Business with <br />
                        <span style={{ color: "#fff" }}>Meow</span>
                    </h2>
                    <img
                        src="/assets/images/meow-logo.png"
                        alt="POS"
                        className="mb-4"
                        style={{ width: 220, borderRadius: 16 }}
                    />
                    <img
                        src="/assets/images/meow-logo.png"
                        alt="POS UI"
                        className="mb-4"
                        style={{ width: 220, borderRadius: 16, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
                    />
                    <div className="mt-4 text-sm">
                        Your journey to faster transactions and smoother operations starts here.
                    </div>
                </div>
            </div>

            {/* Right Content Panel */}
            <div
                className="d-flex flex-column justify-content-center align-items-center flex-grow-1"
                style={{ background: "#fff" }}
            >
                {getStepContent()}

                {/* Footer */}
                <div className="text-center text-xs text-secondary-light mt-4">
                    ©2026 Meow, Inc. All rights reserved. &nbsp;
                    <a href="#">Privacy Policy</a> · <a href="#">Terms & Conditions</a>
                </div>
            </div>
        </div>
    );
}

export default CashierLoginPage;

