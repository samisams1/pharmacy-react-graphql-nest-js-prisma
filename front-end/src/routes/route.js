import * as React from 'react';
import { Navigate, useRoutes  } from 'react-router-dom';
import Navbar from '../components/component/home/Navbar';
import ChangePassword from '../pages/account/change-password';
import ForgotPassword from '../pages/account/forgot-password';
import Login from '../pages/account/login';
import Account from '../pages/account/Profile';
import Profile from '../pages/account/register';
import Register from '../pages/account/register';
import Cart from '../pages/cart';
import Category from '../pages/category';
import Dashboard from '../pages/dashboard';
import AdminDashboard from '../pages/dashboard/admin';
import DrugStore from '../pages/drugStore';
import Home from '../pages/home';
import Order from '../pages/order';
import Page404 from '../pages/page404';
import Product from '../pages/product';
import Samisams from '../pages/sams';
export default function Router() {
    return useRoutes(
   
      [
        {
            path: '/',
            children: [
              {path: '/adminDashboard',element:<AdminDashboard/>},
              { path: '/', element: <Home /> },
              { path: '/sams', element: <Samisams /> },
              { path: '/profile', element: <Account /> },
              {path: '/products',element:<Product/>},
              {path: '/cart',element:<Cart/>},
              {path: '/orders',element:<Order/>},
              {path: '/categories',element:<Category/>},
              {path: '/stores',element:<DrugStore/>},
              {path: '/login',element:<Login/>},
              {path: '/register',element:<Register/>},
              {path: '/changePassword',element:<ChangePassword/>},
              {path: '/forgotPassword',element:<ForgotPassword/>},
              {path: '/profile',element:<Profile/>},
              {path: '/pageNotFound',element:<Page404/>},
            ],
          },
        

    ]);
}

