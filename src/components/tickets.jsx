import React from 'react';
import {render} from "react-dom";
import tickets_list from "./tickets_list";
import Tickets_list from "./tickets_list";
const Tickets = (props) => {
    return (

        <div className="border_white row_item">
            <p className={'color_white'}>{props.number})</p>
            <p className="row_item color_blue">Название концерта:</p>
            <p className="test-3-to row_item color_white">{props.ticket.name}</p>
            <p className="row_item color_blue">Код заказа:</p>
            <p className="test-3-code row_item color_white">{props.ticket.code}</p>
            <p className="row_item color_blue">Дата и время концерта:</p>
            <p className="test-3-d1 row_item color_white">{props.ticket.date} в {props.ticket.time}</p>
            <button className={'button'} onClick={()=>render([<Tickets_list id={props.ticket.code} key={props.ticket.code}/>], document.getElementById('root'))}>Удалить</button>
        </div>

    );
};

export default Tickets;