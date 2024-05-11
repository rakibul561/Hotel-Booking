
import { createBrowserRouter } from "react-router-dom";
import Main from "../Laout/Main";
import Login from "../Pagse/Login";
import Register from "../Pagse/Register";

const router = createBrowserRouter([

    {
      path:"/",
      element:<Main></Main>,
      children:[
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    }

]);

export default router;