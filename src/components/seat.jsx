// Место в зале
import React from 'react';

const Seat = (props) => {
    return (
        <input type='button' className='seat' {...props}/>
    );
};

export default Seat;