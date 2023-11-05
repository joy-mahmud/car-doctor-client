import logo from '../../public/logo.svg'
import { AiOutlineSearch } from 'react-icons/ai';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import {  NavLink } from 'react-router-dom';
import "./header.css"
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    const handleLogout =()=>{
        logOut()
        .then(()=>console.log('Logged out successfully'))
        .catch((error)=>console.log('an error occurred'))
    }
    return (
        <div className='flex justify-between items-center my-2 container mx-auto'>
            <img src={logo} alt="" />
            <div>
                <ul className='flex gap-5 text-xl font-medium'>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to={'/contact'}>Contact</NavLink></li>
                    <li><NavLink to='/mybookings'>My Booking</NavLink></li>
                    <li>{user?<button onClick={handleLogout}>LogOut</button>:<NavLink to='/login'>Login</NavLink>}</li>
                  
                </ul>
            </div>
            <div className='flex items-center gap-5'>
            <LiaShoppingBagSolid className='text-2xl'></LiaShoppingBagSolid>
            <AiOutlineSearch className='text-2xl'></AiOutlineSearch>
            
            <button className="btn btn-outline text-[#FF3811] hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811]">Appointment</button>
            </div>
        </div>
    );
};

export default Header;