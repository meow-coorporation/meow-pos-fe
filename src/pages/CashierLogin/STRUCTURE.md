# CashierLogin Module - File Structure

## Complete Structure Tree

```
src/pages/CashierLogin/
│
├── 📄 index.tsx                 (140 lines) - Main page component
│   ├── State Management (selectedUser, pin, step)
│   ├── Event Handlers (handleKey, handleSelectUser, handleStepChange)
│   ├── Step Router (getStepContent)
│   └── Main Layout (BrandingPanel + Content)
│
├── 📄 types.ts                  (30 lines) - TypeScript definitions
│   ├── User interface
│   ├── Step type
│   ├── PinProps interface
│   ├── UserSelectionProps interface
│   └── StepNavigationProps interface
│
├── 📄 constants.ts              (27 lines) - Application constants
│   ├── USERS array
│   ├── PIN_LENGTH
│   ├── KEYPAD_NUMBERS array
│   └── BRANDING object
│
├── 📄 README.md                 - Module documentation
│
└── 📁 components/               - Reusable UI components
    │
    ├── 📄 PinInput.tsx          (42 lines)
    │   └── Displays 6 PIN boxes with bullet feedback
    │
    ├── 📄 Keypad.tsx            (38 lines)
    │   └── Numeric keypad 0-9 + delete button
    │
    ├── 📄 UserList.tsx          (42 lines)
    │   └── List of users for selection
    │
    ├── 📄 CurrentUserDisplay.tsx (30 lines)
    │   └── Shows current user info (clickable)
    │
    ├── 📄 BrandingPanel.tsx     (48 lines)
    │   └── Left panel with logo and marketing content
    │
    ├── 📄 LoginStep.tsx         (72 lines)
    │   ├── User display
    │   ├── PIN input
    │   ├── Keypad
    │   ├── Forgot PIN link
    │   └── Submit button
    │
    ├── 📄 SelectUserStep.tsx    (35 lines)
    │   ├── Logo/header
    │   └── User list
    │
    ├── 📄 ForgotPinStep.tsx     (38 lines)
    │   ├── Lock icon
    │   ├── Email input
    │   ├── Send button
    │   └── Back to login link
    │
    └── 📄 EmailSentStep.tsx     (35 lines)
        ├── Email icon
        ├── Confirmation message
        ├── Resend link
        └── Back to login link
```

## Component Dependency Graph

```
index.tsx (Main)
    │
    ├─── imports ──> types.ts
    ├─── imports ──> constants.ts
    │
    ├─── uses ──> BrandingPanel.tsx
    │                 └── uses ──> constants.ts (BRANDING)
    │
    └─── uses ──> Step Components:
                  │
                  ├── LoginStep.tsx
                  │     ├── uses ──> PinInput.tsx
                  │     │              └── uses ──> constants.ts (PIN_LENGTH)
                  │     ├── uses ──> Keypad.tsx
                  │     │              └── uses ──> constants.ts (KEYPAD_NUMBERS)
                  │     ├── uses ──> CurrentUserDisplay.tsx
                  │     │              └── uses ──> types.ts (User)
                  │     └── uses ──> constants.ts (BRANDING, PIN_LENGTH)
                  │
                  ├── SelectUserStep.tsx
                  │     ├── uses ──> UserList.tsx
                  │     │              └── uses ──> types.ts (User)
                  │     └── uses ──> constants.ts (BRANDING)
                  │
                  ├── ForgotPinStep.tsx
                  │
                  └── EmailSentStep.tsx
```

## Data Flow

