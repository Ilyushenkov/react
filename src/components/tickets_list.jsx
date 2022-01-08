import React from 'react';
import Tickets from "./tickets";

import Modal from "./modal";

import {render} from "react-dom";
let ticket=[{name:'Татьяна Буланова', code:'djkllkjfs', date:'2022-02-02', time:'13:00'},
    {name:'Наталья Ветлицкая', code:'4Ujfeftg', date:'2022-02-24', time:'18:00'},
    {name:'Олег Газманов', code:',jhsdfgre', date:'2021-12-31', time:'19:00'},
    {name:'Григорий Лепс', code:'efgt5dwe4', date:'2022-03-24', time:'19:30'},
    {name:'Николай Басков', code:'oi7gdfed7', date:'2022-01-11', time:'19:10'}]
const TicketsList = (props) => {
    if(props.ticket) {
        ticket.push(props.ticket)    }
    if(props.id) {
        let id=props.id
     ticket=ticket.filter((ticket)=>{
           return id!==ticket.code})}

ticket.sort(function (a,b){
    return new Date(a.date+' '+a.time)-new Date(b.date+' '+b.time)
})

    return (
        <div className={'width100'}>
           <h1>Список билетов</h1>
           <button className={'button'} onClick={()=>render([<TicketsList/>, <Modal/>], document.getElementById('root'))}>Создзать билет</button>
            <section className="App row_align">
                {ticket.map((ticket, index) =>
                    <Tickets ticket={ticket} key={ticket.code} number={index+1}/>
                )}
            </section>
        </div>
    );
};

export default TicketsList;