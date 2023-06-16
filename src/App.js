
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
import Employeelist from './Components/Manager/Employeelist';
import AllLeads from './Components/Manager/AllLeads';
import AddEmployee from './Components/Admin/AddEmployee';
import Addemployee from './Components/Manager/Addemployee';
import ManagerAction from './Components/Manager/ManagerAction';


function App() {
  const [employeeleads,setEmployeeleads] = useState([])
  const [managerCount,setManagerCount] = useState(5)
  const [employeeCount,setEmloyeeCount] = useState(25)
  const [ genleads,setGenleads] = useState(100)
  const [reqemp ,setReqemp]=useState(5)
    const [ reqleads,setReqleads] = useState(50)
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
        element={<AdminDashboard
        managerCount={managerCount} employeeCount={employeeCount} genleads={genleads}
        setEmloyeeCount={setEmloyeeCount} setManagerCount={setManagerCount}setGenleads={setGenleads}
        />}/>
         <Route path="/takeaction"
        element={<Takeaction
          managerCount={managerCount} employeeCount={employeeCount} genleads={genleads}
          setEmloyeeCount={setEmloyeeCount} setManagerCount={setManagerCount}setGenleads={setGenleads}/>}/>
         <Route path="/adminleads"
        element={<Allleads/>}/>
        <Route path="/addemployee"
        element={<AddEmployee/>}/>
         <Route path="/managerlist"
        element={<Managerlist/>}/>
        <Route path="/employeelist"
        element={<EmployeeList/>}/>
        <Route path="/managerdashboard"
        element={<ManagerDashboard
          managerCount={managerCount} employeeCount={employeeCount} genleads={genleads}
          setEmloyeeCount={setEmloyeeCount} setManagerCount={setManagerCount}setGenleads={setGenleads}
          reqemp={reqemp} reqleads={reqleads} setReqemp={setReqemp} setReqleads={setReqleads}/>}/>
        <Route path="/man-employeelist"
        element={<Employeelist/>}/>
         <Route path="/man-takeaction"
        element={<ManagerAction
          reqemp={reqemp} reqleads={reqleads} setReqemp={setReqemp} setReqleads={setReqleads}/>}/>
         <Route path="/man-leads"
        element={<AllLeads/>}/>
        <Route path="/man-addemployee"
        element={<Addemployee/>}/>
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
