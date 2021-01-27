import React,{useContext} from 'react';
import { Link} from 'react-router-dom';
import Logo from '../../Images/Group 1329.png';
import './Header.css';
import { UserContext } from '../../App';


const Header = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext)
  return (
    <div className='header'>
      <nav style={{ textAlign: 'center' }}> 
        <img style={{ width: '180px', height: '50px' }} src={Logo} alt=""/>
        <Link to='/home'>Home</Link>
        <Link to='/donation'>Donation</Link>
        <Link to='/Events'>Events</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/register'><button 
                        className='btn btn-primary'>
                         {loggedInUser.email ? loggedInUser.name : 'Register'}   
                        </button></Link>
                    <Link to='/admin'>
                        <button 
                        className='btn btn-dark'>
                        Admin
                    </button></Link>
      </nav>
    </div>

  );
};

export default Header;