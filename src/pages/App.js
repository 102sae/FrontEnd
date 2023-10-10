import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Signup from './Signup/Signup';

function App() {
  return (
    <div className="App">
      <Login />

      {/* <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
