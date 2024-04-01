import React from 'react'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar bg-primary shadow">
  <div className="container-fluid">
    <div>
    <span className="navbar-brand mb-0 h1 text-light  ">
        <div className='d-flex align-items-center  '>
            <img src={Logo} alt="" />
            Khatabook
        </div>
        </span>
  </div>
  </div>
</nav>
  )
}

export default Navbar ;