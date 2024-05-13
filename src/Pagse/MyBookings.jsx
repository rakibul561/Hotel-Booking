import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provaider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";


const MyBookings = () => {
    const { user } = useContext(AuthContext);

    const [booking, setBookings] = useState();
    console.log(booking);

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url]);

    const handleDelete = id => {
        // console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            

            fetch(`http://localhost:5000/bookings/${id}`,{
                method:'DELETE'
            })
            .then(res=> res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                     Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success" 
                          });

                          const remaining = booking.filter(booking => booking._id !== id);
                          setBookings(remaining)

                }
            })

            
            }
          });

    }







    return (
        <div>
            

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-yellow-600">
                        <tr>
                            <th>
                            </th>
                            <th>image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Rooms</th>
                            <th>date</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className="text-purple-600">
                        {/* row 1 */}
                       {
                        booking?.map(book=> <BookingRow
                        key={book._id}
                        book={book}
                        handleDelete={handleDelete}
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