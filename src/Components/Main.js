import React from 'react'

const Main = () => {
  return (
    <div>
      <div className='welcome'>Welcome to DormBuddy - The Online Store for freshers 24'</div>
      <div className="brandLogo" >
        <img src="/images/brandLogo.png" alt=""/>
        <p>DormBuddy is an online store created by students of IIT BHU, for the students of IIT BHU. If you are a fresher in IIT BHU and worrying where to get the basic things for your new college life, DormBuddy is the perfect place for you.</p>
      </div>
      <a href="/home" className="brandLink">Shop now!</a>
      <a href="/home" className="brandLink">Know more about us</a>
      <a href="/home" className="brandLink">Contact Us</a>
      <div className="end"></div>
    </div>
  )
}

export default Main
