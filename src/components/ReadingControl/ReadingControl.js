import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
import './ReadingControl.css'

const ReadingControl = () => {

     const [loadData, setLoadData] = useState([]);
     const [cart, setCart] = useState([])

     const handleCart = (time)=>{
        setCart([...cart,time])
        // console.log(cart);
     }

     useEffect(() => {
       fetch("data.json")
         .then((res) => res.json())
         .then((data) => setLoadData(data));
     }, []);
    //  console.log(loadData[0].name);

    return (
        <div>
            <div className='mainBody'>
                <div className="left-side">
                    
                    <SingleData loadData = {loadData} cart={cart} handleCart={handleCart}></SingleData>
                </div>
                <div className="right-side-cart">
                    <h1>time:{cart.reduce((a, b)=>a+b,0)}</h1>
                </div>
            </div>
        </div>
    );
};

export default ReadingControl;