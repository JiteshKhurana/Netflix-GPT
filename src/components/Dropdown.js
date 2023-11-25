import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Dropdown = () => {
    const navigate = useNavigate();
    const user = useSelector(store=>store.user);
    const handleSignOut=()=>{
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate("/error");
        });
    }
    return (
        <div className=" bg-white rounded-lg w-44 py-2 opacity-85">
            <h1 className='text-black px-4 py-3 text-sm'>{user.displayName}</h1>
            <ul className="py-2 text-sm">
                <li>
                    <h1 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</h1>
                </li>
            </ul>
            <button onClick={handleSignOut} className='block px-4 py-2 text-sm text-black rounded-md'>Sign Out</button>
        </div>
    );
}

export default Dropdown
