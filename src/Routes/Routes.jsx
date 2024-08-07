
import { createBrowserRouter } from "react-router-dom";
import Main from "../Laout/Main";
import Login from "../Pagse/Login";
import Register from "../Pagse/Register";
import Details from "../Laout/Details";
import PrivetRoute from "./PrivetRoute";
import Home from "../Laout/Home";
import Checkout from "../Pagse/Checkout/Checkout";
import MyBookings from "../Pagse/MyBookings";
import AllCard from "../Pagse/AllCard";
import ErrorPagse from "../Pagse/ErrorPagse";
import Update from "../Pagse/Update";

const router = createBrowserRouter([

  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPagse></ErrorPagse>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/details/:id',
        element: <PrivetRoute
        >
          <Details></Details>
        </PrivetRoute>
      },
      {
        path: '/checkout/:id',
        element: <Checkout></Checkout>,
        loader: ({ params }) => fetch(`https://hote-booking-server.vercel.app/serviecs/${params.id}`)
      },
      {
        path: '/bookings',
        element: <PrivetRoute><MyBookings></MyBookings></PrivetRoute>
      },
      {
        path: '/rooms',
        element: <PrivetRoute>
          <AllCard></AllCard>
        </PrivetRoute>
      },
      {
        path: '/updateBooking/:id',
        element: <Update></Update>,
        loader: ({ params }) => fetch(`https://hote-booking-server.vercel.app/bookings/${params.id}`)
      }
    ]
  }

]);

export default router;