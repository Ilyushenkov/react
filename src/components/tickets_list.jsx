import React, {useRef, useState} from 'react';
import Tickets from "./tickets";
import Modal from "./modal";

import {render} from "react-dom";
import {useMemo} from "react";
let ticket=[{name:'Татьяна Буланова', code:'djkllkjfs', date:'2022-02-02', time:'13:00'},
    {name:'Наталья Ветлицкая', code:'4Ujfeftg', date:'2022-02-24', time:'18:00'},
    {name:'Олег Газманов', code:',jhsdfgre', date:'2021-12-31', time:'19:00'},
    {name:'Григорий Лепс', code:'efgt5dwe4', date:'2022-03-24', time:'19:30'},
    {name:'Николай Басков', code:'oi7gdfed7', date:'2022-01-11', time:'19:10'}]

const TicketsList = (props) => {


    let [searchQuery, setQuery]=useState('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ticket=useMemo(()=> ticket.filter((ticket)=> {return (ticket.name.toLowerCase().includes(searchQuery.toLowerCase()) || ticket.code.includes(searchQuery))
    }, [ticket, searchQuery]))
    if(props.ticket) {
        ticket.push(props.ticket)    }
    if(props.id) {
        let id=props.id
     ticket=ticket.filter((ticket)=>{
           return id!==ticket.code})
    }

ticket.sort(function (a,b){
    return new Date(a.date+' '+a.time)-new Date(b.date+' '+b.time)
})

    if (ticket.length===0){
        return <div>
            <h1>Список билетов</h1>
            <div className={'row_align center'}>
                <button className={'button row_item'} onClick={()=>render([<TicketsList/>, <Modal/>], document.getElementById('root'))}>Создзать билет</button>
                <input type={'text'} className={'row_item'} placeholder={'Поиск'} value={searchQuery} onChange={e=>setQuery(e.target.value)}/>
            </div>
                <div className={'row_item color_white'}>
                   Билеты не найдены

                </div>

        </div>
    }

    return (
        <div className={'width100'}>
           <h1>Список билетов</h1>
            <div className={'row_align center'}>
                <button className={'button row_item'} onClick={()=>render([<TicketsList/>, <Modal/>], document.getElementById('root'))}>Создзать билет</button>
                <input type={'text'} className={'row_item'} placeholder={'Поиск'} value={searchQuery} onChange={e=>setQuery(e.target.value)}/>
            </div>

            <section className="App row_align">
                {ticket.map((ticket, index) =>
                    <Tickets ticket={ticket} key={ticket.code} number={index+1}/>
                )}
            </section>
        </div>
    );
};

export default TicketsList;