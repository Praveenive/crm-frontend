
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Homepage from './Components/Homepage';
import AdminDashboard from './Components/Admin/AdminDashboard.js';
import ManagerDashboard from './Components/Manager/ManagerDashboard';
import EmployeeDashboard from './Base/EmployeeDashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/"
        element={<Homepage/>}/>
        <Route path="/login"
        element={<Login/>}/>
        <Route path="/signup"
        element={<Signup/>}/>
         <Route path="/admindashboard"
        element={<AdminDashboard/>}/>
        <Route path="/managerdashboard"
        element={<ManagerDashboard/>}/>
        <Route path="/employeedashboard"
        element={<EmployeeDashboard/>}/>
      </Routes>
  
    </div>
  );
}

export default App;
