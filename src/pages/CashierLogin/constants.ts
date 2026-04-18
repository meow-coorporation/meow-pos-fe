import { User } from "./types";

/**
 * List of available users for cashier login
 */
export const USERS: User[] = [
  { name: "Broidad", time: "10:00 am - 22:00 pm", avatar: "/assets/images/meow-logo.png" },
  { name: "Leonardo", time: "09:00 am - 22:00 pm", avatar: "/assets/images/meow-logo.png" },
  { name: "Alexa", time: "08:00 am - 22:00 pm", avatar: "/assets/images/meow-logo.png" },
];

/**
 * PIN length configuration
 */
export const PIN_LENGTH = 6;

/**
 * Numbers displayed on the keypad
 */
export const KEYPAD_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

/**
 * App branding configuration
 */
export const BRANDING = {
  appName: "Meow",
  tagline: "Transform Your Business with",
  description: "Your journey to faster transactions and smoother operations starts here.",
  logoPath: "/assets/images/meow-logo.png",
  brandColor: "#FF5A1F",
};

