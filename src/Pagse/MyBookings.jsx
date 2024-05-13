import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provaider/AuthProvider";
import BookingRow from "./BookingRow";


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
            

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>image</th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                        booking?.map(book=> <BookingRow
                        key={book._id}
                        book={book}
                        ></BookingRow>)
                       }
                       
                       
                        
                    </tbody>
                    {/* foot */}
                   

                </table>
            </div>
        </div>
    );
};

export default MyBookings;