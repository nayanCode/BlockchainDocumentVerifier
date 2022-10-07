import './App.css';
import { BrowserRouter as Router ,  Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import AdminLogin from './Components/AdminLogin';
import StudentLogin from './Components/StudentLogin';
import Form from './Components/Students/Form';

function App() {
  return (
    
        <Router>
          <Routes>
            <Route exact path= '/home' element={<Home/>} />
            <Route exact path= '/adminlogin' element={<AdminLogin/>} />
        <Route exact path= '/studentlogin' element={<StudentLogin/>} />
        <Route exact path= '/form' element={<Form/>} />
          </Routes>
      </Router>
  
  );
}

export default App;
