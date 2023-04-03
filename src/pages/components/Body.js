import React from 'react'
import './Body.css';
import Button from './Button';

const Body = () => {
  return (
    <div className='body'>
      <div className='bodyLeft'><Button/></div>
      <div className='bodyRight'><Button/></div>
      <h1></h1>
    </div>
  )
}

export default Body
