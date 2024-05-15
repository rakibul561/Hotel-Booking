import { useEffect, useState } from "react";
import Room from "./Room";



const Rooms = () => {

    const [services, setServices] = useState([]);
    const item = services.slice(0, 6);

    useEffect(() => {
        fetch('https://hote-booking-server.vercel.app/serviecs')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])



    return (
        <div>
            <div className="text-center text-purple-800">
                <h2 className="text-3xl text-center font-bold ">Room service </h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero consequatur laborum voluptas, <br />eaque suscipit in eveniet. Deserunt minima provident, doloremque totam assumenda vero quod beatae <br /> eveniet id? Soluta, cum sapiente.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    item.map(service => <Room
                        service={service}
                        key={service._id}
                    >
                    </Room>)
                }
            </div>
        </div>
    );
};

export default Rooms;