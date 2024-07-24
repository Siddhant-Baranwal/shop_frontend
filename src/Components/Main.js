import React from 'react'

const Main = () => {
  return (
    <div>
      <div className='welcome'>Welcome to DormBuddy - The Online Store for IIT BHU students</div>
      <div className="brandLogo" >
        <img src="/images/brandLogo.png" alt=""/>
        <p>DormBuddy is an online store developed by IIT BHU students, exclusively for the IIT BHU community. If you are a fresher at IIT BHU and are concerned about where to find essential items for your new college life, DormBuddy is your ideal solution.</p>
      </div>
      <a href="/home" className="brandLink">Shop now!</a>
      <a href="/about" className="brandLink">Know more about us</a>
      <a href="/contact" className="brandLink">Contact Us</a>
      <div className="end"></div>
    </div>
  )
}

export default Main
