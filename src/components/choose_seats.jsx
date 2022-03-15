//Список гостей для выбора места

import React from 'react';
import Custom_select_seat from "./Custom_select_seat";
import Reserve_seat from "../action/reserv_seat";
import {useNavigate} from "react-router-dom";



const ChooseSeats = (props) => {
    let history=useNavigate()
    let list_custom=props.data.guest.map((data, index)=> {

        return (

            <div className={'row_item'}>
                <Custom_select_seat data={data} key={index}/>
            </div>
        )

    });
return (
    <div>

        <h3 className={'color_red'}>Список гостей:</h3>

             {list_custom}

        <input type={'button'} className={'button'} onClick={()=>Reserve_seat(props, history)} value='Подтвердить'/>
    </div>
)


};

export default ChooseSeats;