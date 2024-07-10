import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Item = () => {
  const navigate = useNavigate();
  let [load, setLoad] = useState(false);
  let [it, setIt] = useState(0);
  const Backend = "https://shop-backend-j284.onrender.com"
  const {idInt} = useParams();
  const id = ["Cycle", "Matress", "Laptop", "Bucket"];
  const pos = id.findIndex(ele => ele.toLowerCase()===idInt);
  const price = [6500, 2500, 53000, 500];
  let [naam, setNaam] = useState();
  let [phone, setPhone] = useState();
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % 3;
      setIt(prevIt => prevIt + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const company = ['Ranger', 'Signature', 'HP', 'Shyam'];
  const size = [['5ft'], ['5inch', '7ft', '5ft'], ['15inch', '10inch', '1inch'], ['2ft Diameter']]
  const other = [['With Gear', 'Wide Tires'], [], ['8GB RAM', 'Graphics Card', '512GB SSD Card'], []];
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
    const data = {name:naam, phone, item:id[pos]};
    setLoad(true);
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
    switch (e.target.name) {
      case "name":
        setNaam(e.target.value);
        break;
      case "number":
        setPhone(e.target.value);
        break;
      default:
        break;
    }
  }
  return (
    <div className='order'>
      <div className="left orderChild">
        <div className='image'>
          <img src={`/images/${idInt}${it%3}.jpg`} alt={`/images/${idInt}${it%3}.jpg`} />
        </div>
        <div className="details">
        <div className='sum'><div className='one'>Item: </div><div className='two'>{id[pos]}</div></div>
        <div className='sum'><div className='one'>Dimension: </div><div className='two'>{dim}</div></div>
        <div className='sum'><div className='one'>Price: </div><div className='two'>{price[pos]}</div></div>
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
        <form action="#">
          <div>
          <p>Name: </p>
          <input type="text" name="name" id="name" onChange={changeHandler} value={naam}/>
          </div>
          <div>
          <p>Phone number: </p>
          <input type="number" name="number" id="number" onChange={changeHandler} value={phone}/>
          </div>
          <button type="submit" disabled={load || phone>=10000000000 || phone<1000000000 || phone==null || naam==null} onClick={submitHandler}>Book</button>
          {load && <img src="/gifs/loading.gif" alt="Loading..." className='loader'/>}
        </form>
      </div>
    </div>
  )
}

export default Item
