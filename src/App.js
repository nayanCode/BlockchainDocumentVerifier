import './App.css';
import { BrowserRouter as Router ,  Routes,Route } from 'react-router-dom';
import AdminHome from './Components/Home/AdminHome';
import StudentHome from './Components/Home/StudentHome';
import AdminLogin from './Components/AdminLogin';
import StudentLogin from './Components/StudentLogin';
import Form from './Components/Students/Form';

function App() {
  return (
    
        <Router>
          <Routes>
            <Route exact path= '/adminhome' element={<AdminHome/>} />
            <Route exact path= '/studenthome' element={<StudentHome/>} />
            <Route exact path= '/adminlogin' element={<AdminLogin/>} />
        <Route exact path= '/studentlogin' element={<StudentLogin/>} />
        <Route exact path= '/form' element={<Form/>} />
          </Routes>
      </Router>
  
  );
}

export default App;