```
User Interaction
       │
       ├──> Keypad.tsx
       │      └──> onKeyPress(value) ──────────┐
       │                                        │
       ├──> CurrentUserDisplay.tsx              │
       │      └──> onClick() ──────────────┐    │
       │                                    │    │
       └──> UserList.tsx                    │    │
              └──> onUserSelect(index) ──┐  │    │
                                          │  │    │
                                          ▼  ▼    ▼
                                   ┌──────────────────┐
                                   │   index.tsx      │
                                   │  (State Manager) │
                                   └──────────────────┘
                                          │
                     ┌────────────────────┼────────────────────┐
                     │                    │                    │
                     ▼                    ▼                    ▼
            ┌─────────────┐      ┌─────────────┐     ┌─────────────┐
            │ selectedUser│      │     pin     │     │    step     │
            │   (state)   │      │   (state)   │     │  (state)    │
            └─────────────┘      └─────────────┘     └─────────────┘
                     │                    │                    │
                     └────────────────────┴────────────────────┘
                                          │
                                          ▼
                                   getStepContent()
                                          │
                     ┌────────────────────┼────────────────────┐
                     ▼                    ▼                    ▼
              LoginStep.tsx       SelectUserStep.tsx    ForgotPinStep.tsx
```

## File Size Summary

| File | Lines | Purpose |
|------|-------|---------|
| `index.tsx` | ~140 | Main page orchestration |
| `types.ts` | ~30 | Type definitions |
| `constants.ts` | ~27 | Constants |
| `PinInput.tsx` | ~42 | PIN boxes UI |
| `Keypad.tsx` | ~38 | Numeric keypad |
| `UserList.tsx` | ~42 | User selection list |
| `CurrentUserDisplay.tsx` | ~30 | Current user display |
| `BrandingPanel.tsx` | ~48 | Branding panel |
| `LoginStep.tsx` | ~72 | Login screen |
| `SelectUserStep.tsx` | ~35 | User selection screen |
| `ForgotPinStep.tsx` | ~38 | Forgot PIN screen |
| `EmailSentStep.tsx` | ~35 | Email sent screen |
| **TOTAL** | **~577** | **Well organized!** |

**OLD: 351 lines in ONE file** (GOD CLASS ❌)  
**NEW: 577 lines in 12 files** (Clean & Modular ✅)

## Import/Export Flow

```typescript
// types.ts
export interface User { ... }
export type Step = ...

// constants.ts
import { User } from './types'
export const USERS: User[] = [ ... ]

// PinInput.tsx
import { PIN_LENGTH } from '../constants'
export default PinInput

// index.tsx
import { Step, User } from './types'
import { USERS, PIN_LENGTH } from './constants'
import LoginStep from './components/LoginStep'
import BrandingPanel from './components/BrandingPanel'
// ... etc
export default CashierLoginPage

// App.tsx
import CashierLoginPage from './pages/CashierLogin'
```

## Testing Strategy

```
Unit Tests:
├── PinInput.test.tsx       - Test PIN display logic
├── Keypad.test.tsx         - Test key press events
├── UserList.test.tsx       - Test user selection
└── ...

Integration Tests:
├── LoginFlow.test.tsx      - Test complete login flow
└── ForgotPinFlow.test.tsx  - Test forgot PIN flow

E2E Tests:
└── cashierLogin.e2e.ts     - Test full user journey
```

## Benefits Visualization

```
BEFORE (God Class):
┌─────────────────────────────────────┐
│  CashierLoginPage.tsx (351 lines)   │
│  ─────────────────────────────────  │
│  Types                               │
│  Constants                           │
│  State                               │
│  Handlers                            │
│  Render Functions (x10)              │
│  JSX (x4 steps)                      │
│  Styles                              │
│  Everything mixed together 😵        │
└─────────────────────────────────────┘

AFTER (Modular):
┌────────┐  ┌────────┐  ┌─────────────┐
│ types  │  │ const  │  │  index.tsx  │
│  (30)  │  │  (27)  │  │    (140)    │
└────────┘  └────────┘  └─────────────┘
                              │
        ┌─────────────────────┴─────────────────────┐
        │              components/                  │
    ┌───────┐  ┌───────┐  ┌───────┐  ┌───────┐
    │  PIN  │  │ Keypad│  │ User  │  │ Steps │
    │  (42) │  │  (38) │  │  (72) │  │(35-72)│
    └───────┘  └───────┘  └───────┘  └───────┘

Each file is small, focused, and easy to understand! 🎉
```

