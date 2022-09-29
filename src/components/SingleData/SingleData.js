import React from 'react';
import DataCart from '../DataCart/DataCart';
import './SingleData.css'
const SingleData = ({loadData}) => {
    // console.log(loadData);
    
    
    return (
        <div className='cart'>
            {/* <h1>Form single data</h1> */}
            {/* <DataCart></DataCart> */}
            {
                loadData.map(dt => <DataCart loadData={dt} key={dt.id}></DataCart>
                )
            }
        </div>
    );
};

export default SingleData;