import React from 'react';
import Concert from "./concert";
import {render} from "react-dom";


const Concerts = (props) => {

    document.getElementsByClassName('screen')[2].style.display='flex'
    let concerts=props.answer.data.concert
   let list_concert=concerts.map((concerts, index)=><Concert data={concerts} number={index}/>)
    return (
        <div className={'width100'}>
            <section>
                <h1>Найденные концерты</h1>
                {list_concert}
            </section>

        </div>
    );
};

export default Concerts;