# 🎨 Panduan Visual - Cashier Login Page

## Flow Diagram

### User Journey Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    User Opens /cashier-login                 │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
        ┌─────────────────────────────┐
        │      LOGIN STEP             │
        │  ┌───────────────────────┐  │
        │  │  Logo & Title         │  │
        │  ├───────────────────────┤  │
        │  │  [👤 Broidad]   [▼]  │◄─┼─── Klik area ini
        │  ├───────────────────────┤  │     untuk ganti user
        │  │  Please enter PIN     │  │
        │  ├───────────────────────┤  │
        │  │  [ ][ ][ ][ ][ ][ ]   │  │ ◄─── PIN boxes
        │  ├───────────────────────┤  │
        │  │   Forgot PIN?         │◄─┼─── Klik untuk lupa PIN
        │  ├───────────────────────┤  │
        │  │  [1][2][3]            │  │
        │  │  [4][5][6]            │  │ ◄─── Keypad
        │  │  [7][8][9]            │  │
        │  │    [0][⌫]             │  │
        │  ├───────────────────────┤  │
        │  │  [Start Shift]        │  │ ◄─── Submit button
        │  └───────────────────────┘  │
        └───────────┬─┬───────────┬───┘
                    │ │           │
        Klik user ──┘ │           └── Klik Forgot PIN
                      │
       ┌──────────────┴──────────────┐
       │                              │
       ▼                              ▼
┌─────────────────┐          ┌─────────────────┐
│ SELECT USER     │          │ FORGOT PIN      │
│ ┌─────────────┐ │          │ ┌─────────────┐ │
│ │ 👤 Broidad  │ │          │ │ 🔒 Icon     │ │
│ ├─────────────┤ │          │ ├─────────────┤ │
│ │ 👤 Leonardo │ │          │ │ Email:      │ │
│ ├─────────────┤ │          │ │ [_______]   │ │
│ │ 👤 Alexa    │ │          │ ├─────────────┤ │
│ └─────────────┘ │          │ │ [Send]      │ │
│                 │          │ │ Back to     │ │
└─────────────────┘          │ │ login       │ │
       │                     └─┴─────────────┘
       │                              │
       │ Pilih user                   │ Klik Send
       │                              │
       ▼                              ▼
    Kembali ke                 ┌─────────────────┐
    LOGIN STEP                 │ EMAIL SENT      │
    dengan user baru           │ ┌─────────────┐ │
                               │ │ ✉️ Icon     │ │
                               │ ├─────────────┤ │
                               │ │ Email sent! │ │
                               │ │ to ...      │ │
                               │ ├─────────────┤ │
                               │ │ Didn't      │ │
                               │ │ receive?    │ │
                               │ │ [Resend]    │ │
                               │ ├─────────────┤ │
                               │ │ Back to     │ │
                               │ │ login       │ │
                               │ └─────────────┘ │
                               └─────────────────┘
                                       │
                                       │ Klik Back
                                       ▼
                                Kembali ke LOGIN STEP
```

---

## Component Hierarchy

### Tree Structure

```
CashierLoginPage (index.tsx)
│
├─── BrandingPanel
│    └── Logo, Marketing Text, Images
│
└─── Step Content (berdasarkan state 'step')
     │
     ├─── if step === "login"
     │    └── LoginStep
     │         ├── Logo & Header
     │         ├── CurrentUserDisplay
     │         │    └── User Avatar + Info
     │         ├── PIN Input Section
     │         │    ├── PinInput
     │         │    │    └── 6 PIN boxes
     │         │    ├── Forgot PIN Link
     │         │    └── Keypad
     │         │         └── Buttons 0-9 + Delete
     │         └── Submit Button
     │
     ├─── if step === "select-user"
     │    └── SelectUserStep
     │         ├── Logo & Header
     │         └── UserList
     │              └── User Items (clickable)
     │
     ├─── if step === "forgot"
     │    └── ForgotPinStep
     │         ├── Lock Icon
     │         ├── Email Input
     │         └── Buttons (Send, Back)
     │
     └─── if step === "email-sent"
          └── EmailSentStep
               ├── Email Icon
               ├── Confirmation Message
               └── Buttons (Resend, Back)
```

---

## Data Flow

### State to UI

```
STATE (di index.tsx)
│
├── selectedUser: number (0)
│   │
│   └──> Digunakan oleh:
│        ├── CurrentUserDisplay (tampilkan user)
│        ├── UserList (highlight user terpilih)
│        └── LoginStep (tampilkan user info)
│
├── pin: string ("")
│   │
│   └──> Digunakan oleh:
│        ├── PinInput (tampilkan bullet)
│        └── Submit button (enable/disable)
│
└── step: Step ("login")
    │
    └──> Menentukan:
         └── Component mana yang ditampilkan
```

### Event Flow

```
USER ACTION
    │
    ├─── Tekan keypad "1"
    │    └──> onClick={() => handleKey("1")}
    │         └──> setPin(prev => prev + "1")
    │              └──> pin berubah dari "" jadi "1"
    │                   └──> PinInput re-render
    │                        └──> Tampilkan 1 bullet
    │
    ├─── Klik user area
    │    └──> onClick={handleOpenUserDropdown}
    │         ├──> setStep("select-user")
    │         └──> setPin("")
    │              └──> Component berubah ke SelectUserStep
    │
    └─── Pilih user
         └──> onClick={() => handleSelectUser(index)}
              ├──> setSelectedUser(index)
              ├──> setStep("login")
              └──> setPin("")
                   └──> Kembali ke LoginStep dengan user baru
