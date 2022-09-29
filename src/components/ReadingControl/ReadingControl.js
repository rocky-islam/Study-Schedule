import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
import './ReadingControl.css'

const ReadingControl = () => {

     const [loadData, setLoadData] = useState([]);

     useEffect(() => {
       fetch('data.json')
         .then((res) => res.json())
         .then((data) => setLoadData(data));
     }, []);
    //  console.log(loadData[0].name);

    return (
        <div>
            <div className='mainBody'>
                <div className="left-side">
                    <h1>Left side bar</h1>
                    <SingleData singleData = {loadData}></SingleData>
                </div>
                <div className="right-side-cart">
                    <h1>Right side cart</h1>
                </div>
            </div>
        </div>
    );
};

export default ReadingControl;