import './App.css';
import { BrowserRouter as Router ,  Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import AdminLogin from './Components/AdminLogin';
import StudentLogin from './Components/StudentLogin';
import React from 'react';

function App() {
  return (
    
        <Router>
          <Routes>
            <Route exact path= '/home' element={<Home/>} />
            <Route exact path= '/adminlogin' element={<AdminLogin/>} />
        <Route exact path= '/studentlogin' element={<StudentLogin/>} />
          </Routes>
      </Router>
  
  );
}

export default App;
