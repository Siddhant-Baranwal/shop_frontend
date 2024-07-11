import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({title, amount}) => {
  return (
    <Link to={`/${title.toLowerCase()}`} className='card'>
        <img src={`/images/${title.toLowerCase()}0.jpg`} alt=''/>
        <div>{title}</div>
        <div className='a'>Buy {amount}/-</div>
    </Link>
  )
}

export default Card
