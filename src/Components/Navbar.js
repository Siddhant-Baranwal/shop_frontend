import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <a href="/" className='logosup'><img className='logo' src="/images/logo.png" alt="" />Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </div>
  )
}

export default Navbar
