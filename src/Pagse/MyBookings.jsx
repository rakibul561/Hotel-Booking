import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provaider/AuthProvider";


const MyBookings = () => {
    const { user } = useContext(AuthContext);

    const [booking, setBookings] = useState();
    console.log(booking);

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])

    return (
        <div>
            {
                booking?.map((book) => (
                    <h1 key={book?._id}>{book?.email}</h1>
                ))
            }
            <h2>this is a booking pagse </h2>
        </div>
    );
};

export default MyBookings;