import React from 'react'
import './Button.css';
import { Outlet, Link } from "react-router-dom";


const Button = () => {
  return (
    <>
     <div className='buttonIcon'>
    <button className='click' type='button'><Link to="/products">AUSTRALIA</Link></button>
    </div>
    <div>
    </div>
    </>
  ) 
}

export default Button


