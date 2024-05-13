/* eslint-disable react/prop-types */
// import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";

const BookingRow = ({ book, handleDelete }) => {

    const { customerName, _id, email, room_image, date, price, service } = book;






    return (
        <tr>
            <th>
                {/* <label>
                <input type="checkbox" className="checkbox" />
            </label> */}
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded  w-24 h-12">
                        <img src={room_image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>

            </td>
            <td>
                {customerName}
            </td>
            <td>{email}</td>
            <td>{service}</td>
            <td>{date}</td>

            <td>${price}</td>
            <th>
                <button onClick={() => handleDelete(_id)
                } className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <th>
                <button className="btn btn-square btn-outline">
                   <FaEdit></FaEdit>
                </button>
            </th>
        </tr>
    );
};

export default BookingRow;