import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Employees from "./pages/Employees";
import Payslips from "./pages/Payslips";
import Leave from "./pages/Leave";
import Settings from "./pages/Setting";
import LoginLanding from "./pages/LoginLanding";
import PrintPayslip from "./pages/PrintPayslip";
import { Toaster } from "react-hot-toast";
import LoginForm from "./components/LoginForm";

const App= () => {
  return(
    <div>
      <Toaster />
      <Routes>
        <Route path='/login' element={<LoginLanding/>} />

        <Route path='/login/admin' element={<LoginForm role="admin" title="Admin Login" subtitle="Please enter your credentials to access the admin panel"/>} /> 
        <Route path='/login/employee' element={<LoginForm role="employee" title="Employee Login" subtitle="Please enter your credentials to access your employee portal"/>} /> 


        <Route element={<Layout/>} >
         <Route path='/dashboard' element={<h1>Dashboard</h1>} />
         <Route path='/attendance' element={<Attendance/>} />
         <Route path='/employees' element={<Employees/>} />
         <Route path='/payslips' element={<Payslips/>} />
         <Route path='/leave' element={<Leave/>} />
         <Route path='/settings' element={<Settings/>} />
        </Route>
        <Route path="/print/payslip/:id" element={<PrintPayslip/>} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </div>
  )
}

export default App