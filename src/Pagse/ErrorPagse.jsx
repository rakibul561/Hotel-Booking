import { Link } from "react-router-dom";


const ErrorPagse = () => {
    return (
        <div>
            <div className=" lg:w-1/5 mx-auto mt-24">
                <img src="https://i.ibb.co/tL5ymZJ/404-error-with-tired-person-concept-illustration-114360-7889.jpg" alt="" />
            </div>
            <div className="text-3xl mr-16 text-center font-bold mt-4">
                <h2>opps!</h2>
                <h2>404 pagse not found</h2>
            </div>
            <div className="text-center ">
                <Link to= '/' className="btn btn-primary ">Back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPagse;