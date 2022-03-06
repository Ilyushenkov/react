import React, {useEffect, useState} from 'react';
import Choose_seats from "../choose_seats";
import {useParams} from "react-router-dom";
import request from "../../action/request";
import Concert_data from "../concert_data";
import Header from "../header";
import Footer from "../footer";
import Back from "../back";

const SelectSeatPage = () => {
    let req=useParams()
    let [order, setOrder]=useState({guest:[], data:{code:'', cost:''}, ticket:{ticket_id:'', ticket_code:'',
            name_concert:'', date_concert:'', time_start:'', time_finish:'', venue:''}})
    let code=req.code
    useEffect(()=>{
        request(`http://tickets.сделай.site/api/order/${code}`, null, 'GET', null)
            .then(order=>setOrder(order))
            .then(order=>console.log(order))
    }, [])


    return (
        <div>
            <Header/>
            <main>
            <section>
                <div id={'screen2'}></div>
                <h1>Выбор мест</h1>
                <h3 className={'color_red'}>Сведения о концете:</h3>
                <Concert_data data={order.ticket}/>
                <Choose_seats data={order}/>

            </section>
                <Back/>
            </main>

            <Footer/>
        </div>

    );
};

export default SelectSeatPage;