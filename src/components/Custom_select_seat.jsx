import React, {useState} from 'react';
import NavButton from "./nav_button";
import hall_manegment from "../action/hall_manegment";

const CustomSelectSeat = (props) => {

    let [seat, setSeat]=useState('Место не выбрано')
    props.data.place_from=seat
    return (
        <div className={'custom row_align border_white width100'} style={{display:'flex'}}>

            <div className="color_blue row_item">Имя:</div>
            <div className="test-5-name row_item color_white">{props.data.first_name}</div>
            <div className="color_blue row_item">Фамилия:</div>
            <div className="test-5-name row_item color_white">{props.data.last_name}</div>
            <div className="color_blue row_item">Дата Рождения:</div>
            <div className="test-5-name row_item color_white">{props.data.birth_date}</div>
            <div className="color_blue row_item">Номер документа:</div>
            <div className="test-5-name row_item color_white">{props.data.document_number}</div>
            <div className={'row_item color_blue'}>Место в зале:</div>
            <p className={'row_item color_white'}>{seat}</p>
            <NavButton value={'Выбрать место'} onclick={()=>hall_manegment(setSeat)}/>
        </div>
    );
};

export default CustomSelectSeat;