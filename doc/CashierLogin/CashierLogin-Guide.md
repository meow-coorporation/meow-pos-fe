# 📚 Dokumentasi Cashier Login Page - Untuk Developer Junior

## 🎯 Tujuan Dokumentasi

Dokumentasi ini dibuat untuk membantu developer junior yang baru belajar React memahami:
- Cara kerja React di project ini
- Struktur folder dan file
- Konsep-konsep React yang digunakan
- Cara memodifikasi atau menambah fitur

---

## 📋 Daftar Isi

1. [Pengenalan React](#1-pengenalan-react)
2. [Struktur Project](#2-struktur-project)
3. [Cara Kerja Page Login](#3-cara-kerja-page-login)
4. [Penjelasan Setiap Komponen](#4-penjelasan-setiap-komponen)
5. [Konsep React yang Digunakan](#5-konsep-react-yang-digunakan)
6. [Tutorial Modifikasi](#6-tutorial-modifikasi)
7. [Common Issues & Solutions](#7-common-issues--solutions)
8. [Best Practices](#8-best-practices)

---

## 1. Pengenalan React

### Apa itu React?

React adalah library JavaScript untuk membuat user interface (tampilan). Bayangkan React seperti LEGO blocks - kamu bisa membuat komponen kecil-kecil, lalu menyatukannya menjadi aplikasi yang besar.

### Konsep Dasar React

#### 1.1 Component (Komponen)

Komponen adalah "building block" dari aplikasi React. Seperti puzzle, setiap piece adalah komponen.

```typescript
// Contoh komponen sederhana
function HelloWorld() {
  return <h1>Hello World!</h1>;
}
```

#### 1.2 Props (Properties)

Props adalah cara untuk mengirim data dari parent component ke child component.

```typescript
// Parent mengirim data
<UserCard name="John" age={25} />

// Child menerima data
function UserCard(props) {
  return <div>{props.name} - {props.age} tahun</div>;
}
```

#### 1.3 State (Status)

State adalah data yang bisa berubah-ubah. Ketika state berubah, React akan otomatis update tampilan.

```typescript
const [count, setCount] = useState(0); // count dimulai dari 0

// Ketika tombol diklik, count bertambah
<button onClick={() => setCount(count + 1)}>
  Klik: {count}
</button>
```

---

## 2. Struktur Project

### 2.1 Folder Structure

```
meow-pos-fe/
├── src/
│   ├── pages/                    # Halaman-halaman aplikasi
│   │   └── CashierLogin/         # 👈 Folder login page kita
│   │       ├── index.tsx         # File utama
│   │       ├── types.ts          # Definisi tipe data
│   │       ├── constants.ts      # Data tetap/konstan
│   │       └── components/       # Komponen UI
│   │           ├── PinInput.tsx
│   │           ├── Keypad.tsx
│   │           └── ...
│   ├── App.tsx                   # Router utama
│   └── main.tsx                  # Entry point aplikasi
├── public/
│   └── assets/                   # Gambar, CSS, dll
└── doc/                          # 👈 Dokumentasi (folder ini)
```

### 2.2 Kenapa Dipisah-pisah?

**BEFORE (Bad):** Semua kode dalam 1 file besar (351 baris) ❌
- Susah dibaca
- Susah di-maintain
- Susah untuk kerja tim

**AFTER (Good):** Dipisah ke file-file kecil ✅
- Mudah dibaca
- Mudah diperbaiki
- Tim bisa kerja parallel

---

## 3. Cara Kerja Page Login

### 3.1 Flow Diagram

```
User membuka /cashier-login
        ↓
App.tsx mengarahkan ke CashierLogin/index.tsx
        ↓
index.tsx render komponen sesuai step:
        ↓
    ┌───┴───┬───────────┬──────────┐
    ↓       ↓           ↓          ↓
 LoginStep SelectUser ForgotPin EmailSent
```

### 3.2 Step-by-Step User Journey

1. **LoginStep**: User melihat form login
   - Pilih user (atau klik untuk ganti)
   - Input PIN dengan keypad
   - Klik "Start Shift"

2. **SelectUserStep**: Jika user klik area user
   - Tampil list semua user
   - User pilih salah satu
   - Kembali ke LoginStep dengan user baru

3. **ForgotPinStep**: Jika user klik "Forgot PIN?"
   - Tampil form email
   - User input email
   - Klik "Send"

4. **EmailSentStep**: Setelah kirim email
   - Tampil konfirmasi
   - User bisa resend atau back to login

### 3.3 State Management

State adalah "memory" dari aplikasi. Di login page kita punya 3 state:

```typescript
const [selectedUser, setSelectedUser] = useState(0);     // User mana yang dipilih (index)
const [pin, setPin] = useState("");                       // PIN yang diinput
const [step, setStep] = useState("login");                // Step mana yang aktif
```

---

## 4. Penjelasan Setiap Komponen

### 4.1 index.tsx (Main Page)

**Fungsi:** Mengatur semua logic dan routing

**Konsep yang dipakai:**
- `useState`: Menyimpan data (selectedUser, pin, step)
- `Event Handlers`: Function untuk handle user action
- `Conditional Rendering`: Tampilkan component sesuai kondisi

**Code Structure:**
```typescript
function CashierLoginPage() {
  // 1. State Management
  const [selectedUser, setSelectedUser] = useState(0);
  
  // 2. Event Handlers
  const handleKey = (val: string) => { ... }
  
  // 3. Step Router
  const getStepContent = () => {
    switch (step) {
      case "login": return <LoginStep ... />;
      // ...
    }
  }
  
  // 4. Main Render
  return (
    <div>
      <BrandingPanel />
      {getStepContent()}
    </div>
  );
}
```

### 4.2 types.ts (Type Definitions)

**Fungsi:** Mendefinisikan tipe data untuk TypeScript

**Kenapa penting?**
- TypeScript membantu catch error sebelum run
- Auto-complete di IDE jadi lebih bagus
- Code jadi lebih mudah dipahami

**Example:**
```typescript
// Tanpa type (JavaScript biasa)
function greet(name) {  // name bisa apa aja
  return "Hello " + name;
}

// Dengan type (TypeScript)
function greet(name: string) {  // name HARUS string
  return "Hello " + name;
}

greet(123); // ❌ Error! Harus string
greet("John"); // ✅ OK
```

### 4.3 constants.ts (Constants)

**Fungsi:** Menyimpan data yang tidak berubah

**Keuntungan:**
- Mudah diubah di satu tempat
- Tidak perlu cari-cari di code
- Lebih terorganisir

**Example:**
```typescript
// ❌ Bad: Magic numbers di mana-mana
if (pin.length === 6) { ... }
if (pin.length === 6) { ... }
if (pin.length === 6) { ... }

// ✅ Good: Pakai constant
const PIN_LENGTH = 6;
if (pin.length === PIN_LENGTH) { ... }
```

### 4.4 Components

#### PinInput.tsx

**Fungsi:** Menampilkan 6 kotak untuk PIN

**Cara kerja:**
1. Terima `pin` dari parent (props)
2. Loop 6 kali untuk buat 6 kotak
3. Jika index < panjang PIN, tampilkan bullet (●)

```typescript
// Simplified version
{[0, 1, 2, 3, 4, 5].map((i) => (
  <div key={i}>
    {i < pin.length ? "●" : ""}
  </div>
))}
```

**Konsep React:**
- **Props**: Menerima data `pin` dari parent
- **Array.map()**: Loop untuk render multiple elements
- **Conditional Rendering**: Tampilkan ● atau kosong

#### Keypad.tsx

**Fungsi:** Menampilkan tombol angka 0-9 dan delete

**Cara kerja:**
1. Terima `onKeyPress` function dari parent
2. Render tombol untuk setiap angka
3. Ketika diklik, panggil `onKeyPress(angka)`

```typescript
// Simplified version
<button onClick={() => onKeyPress("1")}>1</button>
<button onClick={() => onKeyPress("2")}>2</button>
// ...
<button onClick={() => onKeyPress("back")}>⌫</button>
```

**Konsep React:**
- **Event Handler**: onClick memanggil function
- **Callback Props**: Parent kirim function, child panggil function

#### UserList.tsx

**Fungsi:** Menampilkan list user untuk dipilih

**Cara kerja:**
1. Terima array `users`, `selectedUser`, dan `onUserSelect`
2. Loop untuk setiap user
3. Jika user dipilih, kasih highlight
4. Ketika diklik, panggil `onUserSelect(index)`

**Konsep React:**
- **Array.map()**: Loop array
- **Conditional Styling**: Ubah style sesuai kondisi
- **Event Propagation**: Klik di mana saja di item akan trigger

---

## 5. Konsep React yang Digunakan

### 5.1 Hooks

Hooks adalah function khusus dari React yang memberikan "kekuatan super" ke function component.

#### useState

**Fungsi:** Menyimpan data yang bisa berubah

**Syntax:**
```typescript
const [state, setState] = useState(initialValue);
```

**Example:**
```typescript
const [count, setCount] = useState(0);  // count = 0

// Update count
setCount(5);           // count sekarang = 5
setCount(count + 1);   // count sekarang = 6

// Update dengan function (recommended)
setCount(prev => prev + 1);  // Selalu dapat nilai terbaru
```

**Di Login Page:**
```typescript
const [pin, setPin] = useState("");

// User tekan angka 1
setPin(prev => prev + "1");  // pin = "1"

// User tekan angka 2
setPin(prev => prev + "2");  // pin = "12"

// User tekan delete
setPin(prev => prev.slice(0, -1));  // pin = "1"
```

### 5.2 Props

**Fungsi:** Mengirim data dari parent ke child

**Flow:**
```
Parent (index.tsx)
    ↓ (kirim props)
Child (PinInput.tsx)
```

**Example:**
```typescript
// Parent
<PinInput pin="123" />

// Child
function PinInput({ pin }) {
  return <div>{pin}</div>;  // Tampilkan "123"
}
```

**TypeScript Version:**
```typescript
// Define type
interface PinInputProps {
  pin: string;
}

// Use type
function PinInput({ pin }: PinInputProps) {
  return <div>{pin}</div>;
}
```

### 5.3 Event Handlers

**Fungsi:** Function yang dipanggil ketika user action (click, type, dll)

**Pattern:**
```typescript
// 1. Define handler
const handleClick = () => {
  alert("Clicked!");
};

// 2. Attach to element
<button onClick={handleClick}>Click Me</button>

// 3. Inline arrow function
<button onClick={() => alert("Clicked!")}>Click Me</button>
```

**Di Login Page:**
```typescript
// Handler dengan parameter
const handleKey = (value: string) => {
  if (value === "back") {
    setPin(prev => prev.slice(0, -1));
  } else {
    setPin(prev => prev + value);
  }
};

// Panggil dari child
<Keypad onKeyPress={handleKey} />

// Child panggil dengan parameter
<button onClick={() => onKeyPress("1")}>1</button>
```

### 5.4 Conditional Rendering

**Fungsi:** Tampilkan element sesuai kondisi

**Pattern 1: if/else**
```typescript
if (isLoggedIn) {
  return <Dashboard />;
} else {
  return <Login />;
}
```

**Pattern 2: Ternary**
```typescript
return isLoggedIn ? <Dashboard /> : <Login />;
```

**Pattern 3: && (short circuit)**
```typescript
return (
  <div>
    {isAdmin && <AdminPanel />}
    {/* AdminPanel hanya tampil jika isAdmin = true */}
  </div>
);
```

**Di Login Page:**
```typescript
// Switch statement
const getStepContent = () => {
  switch (step) {
    case "login":
      return <LoginStep />;
    case "select-user":
      return <SelectUserStep />;
    default:
      return <LoginStep />;
  }
};
```

### 5.5 Component Composition

**Fungsi:** Menyusun component dari component-component kecil

**Example:**
```typescript
// Small components
<Header />
<Sidebar />
<Content />
<Footer />

// Composed into bigger component
<Dashboard>
  <Header />
  <div>
    <Sidebar />
    <Content />
  </div>
  <Footer />
</Dashboard>
```

**Di Login Page:**
```typescript
<LoginStep>
  <CurrentUserDisplay />  // Component kecil
  <PinInput />            // Component kecil
  <Keypad />              // Component kecil
  <button>Submit</button>
</LoginStep>
```

---

## 6. Tutorial Modifikasi

### 6.1 Menambah User Baru

**File:** `src/pages/CashierLogin/constants.ts`

**Langkah:**
1. Buka file `constants.ts`
2. Tambahkan object user baru ke array `USERS`

```typescript
export const USERS: User[] = [
  { name: "Broidad", time: "10:00 am - 22:00 pm", avatar: "/assets/images/meow-logo.png" },
  { name: "Leonardo", time: "09:00 am - 22:00 pm", avatar: "/assets/images/meow-logo.png" },
  { name: "Alexa", time: "08:00 am - 22:00 pm", avatar: "/assets/images/meow-logo.png" },
  // 👇 Tambahkan user baru
  { name: "Nama Kamu", time: "08:00 am - 18:00 pm", avatar: "/assets/images/meow-logo.png" },
];
```

3. Save file
4. Refresh browser
5. User baru akan muncul di list!

### 6.2 Mengubah Panjang PIN

**File:** `src/pages/CashierLogin/constants.ts`

**Langkah:**
1. Buka file `constants.ts`
2. Ubah `PIN_LENGTH`

```typescript
// Dari 6 digit
export const PIN_LENGTH = 6;

// Jadi 4 digit
export const PIN_LENGTH = 4;
```

3. Save file
4. Refresh browser
5. PIN sekarang hanya 4 digit!

**Kenapa mudah?** Karena semua component pakai `PIN_LENGTH` dari satu tempat, jadi cukup ubah sekali!

### 6.3 Mengubah Warna Brand

**File:** `src/pages/CashierLogin/constants.ts`

**Langkah:**
1. Buka file `constants.ts`
2. Ubah `brandColor` di object `BRANDING`

```typescript
export const BRANDING = {
  // ...
  brandColor: "#FF5A1F",  // Orange
  // Ubah jadi biru misalnya
  brandColor: "#0066FF",
};
```

3. Save file
4. Refresh browser
5. Warna branding berubah!

### 6.4 Menambah Validasi Email

**File:** `src/pages/CashierLogin/components/ForgotPinStep.tsx`

**Langkah:**
1. Tambah state untuk email
2. Tambah validasi
3. Disable tombol jika email invalid

```typescript
import React, { useState } from "react";

function ForgotPinStep({ onSend, onBackToLogin }) {
  // 1. Tambah state
  const [email, setEmail] = useState("");
  
  // 2. Validasi email
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  return (
    <div>
      {/* 3. Bind input dengan state */}
      <input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      
      {/* 4. Disable jika invalid */}
      <button 
        onClick={onSend}
        disabled={!isValidEmail(email)}
      >
        Send
      </button>
    </div>
  );
}
```

---

## 7. Common Issues & Solutions

### 7.1 "Cannot find module"

**Error:**
```
Error: Cannot find module './components/PinInput'
```

**Penyebab:** Import path salah

**Solution:**
```typescript
// ❌ Wrong
import PinInput from "./PinInput";

// ✅ Correct
import PinInput from "./components/PinInput";
```

### 7.2 "Props is undefined"

**Error:**
```
Cannot read property 'pin' of undefined
```

**Penyebab:** Lupa passing props dari parent

**Solution:**
```typescript
// ❌ Wrong: Lupa kirim props
<PinInput />

// ✅ Correct: Kirim props
<PinInput pin={pin} />
```

### 7.3 "State not updating"

**Problem:** State tidak berubah meskipun sudah panggil setState

**Penyebab:** React state update asynchronous

**Solution:**
```typescript
// ❌ Wrong: Langsung akses state
setCount(count + 1);
console.log(count);  // Masih nilai lama!

// ✅ Correct: Pakai callback
setCount(prev => {
  const newCount = prev + 1;
  console.log(newCount);  // Nilai baru!
  return newCount;
});
```

### 7.4 "Too many re-renders"

**Error:**
```
Error: Too many re-renders. React limits...
```

**Penyebab:** Infinite loop di render

**Solution:**
```typescript
// ❌ Wrong: Function langsung dipanggil
<button onClick={handleClick()}>Click</button>

// ✅ Correct: Pass function reference
<button onClick={handleClick}>Click</button>

// ✅ Correct: Arrow function
<button onClick={() => handleClick()}>Click</button>
```

---

## 8. Best Practices

### 8.1 Naming Conventions

```typescript
// ✅ Good naming
const [isLoading, setIsLoading] = useState(false);  // Boolean: is/has
const [userData, setUserData] = useState(null);     // Data: descriptive
const handleSubmit = () => { };                      // Handler: handle/on prefix

// ❌ Bad naming
const [flag, setFlag] = useState(false);            // Tidak jelas
const [data, setData] = useState(null);             // Terlalu generic
const submit = () => { };                            // Tidak konsisten
```

### 8.2 Component Organization

```typescript
function MyComponent() {
  // 1. State declarations
  const [state1, setState1] = useState();
  
  // 2. Effects (useEffect, dll)
  useEffect(() => { }, []);
  
  // 3. Event handlers
  const handleClick = () => { };
  
  // 4. Render helpers
  const renderSomething = () => { };
  
  // 5. Main render
  return <div>...</div>;
}
```

### 8.3 Props Destructuring

```typescript
// ❌ Less readable
function UserCard(props) {
  return <div>{props.name} - {props.age}</div>;
}

// ✅ More readable
function UserCard({ name, age }) {
  return <div>{name} - {age}</div>;
}

// ✅ With TypeScript
function UserCard({ name, age }: UserCardProps) {
  return <div>{name} - {age}</div>;
}
```

### 8.4 Key Props in Lists

```typescript
// ❌ Bad: Index as key (jika list bisa berubah)
{users.map((user, index) => (
  <div key={index}>{user.name}</div>
))}

// ✅ Good: Unique ID as key
{users.map((user) => (
  <div key={user.id}>{user.name}</div>
))}

// ✅ Acceptable: Jika list statis dan tidak ada unique ID
{users.map((user) => (
  <div key={user.name}>{user.name}</div>
))}
```

### 8.5 Avoid Inline Functions in JSX

```typescript
// ❌ Bad: Create new function every render
<button onClick={() => {
  console.log("Complex logic here");
  doSomething();
  doAnotherThing();
}}>
  Click
</button>

// ✅ Good: Define function outside
const handleClick = () => {
  console.log("Complex logic here");
  doSomething();
  doAnotherThing();
};

<button onClick={handleClick}>Click</button>
```

---
