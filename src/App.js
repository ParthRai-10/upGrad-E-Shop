import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import SignIn from './SignIn';
import SignUp from './SignUp';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/login"
          element={<SignIn onLogin={handleLogin} />}
        />
        <Route
          path="/signup"
          element={<SignUp />}
        />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
