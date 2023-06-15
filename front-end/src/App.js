import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
//import Navbar from './components/component/home/Navbar';
import Router from "./routes/route";
export default function App() {
return(
   <BrowserRouter>
   Navbar
    <Router/>
   </BrowserRouter>
  
);
}