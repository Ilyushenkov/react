import React, {useState} from 'react';
import Tickets_list from "./tickets_list";
import {render} from "react-dom";
import tickets from "./tickets";
const Modal = () => {
    let [name, setName]=useState()
    let [date, setDate]=useState()
    let [time, setTime]=useState()
    let [code, setCode]=useState((new Date()).getTime())
    return (
        <div className={'modal'}>
            <h1>Введите параметры билета</h1>
            <form className={'row_align'}>
                <p className={'color_white row_item'}>Название концерта: </p><input className={'row_item'} type={'text'} value={name} onChange={e => setName(e.target.value)}/>
                <p className={'color_white row_item'}>Код концерта: </p><input className={'row_item'} type={'text'} value={code} onChange={e => setCode(e.target.value)}/>
                <p className={'color_white row_item'}>Дата концерта: </p><input className={'row_item'} type={'date'} value={date} onChange={e=>setDate(e.target.value)}/>
                <p className={'color_white row_item'}>Время концерта: </p><input className={'row_item'} type={'time'} value={time} onChange={e=>setTime(e.target.value)}/>
                <p className={'row_align'}>
                    <input type={'button'} className={'button'} value={'Добавить'} onClick={()=>render([<Tickets_list ticket={{
                        name: name,
                        code: code,
                        date: date,
                        time: time
                    }} key={tickets.code}/>], document.getElementById('root'))}/>
                    <input type={'reset'} className={'button'} value={'Сбросить'}/>
                </p>
            </form>
            <div className={'close'} onClick={()=>render([<Tickets_list/>], document.getElementById('root'))}>&times;</div>
        </div>
    );
};
export default Modal;