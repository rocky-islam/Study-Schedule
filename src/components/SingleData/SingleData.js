import React from 'react';
import DataCart from '../DataCart/DataCart';
import './SingleData.css'
const SingleData = ({singleData}) => {
    // console.log(singleData[0].name);
    
    
    return (
        <div>
            <h1>Form single data</h1>
            <DataCart></DataCart>
            {
                singleData.map(data => <DataCart cartData={data} key={data.id}></DataCart>
                )
            }
        </div>
    );
};

export default SingleData;