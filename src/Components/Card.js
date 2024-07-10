import React from 'react'

const Card = ({title, amount}) => {
  return (
    <a href={`/${title.toLowerCase()}`} className='card'>
        <img src={`/images/${title.toLowerCase()}0.jpg`} alt=''/>
        <div>{title}</div>
        <a href={`/${title.toLowerCase()}`}>Buy {amount}/-</a>
    </a>
  )
}

export default Card
