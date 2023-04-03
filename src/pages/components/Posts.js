import React from 'react'
import './Posts.css';

export default function Posts () {
  return (
    <>
    <div className='posts'>
    <div className='postsLeft'> <img src="https://images.unsplash.com/photo-1516941064643-74aacd84843c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" className='postsImg'/>
    </div>
    <div className='postsRight'>
    <img src="https://images.unsplash.com/photo-1598960635501-373fc199bf18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" className='postsImg'/> </div>
      </div>
    </>
  )
}
