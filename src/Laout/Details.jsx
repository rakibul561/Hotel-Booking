import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const Details = () => {

    const { id } = useParams();
    console.log(id);
    const [product, setProducet] = useState({});
    // console.log(product);

    useEffect(() => {
        fetch(`http://localhost:5000/newRoom/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducet(data)
            })
    }, [id])

    const { description, price_per_night, room_size, availability, room_image, _id, special_offers } = product;

    return (
        <div>
            <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
                <div className="container grid gap-6 mx-auto lg:grid-cols-2 xl:grid-cols-5">
                    <div className="w-full rounded-md xl:col-span-2 dark:bg-gray-50">
                        <div className=" py-24 ml-4 space-y-4">
                            <h2 className="text-xl"> Description : {description}</h2>
                            <div className="flex gap-24">
                                <p> <span className="text-2xl text-yellow-500 ">Price</span>: ${price_per_night}</p>
                                <p><span className="text-2xl text-green-400">Room size</span>: {room_size}</p>
                            </div>
                            <p className="text-2xl">Special Ofer: {special_offers}</p>
                            <Link
                            
                            to={`/checkout/${_id}`}
                            className="">
                            <button className="btn btn-outline text-xl w-[200px] mt-2 btn-success">Book Now</button>
                        </Link>
                        </div>
                       

                    </div>
                    <img src={room_image} alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
                </div>
            </section>
        </div>
    );
};

export default Details;