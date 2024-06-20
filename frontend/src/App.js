import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/auth/login/login.js";
import SignupPage from "./pages/auth/signup/signup.js";
import HomePage from './pages/home.js';
import MessagesPage from './pages/messages.js';

import './App.css';
import Sidebar from './components/common/Sidebar.js';
import RightPanel from './components/common/RightPanel.js';


function App() {
  return (
    
      <div className="flex max-w-6xl mx-auto">
      <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path='/messages' element={<MessagesPage />} />
        </Routes>
        <RightPanel />
      </div>
    
  );
}

export default App;