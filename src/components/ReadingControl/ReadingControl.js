import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
import './ReadingControl.css';
import Swal from "sweetalert2";


const ReadingControl = () => {

     const [loadData, setLoadData] = useState([]);
     const [cart, setCart] = useState([]);
     const[brTime,setBrTime] = useState(0);

    //  break time
    const breakTime = (breakTime) =>{
        setBrTime(breakTime);
        localStorage.setItem('time',breakTime);
        
    }

    useEffect(()=>{
        const localTime = localStorage.getItem('time');
        if(localTime){
            setBrTime(localTime);
        }
    },[])

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

    // tost button
    const tost = ()=>{
        // console.log('click me tost');
        Swal.fire("Good job!", "You clicked the button!", "success");
        
    }

    return (
        <div>
            <div className='mainBody'>
                <div className="left-side">
                    
                    <SingleData loadData = {loadData} cart={cart} handleCart={handleCart}></SingleData>
                </div>
                <div className="right-side-cart">
                    <div className='right-cart'>
                    <div className='profile'>
                        <div className='profile-pic'>
                            <img src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" alt="" />
                        </div>
                        <div className='profile-name'>
                                <p className='name'>John Cena</p>
                                <p><small>New york, USA</small></p>
                            </div>
                    </div>
                    <div className='profile-details'>
                        <div>
                            <p><span className='item-details'>70</span><small>kg</small></p>
                            <p>weight</p>
                        </div>
                        <div>
                            <p><span className='item-details'>6.1</span></p>
                            <p>Height</p>
                        </div>
                        <div>
                            <p><span className='item-details'>25</span><small>yrs</small></p>
                            <p>Age</p>
                        </div>
                    </div>
                    <div className='break'>
                        <h3>Add a Break</h3>
                        <div className='break-time'>
                            <button onClick={()=>breakTime(10)}><span>10</span>min</button>
                            <button onClick={()=>breakTime(20)}><span>20</span>min</button>
                            <button onClick={()=>breakTime(30)}><span>30</span>min</button>
                            <button onClick={()=>breakTime(40)}><span>40</span>min</button>
                            <button onClick={()=>breakTime(50)}><span>50</span>min</button>
                        </div>
                    </div>
                    <div className='exercise'>
                        <h3>Reading Details</h3>
                        <div>
                            <div className='exercise-time'>
                                <p className='ex-time'>Exercise Time: </p>
                                <p>{cart.reduce((a, b)=>a+b,0)} <span>Min</span></p>
                            </div>
                        </div>
                        <div className='br-time'>
                            <div className='exercise-time'>
                                <p className='ex-time'>Break Time:</p>
                                <p>{brTime} <span>Min</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='tost'>
                        <button onClick={tost}>Activity Completed</button>
                    </div>
                    {/* <h1>time:{cart.reduce((a, b)=>a+b,0)}</h1> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadingControl;