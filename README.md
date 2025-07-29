# Love Therapy Chatbot

A beautiful, modern web app for love and relationship advice powered by AI (Google Gemini API). No database required—everything is in-memory or in your browser.

---

## ✨ Features

- **AI Love Chatbot**: Ask questions about love, relationships, dating, and romance. Get friendly, supportive, AI-powered answers.
- **Modern UI**: Clean, dark/light theme with sidebar navigation, chat bubbles, and responsive design.
- **User Registration & Login**: Secure your session with a username and password (stored in your browser, no backend database needed).
- **Edit Profile**: Change your username and password anytime from the sidebar settings.
- **Dark/Light Theme Toggle**: Switch between beautiful dark and light modes. Your preference is remembered.
- **View Chat History**: See your current session's conversation history in a modal.
- **Session-based**: All chat history is stored in memory and cleared when the server restarts or you log out.
- **No Database Needed**: All user data is stored in localStorage (browser) and chat history is in server memory.

---

## 🚀 Setup & Run

### 1. **Clone the repository**
```
git clone <your-repo-url>
cd <your-project-folder>
```

### 2. **Install dependencies**
```
npm install
```

### 3. **Set up your Gemini API key**
- Create a `.env` file in the project root:
  ```
  GEMINI_API_KEY=your-google-gemini-api-key-here
  ```
- [Get your Gemini API key here](https://ai.google.dev/)

### 4. **Start the server**
```
npm start
```

### 5. **Open the app**
- Go to [http://localhost:3000/](http://localhost:3000/) in your browser.

---

## 🖥️ Usage

1. **Register** a new account (username & password).
2. **Login** to access the chatbot.
3. **Chat** with the AI about love, relationships, dating, or romance.
4. **View History**: Click "View History" to see your current session's chat.
5. **Edit Profile**: Click the ⚙️ (settings) icon in the sidebar to change your username/password or switch theme.
6. **Toggle Theme**: Use the theme toggle in settings (or on login/register pages) to switch between dark and light mode.
7. **Logout**: Click "Logout" to end your session.

---

## 🛡️ Security & Privacy
- **No database**: All user credentials are stored in your browser (localStorage). Chat history is in server memory only for your session.
- **Not for production**: This is a demo app. For real apps, use secure authentication and a real database.

---

## 🛠️ Tech Stack
- **Frontend**: HTML, CSS, JavaScript (no framework)
- **Backend**: Node.js, Express
- **AI**: Google Gemini API

---

## 📄 License
MIT 