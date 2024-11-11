import React from 'react';
import './Navbar.css';
// import logo from '../../assets/images/logo.svg';
import Olxlogo from '../../assets/images/Olxlogo.jpeg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';


function Navbar() {
  return (
    <div className='navbar'>
      <div className='header'>
        <div className='navbar_logo'>
          <img src={Olxlogo} alt="Logo" className="logo" />
        </div>
        <div className='navbar_select_city'>
          <input type="text" placeholder='Search city, area or locality' className='search_city'/>
          <button className='header-down-arrow-btn'><KeyboardArrowDownIcon/></button>
        </div>
        <div>
          <input type="text" placeholder='Find Cars, Mobile Phones and more...' className='search_items'/>
          <button className='header-search-btn'><SearchIcon/></button>
        </div>
        
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar