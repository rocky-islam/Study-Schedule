import React from 'react';
import DataCart from '../DataCart/DataCart';
import './SingleData.css'
const SingleData = ({ loadData, cart, handleCart }) => {
  // console.log(loadData);

  return (
    <div className="cart">
      {/* <h1>Form single data</h1> */}
      {/* <DataCart></DataCart> */}
      {loadData.map((dt) => (
        <DataCart loadData={dt} cart={cart} handleCart={handleCart} key={dt.id}></DataCart>
      ))}
    </div>
  );
};

export default SingleData;