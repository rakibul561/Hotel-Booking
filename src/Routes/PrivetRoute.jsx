import { useContext } from "react";
import { AuthContext } from "../Provaider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    console.log({ loading });
    const location = useLocation();
    console.log(location.pathname);

    if (loading) {
        return <progress className="progress w-56"></progress>
    }


    if (user?.email) {
        return children;
    }


    return <Navigate state={location.pathname} to='/login' replace></Navigate>;
};

export default PrivetRoute;