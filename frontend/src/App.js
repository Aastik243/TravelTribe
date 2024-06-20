import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';import HomePage from "./pages/home.js";
import LoginPage from "./pages/auth/login/login.js";
import SignupPage from "./pages/auth/signup/signup.js";
import HomePage from './pages/home.js';
import MessagesPage from './pages/messages.js';

import './App.css';


function App() {
  return (
    <Router>
      <div className="flex max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path='/messages' element={<MessagesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;