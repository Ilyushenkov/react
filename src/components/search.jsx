import React, {useRef, useState} from 'react';
import request from '../action/request'
const Search = () => {
    document.getElementsByClassName('screen')[2].style.display='block'
    let element_start=useRef()
    let element_finish=useRef()
    let element_type=useRef()
    let [guests, setGuests]=useState(1)
    localStorage.guests=guests
    console.log(localStorage.guests)
    return (
        <div>
            <section id="find">
                <h1>Форма поиска</h1>
                <p className="color_red"><i>Лучший путеводитель в мире развлечений</i></p>
                <form method="GET" encType="multipart/form-data" action="">
                    <fieldset className="row_align color_white">
                        <label htmlFor="date1" className="row_item">Дата концерта от:</label>
                        <input type="date" className="test-0-fd row_item" name='date1' required id="date1" ref={element_start}/>

                            <label htmlFor="date2" className="row_item">Дата концерта до:</label>
                            <input type="date" className="test-0-af row_item" name='date2' required id="date2" ref={element_finish}/>
                                <label htmlFor='type' className="row_item">Выбор типа концерта</label>
                                <select className="test-0-fdt row_item" name='type' id="type" ref={element_type}>
                                    <option value="классика">Классика</option>
                                    <option value="рок">Рок</option>
                                    <option value="джаз">Джаз</option>
                                    <option value="народная/фолк">Народная/фолк</option>
                                    <option value="хип-хоп">Поп-музыка</option>
                                    <option value="другое">Другое</option>
                                </select>
                                <label htmlFor="amount_pers" className="row_item">Количество гостей:</label>
                                <input type={"number"} name={"amount_pers"} min={1} max={5} step={1} placeholder={1} className={"test-0-fnp row_item"}
                                       onChange={(e)=>setGuests(e.target.value)} id={"amount_pers"}/>
                    </fieldset>
                    <div className="row_align">
                        <input type="button" value="Поиск билетов" className="test-0-fbs button row_item"
                               onClick={()=>request(`http://tickets.сделай.site/api/concert?date1=${element_start.current.value}&date2=${element_finish.current.value}&type=${element_type.current.value}`,null, 'GET', 1)}/>
                        <input type="reset" value="Сбросить значения" className="test-0-fbs button row_item"/>
                    </div>
                </form>

            </section>
        </div>
    );
};

export default Search;