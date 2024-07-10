import React from 'react';
import Card from './Card';

const Home = () => {
  const name = ['Cycle', 'Matress', 'Laptop', 'Bucket'];
  const price = [6500, 2500, 53000, 500];
  const headComponent = name.map((item, index) => (
    <Card key={index} title={name[index]} amount={price[index]} />
  ))
  return (
    <div className='home'>
      <div className='welcome'>Welcome to DormBuddy - The Online Store for freshers 24'</div>
      <div className='components'>{headComponent}</div>
    </div>
  )
}

export default Home
