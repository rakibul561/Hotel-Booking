/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Aos from "aos";



const Room = ({ service }) => {
        
    useEffect(()=>{
        Aos.init();
    },[])


    const { room_image,
        description, _id } = service;



    return (
        <div className="card mt-8 bg-base-100 shadow-2xl" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <Link
                to={`/details/${_id}`}
            >
                <figure><img className="lg:h-[300px]" src={room_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className="text-xl font-semibold">{description}?</p>
                </div>
            </Link>
            <div className="p-2">
                {/* <button className="btn btn-outline btn-error">Review now</button> */}
            </div>

        </div>

    );
};

export default Room;