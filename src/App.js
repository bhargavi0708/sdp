import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar/Navbar';
import Chatbot from './components/Chatbot/Chatbot';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import CoachRegister from './pages/Auth/CoachRegister';
import Departments from './pages/Departments/Departments';
import LiveMatches from './pages/LiveMatches/LiveMatches';
import Tournaments from './pages/Tournaments/Tournaments';
import Athletes from './pages/Athletes/Athletes';
import Profile from './pages/Account/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import MyRegistrations from './pages/Account/MyRegistrations';
import Settings from './pages/Account/Settings';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            {/* Redirect root path to login */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            
            {/* Public auth routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register/coach" element={<CoachRegister />} />
            
            {/* Protected routes */}
            <Route 
              path="/home" 
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/departments" 
              element={
                <ProtectedRoute>
                  <Departments />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/live-matches" 
              element={
                <ProtectedRoute>
                  <LiveMatches />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/tournaments" 
              element={
                <ProtectedRoute>
                  <Tournaments />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/athletes" 
              element={
                <ProtectedRoute>
                  <Athletes />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/account/registrations" 
              element={
                <ProtectedRoute>
                  <MyRegistrations />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/account/settings" 
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              } 
            />
          </Routes>
          <Chatbot />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 