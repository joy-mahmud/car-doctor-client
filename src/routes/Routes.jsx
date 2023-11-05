import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../components/Root";
import Home from "../pages/home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";

import MyBookings from "../pages/MyBookings/MyBookings";
import Bookings from "../pages/checkout/Bookings";
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<Register></Register>
        },
        {
            path:'/booking/:id',
            element:<PrivateRoute><Bookings></Bookings></PrivateRoute>,
            loader:({params})=>fetch(`https://car-doctor-server-three-steel.vercel.app/services/${params.id}`)
        },
        {
            path:'mybookings',
            element:<MyBookings></MyBookings>
        }
      ]
    },
  ]);

export default router;