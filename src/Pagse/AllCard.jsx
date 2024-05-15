import { useEffect, useState } from "react";
import Room from "../Laout/Room";

const AllCard = () => {

    const [items, setItem] = useState([]);
    console.log(items);

    useEffect(() => {
        fetch('https://hote-booking-server.vercel.app/serviecs')
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])

    return (
        <div >
            <h2 className="text-center text-4xl font-bold">Our Hotel All Room</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    items.map(service => <Room
                        service={service}
                        key={service._id}
                    >
                    </Room>)
                }
            </div>
        </div>
    );
};

export default AllCard;