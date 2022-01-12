import React from 'react';
import Concert from "./concert";
import {render} from "react-dom";


const Concerts = (props) => {
console.log(props.data)
if(props.data.length===0){
    return (
        <div className={'width100'}>
            <section>
                <h1>Найденные концерты</h1>
                <h2 className={'error'} style={{display: 'flex', padding:'20px', justifyContent:'center'}} >Концерты не найдены</h2>
            </section>

        </div>
    )
}
    return (
        <div className={'width100'}>
            <section>
                <h1>Найденные концерты</h1>
                <div className={'row_align'}>
                {props.data}
                </div>
            </section>

        </div>
    );
};

export default Concerts;