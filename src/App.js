
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Homepage from './Components/Homepage';
import AdminDashboard from './Components/Admin/AdminDashboard.js';
import ManagerDashboard from './Components/Manager/ManagerDashboard';
import Employeedashboard from './Components/Employee/Employeedashboard';
import Myleads from './Components/Employee/Myleads';
import Referencelead from './Components/Employee/Referencelead';
import React, { useState } from 'react';
import Updatelead from './Components/Employee/Updatelead';
import Takeaction from './Components/Admin/Takeaction';
import Allleads from './Components/Admin/Allleads';
import EmployeeList from './Components/Admin/EmployeeList';
import Managerlist from './Components/Admin/Managerlist';


function App() {
  const [employeeleads,setEmployeeleads] = useState([])
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
         <Route path="/takeaction"
        element={<Takeaction/>}/>
         <Route path="/adminleads"
        element={<Allleads/>}/>
         <Route path="/managerlist"
        element={<Managerlist/>}/>
        <Route path="/employeelist"
        element={<EmployeeList/>}/>
        <Route path="/managerdashboard"
        element={<ManagerDashboard/>}/>
        <Route path="/employeedashboard"
        element={<Employeedashboard/>}/>
      <Route path="/employeeleads"
        element={<Myleads
        employeeleads={employeeleads}
        setEmployeeleads={setEmployeeleads}/>}/>
         <Route path="/add/:token"
        element={<Referencelead  
          employeeleads={employeeleads}
          setEmployeeleads={setEmployeeleads}
        />}/>
          <Route path="/edit/:id/:token"
        element={<Updatelead 
          employeeleads={employeeleads}
          setEmployeeleads={setEmployeeleads}
        />}/>
        
      
      </Routes>
    </div>
  );
}

export default App;
