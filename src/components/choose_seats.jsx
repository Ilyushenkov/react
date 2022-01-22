import React from 'react';
import Custom_data from "./custom_data";
import NavButton from "./nav_button";

const ChooseSeats = (props) => {
    let list_custom=props.data.guest.map((data, index)=> {
        return (
            <div>
                <Custom_data data={data} key={index}/>
                <NavButton/>
            </div>
        )

    });
return list_custom
};

export default ChooseSeats;