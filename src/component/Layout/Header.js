import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../css/style.css'

export default function Header() {
  return (
    <header>
      <div className='container d-flex align-items-center'>
        <div className='logo'>
          <NavLink exact className='link' to='/'>
            <img width={150} src='https://www.foodro.in/img/logo/logo-foodro.png' alt='' />
          </NavLink>
        </div>
        <nav className='nav d-none d-md-block'>
          <NavLink exact className='link' to='/rations'>Ration</NavLink>
          <NavLink exact className='link' to='/'>News</NavLink>
          <NavLink exact className='link' to='/delivery'>Delivery</NavLink>
          <NavLink exact className='link' to='/feedback'>Feedback</NavLink>
          <NavLink exact className='link' to='/contact'>Contact</NavLink>
        </nav>
        <div className='buyer d-none d-md-flex'>
          <div className='pointer'>
            <i className="fa-solid fa-user me-1"></i>
            <span>Account</span>
          </div>
          <div className='pointer ms-3'>
            <i className="fa-solid fa-cart-shopping me-1"></i>
            <span>Cart</span>
          </div>
        </div>
        <div className='d-block d-md-none pointer ms-auto'>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </header>

  )
}
