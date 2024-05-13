

const BookingRow = ({ book }) => {

    const { customerName, email, room_image, date, price, service } = book;
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
            <td>{service}</td>
            <td>{email}</td>
            <td>${price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default BookingRow;