import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import IsAuthenticated from "./components/scensComponents/account/IsAuthenticated";
import {  Admin, Cashier, Doctor, Login, Nurse } from "./pages";
import ChangePassword from "./pages/account/ChangePassword";
import ForgotPassword from "./pages/account/ForgotPassword";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Sale from "./pages/Sale";
import Suppliers from "./pages/Supplier";
import Profile from "./pages/Profile";
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
<Route path="/categories" element={<Category />}/>
<Route path="/products" element={<Product />}/>
<Route path="/suppliers" element={<Suppliers />}/>
<Route path="/sales" element={<Sale />}/>
<Route path="/forgotPassword" element={<ForgotPassword />}/>
<Route path="/changePassword" element={<ChangePassword />}/>
<Route path="/profile" element={<IsAuthenticated><Profile /></IsAuthenticated>}/>
    </Routes>
    </BrowserRouter>
</>
    )
   
}
export default RoutePage;