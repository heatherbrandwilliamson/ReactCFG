import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Layout.css';


const Layout = () => {
  return (
    <>
      <nav>
        <ul className='ul'>
        <li className='navLeft'>
            MY TRAVEL DIARY
          </li>
          <li className='navCentre'>
            <Link to="/">HOME</Link>
          </li>
          <li className='navCentre'>
            <Link to="/products">AUSTRALIA</Link>
          </li>
          <li className='navCentre'>
            <Link to="/services">SPAIN</Link>
          </li>
          <li className='navCentre'>
            <Link to="/services">VIETNAM</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;