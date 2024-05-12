import { Link } from "react-router-dom";


const Room = ({ service }) => {
    const { room_image,
        description } = service;

    return (
        <Link
        
        
        >
            <div className="card mt-8 bg-base-100 shadow-2xl">
                <figure><img className="lg:h-[300px]" src={room_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <p className="text-xl font-semibold">{description}?</p>
                </div>
            </div>

        </Link>
    );
};

export default Room;