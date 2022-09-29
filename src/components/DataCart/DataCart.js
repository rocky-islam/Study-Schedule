import React from 'react';
import './DataCart.css'

const DataCart = (props) => {
    console.log(props.loadData);
    const { name, picture, time } = props.loadData;
    
    
    
    return (
      <div className="data">
        <img src={picture} alt="" />
        <p>Name: {name}</p>
        <p>Time: {time} min</p>
        <div className='btn'>
          <button>Add to cart</button>
        </div>
      </div>
    );
};

export default DataCart;