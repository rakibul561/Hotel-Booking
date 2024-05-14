import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provaider/AuthProvider";


const Update = () => {
    const update = useLoaderData();

    const { _id, price } = update;
    console.log(update);

    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const newRoom = { name, email, date }
        console.log(newRoom);

        fetch(`http://localhost:5000/bookings/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newRoom)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Update Date successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })



    }



    return (
        <div>
            <div >
                <h2 className="text-3xl font-bold text-center">Update Date Service </h2>
                <form onSubmit={handleBooking} className="card-body ">
                    <div className="grid  grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
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
                            <input type="text" defaultValue={'$' + price} className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn bg-[#FF3811] text-white text-xl btn-block" type="submit" value="Update date" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Update;