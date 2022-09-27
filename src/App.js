<<<<<<< Updated upstream
import './App.css';
import { BrowserRouter as Router ,  Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import AdminLogin from './Components/AdminLogin';
import StudentLogin from './Components/StudentLogin';

function App() {
  return (
    
        <Router>
          <Routes>
            <Route exact path= '/home' element={<Home/>} />
            <Route exact path= '/adminlogin' element={<AdminLogin/>} />
        <Route exact path= '/studentlogin' element={<StudentLogin/>} />
          </Routes>
      </Router>
  
=======
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import './App.css';
import Login from "./Login";

function App() {
  return (
    <div className="App">
 <h1> Blockchain BASED Document Verifier</h1>
 <Login/>
    </div>
>>>>>>> Stashed changes
  );
}

export default App;
