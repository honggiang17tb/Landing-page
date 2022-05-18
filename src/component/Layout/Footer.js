import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='text-center'>
          <h3 className='space-40'>Start a health life</h3>
          <p className='space-40'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vel dignissimos minima facilis mollitia</p>
          <button type='button' className='btn btn-order'>Place an order</button>
        </div>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='logo'>
            <NavLink exact className='link' to='/'>
              <img width={150} src='https://www.foodro.in/img/logo/logo-foodro.png' alt='' />
            </NavLink>
          </div>
          <nav className='nav fs-12'>
            <NavLink exact className='link' to='/rations'>Ration</NavLink>
            <NavLink exact className='link' to='/'>News</NavLink>
            <NavLink exact className='link' to='/delivery'>Delivery</NavLink>
            <NavLink exact className='link' to='/feedback'>Feedback</NavLink>
            <NavLink exact className='link' to='/contact'>Contact</NavLink>
          </nav>
        </div>
        <hr></hr>
        <div className='info d-flex align-items-center justify-content-between'>
          <p className='fs-12'>© 2018 FoodRO.ro. All Rights Reserved</p>
          <nav className='nav fs-12'>
            <a href='#' className='link'><i className="fa-solid fa-phone"></i> +40 77-392-660</a>
            <a href='#' className='link'><i className="fa-brands fa-facebook"></i></a>
            <a href='#' className='link'><i className="fa-brands fa-twitter"></i></a>
            <a href='#' className='link'><i className="fa-brands fa-instagram"></i></a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