```

---

## File Dependencies

### Import Graph

```
index.tsx
    │
    ├── import { Step, User } from './types'
    │
    ├── import { USERS, PIN_LENGTH, ... } from './constants'
    │   └── constants.ts
    │       └── import { User } from './types'
    │
    └── import Components from './components/...'
        │
        ├── BrandingPanel
        │   └── import { BRANDING } from '../constants'
        │
        ├── LoginStep
        │   ├── import PinInput
        │   │   └── import { PIN_LENGTH } from '../constants'
        │   │
        │   ├── import Keypad
        │   │   └── import { KEYPAD_NUMBERS } from '../constants'
        │   │
        │   ├── import CurrentUserDisplay
        │   │   └── import { User } from '../types'
        │   │
        │   └── import { BRANDING, PIN_LENGTH } from '../constants'
        │
        ├── SelectUserStep
        │   ├── import UserList
        │   │   └── import { User } from '../types'
        │   │
        │   └── import { BRANDING } from '../constants'
        │
        ├── ForgotPinStep (no dependencies)
        │
        └── EmailSentStep (no dependencies)
```

---

## Component Props Flow

### Parent → Child

```
index.tsx (Parent)
    │
    │ selectedUser={0}
    │ pin="123"
    ▼
LoginStep (Child)
    │
    │ currentUser={USERS[0]}
    │ pin="123"
    │ onKeyPress={handleKey}
    ▼
┌─────────────┬─────────────┬─────────────┐
│             │             │             │
▼             ▼             ▼             ▼
Current       PinInput      Keypad        Submit
UserDisplay                               Button
│             │             │
│ user={}     │ pin="123"   │ onKeyPress={}
│ onClick={}  │             │
▼             ▼             ▼
Render        Render        Render
user info     3 bullets     keypad buttons
```

---

## State Update Cycle

```
1. Initial State
   ┌──────────────────┐
   │ pin = ""         │
   │ selectedUser = 0 │
   │ step = "login"   │
   └──────────────────┘
           │
           ▼
2. User tekan "1"
   ┌──────────────────┐
   │ handleKey("1")   │
   └──────────────────┘
           │
           ▼
3. Update State
   ┌──────────────────┐
   │ setPin("1")      │
   └──────────────────┘
           │
           ▼
4. React Re-render
   ┌──────────────────┐
   │ Component        │
   │ re-renders with  │
   │ new pin value    │
   └──────────────────┘
           │
           ▼
5. UI Updates
   ┌──────────────────┐
   │ PinInput shows   │
   │ 1 bullet (●)     │
   └──────────────────┘
```

---

## Styling Architecture

### Bootstrap Classes Used

```
Layout:
├── d-flex              → Display flex
├── flex-column         → Flex direction column
├── justify-content-*   → Horizontal alignment
├── align-items-*       → Vertical alignment
├── gap-*               → Spacing between items
└── w-100               → Width 100%

Spacing:
├── p-*                 → Padding
├── m-*                 → Margin
├── mb-*                → Margin bottom
└── mt-*                → Margin top

Components:
├── btn                 → Button base
├── btn-primary         → Primary button
├── btn-link            → Link button
├── border              → Border
├── rounded             → Border radius
└── text-center         → Center text
```

### Inline Styles

```typescript
// Used for:
// 1. Dynamic values (from props/state)
style={{ borderColor: hasValue ? "#0d6efd" : "#dee2e6" }}

// 2. Specific measurements
style={{ width: 48, height: 48 }}

// 3. Colors not in Bootstrap
style={{ background: "#FF5A1F" }}
```

---

## TypeScript Type Flow

```
types.ts defines:
├── User
│   ├── name: string
│   ├── time: string
│   └── avatar: string
│
├── Step
│   └── "login" | "select-user" | "forgot" | "email-sent"
│
└── Component Props Interfaces
    ├── PinProps
    ├── UserSelectionProps
    └── StepNavigationProps

Used in:
├── constants.ts
│   └── USERS: User[]
│
├── index.tsx
│   ├── selectedUser: number
│   ├── pin: string
│   └── step: Step
│
└── components/
    ├── UserList({ users, selectedUser, ... }: UserSelectionProps)
    ├── CurrentUserDisplay({ user, ... }: { user: User })
    └── ...
```

---

## Debugging Flow

```
1. Error terjadi
   │
   ├─── Cek Browser Console
   │    └─── Lihat error message
   │         ├─── "Cannot find module"
   │         │    └─── Cek import path
   │         │
   │         ├─── "undefined is not a function"
   │         │    └─── Cek props yang dikirim
   │         │
   │         └─── "State not updating"
   │              └─── Cek setState callback
   │
   ├─── Cek React DevTools
   │    └─── Lihat component state & props
   │         └─── Apakah sesuai ekspektasi?
   │
   └─── Add console.log
        └─── Log state/props di berbagai tempat
             └─── Trace alur data
```

---