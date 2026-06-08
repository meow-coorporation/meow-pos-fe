/**
 * User interface representing a cashier user
 */
export interface User {
  name: string;
  time: string;
  avatar: string;
}

/**
 * Step type for navigation flow
 */
export type Step = "login" | "select-user" | "forgot" | "email-sent";

/**
 * Props for components that need PIN state
 */
export interface PinProps {
  pin: string;
  onPinChange: (pin: string) => void;
}

/**
 * Props for components that need user selection
 */
export interface UserSelectionProps {
  users: User[];
  selectedUser: number;
  onUserSelect: (index: number) => void;
}

/**
 * Props for step navigation
 */
export interface StepNavigationProps {
  onStepChange: (step: Step) => void;
}

