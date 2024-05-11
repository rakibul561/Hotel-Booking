
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo/editable-hotel-logo-vector-business-corporate-identity-hostel_53876-111553.avif'
import { useContext } from 'react'
import { AuthContext } from '../Provaider/AuthProvider'
import Swal from 'sweetalert2'


const Navbar = () => {
 
  const {user,logOut} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOUt = async () => {
    await logOut()
    if (logOut.insertedId) {
        Swal.fire({
            title: 'Success!',
            text: 'User Added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
        })

    }
    navigate("/login")
}

  return (
    <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
      <div className='flex-1'>
        <Link to= '/' className='flex gap-2 items-center'>
          <img className='w-auto h-7' src= {logo} alt='' />
          <span className='font-bold'>Rest inn Hotel</span>
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to='/' >Home</Link>
          </li>
          <li>
            <div>Rooms</div>
          </li>
          <li>
            <div>My Bookings</div>
          </li>
           {!user && 
           <li>
           <Link to= '/login'>Login</Link>
         </li>}
        </ul>

        {
          user &&
          <div className='dropdown dropdown-end z-50'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
          >
            <div className='w-10 rounded-full' title=''>
              <img
                referrerPolicy='no-referrer'
                alt='User Profile Photo'
                src={user?.photoURL}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >

            <li className='mt-2'>
              <button onClick={handleLogOUt} className='bg-gray-200 block text-center'>Logout</button>
            </li>
          </ul>
        </div>
        }
      </div>
    </div>
  )
}

export default Navbar