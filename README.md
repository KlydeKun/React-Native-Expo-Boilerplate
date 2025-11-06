# 🚀 React Native Expo Boilerplate

A **production-ready React Native Expo boilerplate** with a carefully curated tech stack for building scalable, maintainable mobile applications.  
Skip the setup and start building features immediately.

---

## 🧩 Tech Badges

![React Native](https://img.shields.io/badge/React%20Native-Latest-61DAFB?style=flat&logo=react)
![Expo Version](https://img.shields.io/badge/Expo-51.x-000020?style=flat&logo=expo)
![Expo Version](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript)
![Expo Version](https://img.shields.io/badge/Gluestack_UI-3.x-8A63D2?style=flat)

---

## 🏗️ Tech Stack

### ⚙️ Core
- **React Native** – Cross-platform mobile framework  
- **Expo** – Development platform for universal apps  
- **TypeScript** – Type-safe JavaScript  

### 🧠 State Management
- **Zustand** – Lightweight, scalable state management with minimal boilerplate  

### 📝 Forms & Validation
- **React Hook Form** – Performant, flexible forms with easy validation  
- **Yup** – Schema validation for form inputs  

### 🎨 UI & Styling
- **Gluestack UI** – Universal, accessible component library  
- **TailwindCSS (via NativeWind)** – Utility-first styling  
- **Lucide React Native** – Beautiful, consistent icon library  

### 🌐 API & Data
- **Axios** – Promise-based HTTP client  
- **Apisauce** – Axios wrapper with standardized errors and transforms  
- **Drizzle ORM** – TypeScript-first ORM for local database management  

---

## ✨ Features

✅ **Zero Config Required** – Clone and start coding immediately  
📱 **Cross-Platform** – Single codebase for iOS and Android  
🎨 **Modern UI** – Pre-configured component library with consistent theming  
🔄 **Smart State Management** – Zustand stores with persist middleware ready  
📝 **Form Management** – Complex forms made simple with validation  
🌐 **API Ready** – Configured HTTP client with interceptors and error handling  
💾 **Local Database** – Drizzle ORM with type-safe queries and migrations  
🎯 **TypeScript First** – Full type safety across the entire stack  
📦 **Clean Architecture** – Organized folder structure following best practices  
🔥 **Hot Reload** – Fast refresh for instant feedback  
📱 **Expo Go Compatible** – Test on device without building  

---

## 🛠️ Getting Started

### 📋 Prerequisites
- **Node.js 18+** and npm/yarn  
- **Expo CLI** – `npm install -g expo-cli`  
- **iOS Simulator** (Mac only) or **Android Studio**  
- **Expo Go** app on your physical device (optional)

---

### ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/your-repo-name.git
cd react-native-expo-boilerplate

# Install dependencies
npm install

# Start the development server
npx expo start
```


```bash
# Run on iOS simulator (Mac only)
npx expo start --ios

# Run on Android emulator
npx expo start --android

# Run on web
npx expo start --web

# Or scan the QR code with the Expo Go app on your device
npx expo start
```

### 📂 Project Structure
```bash
├── app/                      # Expo Router screens and navigation
│   ├── (guest)/             # Guest/unauthenticated screens
│   ├── (protected)/         # Protected/authenticated screens
│   ├── (tabs)/              # Tab navigator screens
│   ├── _layout.tsx          # Root layout
│   ├── index.tsx            # Entry point
│   ├── +html.tsx            # Custom HTML template
│   ├── +not-found.tsx       # 404 page
│   └── modal.tsx            # Modal screen
├── assets/                   # Images, fonts, and static files
├── components/              # Reusable UI components
├── constants/               # App constants and configuration
├── hooks/                   # Custom React hooks
├── node_modules/            # Dependencies (ignored by git)
├── src/                     # Source code
│   ├── core/               # Core functionality
│   │   ├── api/           # API service layer (Apisauce + Axios)
│   │   ├── database/      # Drizzle ORM setup and schemas
│   │   └── types/         # TypeScript type definitions
│   ├── feature/            # Feature modules
│   │   ├── auth/          # Authentication feature
│   │   ├── navigation/    # Navigation configuration
│   │   └── ui/            # UI components and utilities
│   └── utils/              # Utility functions and helpers
├── .gitignore               # Git ignore rules
├── app.json                 # Expo app configuration
├── babel.config.js          # Babel configuration
├── expo-env.d.ts            # Expo TypeScript definitions
├── global.css               # Global styles
├── metro.config.js          # Metro bundler configuration
├── nativewind-env.d.ts      # NativeWind TypeScript definitions
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # TailwindCSS configuration
└── tsconfig.json            # TypeScript configuration
```
