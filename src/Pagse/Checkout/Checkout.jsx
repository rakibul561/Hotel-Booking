import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provaider/AuthProvider";
import Swal from "sweetalert2";





const Checkout = () => {
    const services = useLoaderData();
    const { description, _id, price_per_night, room_image } = services;

    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            room_image,
            date,
            service: description,
            service_id: _id,
            price: price_per_night
        }
        console.log(booking);

        fetch('https://hote-booking-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Booking successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })



    }

    return (
        <div>
            <div className="bg-base-300 rounded-lg mt-8">
                <h2 className="text-3xl font-bold text-center">Book Service {description}</h2>
                <form onSubmit={handleBooking} className="card-body">
                    <div className="grid  grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" defaultValue={user?.email} name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due amount</span>
                            </label>
                            <input type="text" defaultValue={'$' + price_per_night} className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-[#FF3811] btn-block" type="submit" value=" confrom Bookings" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Checkout;