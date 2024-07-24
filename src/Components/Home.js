import React from 'react';
import Card from './Card';

const Home = () => {
  const name = ['Matress-A', 'Matress-B'];
  const price = [3500, 2500];
  const headComponent = name.map((item, index) => (
    <Card key={index} title={name[index]} amount={price[index]} />
  ))
  return (
    <div className='home'>
      <div className='welcome'>Get the best products at the best price delivered to you.</div>
      <div className='components'>{headComponent}</div>
    </div>
  )
}

export default Home
