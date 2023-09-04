import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import IsAuthenticated from "./components/scensComponents/account/IsAuthenticated";
import {  Admin, Cashier, Doctor, Login, Nurse } from "./scenes";
import ChangePassword from "./scenes/account/ChangePassword";
import ForgotPassword from "./scenes/account/ForgotPassword";
import Checkup from "./scenes/Checkup";
import Patient from "./scenes/Patient";
import PatientAppointments from "./scenes/PatientAppointments";
import PatientVitals from "./scenes/PatientVitals";
import Profile from "./scenes/Profile";
const RoutePage=()=>{
    return(
<>
 <BrowserRouter>
    <Routes>
        <Route element={<Login/>} path="/" />
        <Route path ="/login" element={ <Login/>}/>
<Route path="/admin" element={<Admin />}/>
<Route path="/nurse" element={<Nurse />}/>
<Route path="/cashier" element={<Cashier />}/>
<Route path="/doctor" element={<Doctor />}/>
<Route path="/checkup" element={<Checkup />}/>
<Route path="/patient" element={<Patient />}/>
<Route path="/patientVitals" element={<PatientVitals />}/>
<Route path="/patientAppointments" element={<PatientAppointments />}/>
<Route path="/forgotPassword" element={<ForgotPassword />}/>
<Route path="/changePassword" element={<ChangePassword />}/>
<Route path="/profile" element={<IsAuthenticated><Profile /></IsAuthenticated>}/>
    </Routes>
    </BrowserRouter>
</>
    )
   
}
export default RoutePage;