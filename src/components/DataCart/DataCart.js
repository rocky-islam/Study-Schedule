import React from 'react';
import './DataCart.css'

const DataCart = ({ loadData, cart, handleCart }) => {
  // console.log(props.loadData);
  const { name, picture, time } = loadData;

  return (
    <div className="data">
      <img src={picture} alt="" />
      <p>Name: {name}</p>
      <p>Time: {time} min</p>
      <div className="btn">
        <button className='button' onClick={()=>{handleCart(time)}}>Add to List</button>
      </div>
    </div>
  );
};

export default DataCart;