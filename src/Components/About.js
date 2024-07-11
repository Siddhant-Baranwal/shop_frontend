import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about'>
      <h1>Welcome to DormBuddy</h1>
      <h2>&#8226; What is DormBuddy?</h2>
      <p>DormBuddy is a dedicated platform aimed at making the lives of freshers easier by providing them with all the essential items they need to start their college journey.</p>
      <h2>&#8226; Our mission</h2>
      <p>Our mission is to provide IIT BHU freshers with a one-step solution for all their basic needs, making their transition to college life smooth and hassle-free.</p>
      <h2>&#8226; Why trust us!</h2>
      <p>We, the developers of DormBuddy, are from the same college as yours. So, in case of any problem you face while buying, you can <Link to="/contact" className='spe'>contact</Link> us online as well as offline.</p>
      <h2>&#8226; What we offer</h2>
      <p>From essential dormitory supplies like mattress and buckets to tech gadgets and bicycles, we cover all the necessities to help you settle in comfortably.</p>
      <h2>&#8226; How it works</h2>
      <p>Simply select the item you need and fill out the form for the item. We ensure prompt delivery and quality products.</p>
      <h2>&#8226; Future plans</h2>
      <p>We are continuously working to add more items to our list, so stay tuned for the updates.</p>
    </div>
  )
}

export default About
