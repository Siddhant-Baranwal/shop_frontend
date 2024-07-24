import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Item = () => {
  const navigate = useNavigate();
  let [load, setLoad] = useState(false);
  let [it, setIt] = useState(0);
  const id = ['Matress-A', 'Matress-B'];
  const Backend = "https://shop-backend-j284.onrender.com"
  // const Backend = "http://localhost:4000"
  const {idInt} = useParams();
  const pos = id.findIndex(ele => ele.toLowerCase()===idInt);
  const price = [3500, 2500];
  let [naam, setNaam] = useState();
  let [phone, setPhone] = useState();
  let [date, setDate] = useState();
  let [transaction_id, setTransaction_id] = useState();
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % 3;
      setIt(prevIt => prevIt + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const company = ['Bombay Dieing', 'Donlup'];
  const size = [['6inch', '3ft', '5inch'], ['6inch', '3ft', '4inch']]
  const other = [['Foam made'], ['Foam made']];
  const details = other[pos].map((item, index) => {
    return (
      <div className='special'>&#8226; {other[pos][index]}</div>
    )
  })
  if(pos===-1){
    return (
      <div>No item found for this page.</div>
    )
  }
  let dim=size[pos][0];
  for (let i = 1; i < size[pos].length; i++) {
    dim += ' x ';
    dim += size[pos][i];
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoad(true);
    const data = {name: naam, phone, title:id[pos], arrival:date, transaction_id};
    console.log(data);
    await axios.post(`${Backend}/order`, data)
    .then(response => {
      if(response.data.success === true){
        navigate('/success');
      }
      else{
        navigate('/failure');
      }
    })
    .catch(error => {
      navigate('/failure');
    })
    e.preventDefault();
    setLoad(false);
  }
  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setNaam(value);
    if (name === 'number') setPhone(value);
    if (name === 'date') setDate(value);
    if (name === 'transaction_id') setTransaction_id(value);
  };
  
  return (
    <div className='order'>
      <div className="left orderChild">
        <div className='image'>
          <img src={`/images/${idInt}${it%3}.jpg`} alt={`/images/${idInt}${it%3}.jpg`} />
        </div>
        <div className="details">
        <div className='sum'><div className='one'>Item: </div><div className='two'>{id[pos]}</div></div>
        <div className='sum'><div className='one'>Dimension: </div><div className='two'>{dim}</div></div>
        <div className='sum'><div className='one'>Price: </div><div className='two'>Rs. {price[pos]}/-</div></div>
        <div className='sum'><div className='one'>Company: </div><div className='two'>{company[pos]}</div></div>
        <div className="sum">
        {other[pos].length > 0 && <div className='one'>
          Other details:
        </div>}
        <div>{details}</div>
        </div>
        </div>
      </div>
      
      <div className="right orderChild">
        <form onSubmit={submitHandler}>
          <div>
          <p>Name: </p>
          <input type="text" name="name" id="name" onChange={changeHandler} value={naam}/>
          </div>
          <div>
          <p>Phone number: </p>
          <input type="number" name="number" id="number" onChange={changeHandler} value={phone}/>
          </div>
          <div>
          <p>Date of arrival: </p>
          <input type="date" name="date" id="date" onChange={changeHandler} value={date}/>
          </div>
          <div className='file'>
            <p>Payment QR Code: </p>
            <div>
              <Link to="/pay"><img src="/images/qr.jpg" alt="7307833947" /></Link>
              <p>(<span className="upiid">UPI id: bhoolgyabhai@oksbi</span> | After making payment through UPI, your transaction id will be first verified and then only your order will be placed.)</p>            
            </div>
          </div>
          <div className='file'>
            <p>UPI Transaction ID: </p>
            <input type="number" name="transaction_id" id="transaction_id" onChange={changeHandler} value={transaction_id}/>
          </div>
          <button type="submit" disabled={load || phone>=10000000000 || phone<1000000000 || phone==null || naam==null || transaction_id==null}>Book</button>
          {load && <img src="/gifs/loading.gif" alt="Loading..." className='loader'/>}
          <div className='itemContact'>Have doubts or safety issues? &nbsp;<Link to='/contact'>Contact Us</Link></div>
        </form>
      </div>
    </div>
  )
}

export default Item
