import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";


const Search = () => {

    let date=new Date().toISOString().split('T')[0]

    let history=useNavigate()
    let [element_start, setElement_start]=useState()
    let [element_finish, setElement_finish]=useState()
    let [element_type, setElement_type]=useState('Классика')
    let [guests, setGuests]=useState(1)
    localStorage.guests=guests

    function locate(e) {
        e.preventDefault()
        history(`/concerts/${element_start}/${element_finish}/${element_type}`)
    }
    return (
        <div className={'width100'}>
            <section id="find">
                <h1>Форма поиска</h1>
                <p className="color_red"><i>Лучший путеводитель в мире развлечений</i></p>
                <form method="GET" encType="multipart/form-data" onSubmit={locate}>
                    <fieldset className="row_align color_white">
                        <label htmlFor="date1" className="row_item">Дата концерта от:</label>
                        <input type="date" className="test-0-fd row_item" name='date1' required id="date1" onChange={(e)=>
                            setElement_start(e.target.value)} min={date}/>
                            <label htmlFor="date2" className="row_item">Дата концерта до:</label>
                            <input type="date" className="test-0-af row_item" name='date2' required id="date2" onChange={(e)=>
                                setElement_finish(e.target.value)} min={element_start}/>
                                <label htmlFor='type' className="row_item">Выбор типа концерта</label>
                                <select className="test-0-fdt row_item" name='type' id="type" onChange={(e)=>setElement_type(e.target.value)}>
                                    <option value="классика">Классика</option>
                                    <option value="рок">Рок</option>
                                    <option value="джаз">Джаз</option>
                                    <option value="Фольклор">Фольклор</option>
                                    <option value="поп-музыка">Поп-музыка</option>
                                    <option value="другое">Другое</option>
                                </select>
                                <label htmlFor="amount_pers" className="row_item">Количество гостей:</label>
                                <input type={"number"} name={"amount_pers"} min={1} max={5} step={1} placeholder={1} className={"test-0-fnp row_item"}
                                       onChange={(e)=>setGuests(e.target.value)} id={"amount_pers"}/>
                    </fieldset>
                    <div className="row_align">
                        <input type="submit" value="Поиск билетов" className="test-0-fbs button row_item"/>



                        <input type="reset" value="Сбросить значения" className="test-0-fbs button row_item"/>
                    </div>
                </form>

            </section>
        </div>
    );
};

export default Search;