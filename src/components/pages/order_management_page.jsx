//Страница управления заказом

import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import request from "../../action/request";
import Order_data from "../order_data";
import Header from "../header";
import Back from "../back";
import Footer from "../footer";
import Download from "../download";

const Order_management_page = () => {
    let req=useParams()
    let code=req.code
    let [order, setOrder]=useState({guest:[], data:{code:'', cost:''}, ticket:{ticket_id:'', ticket_code:'',
        name_concert:'', date_concert:'', time_start:'', time_finish:'', venue:'', place_from:''}})
    useEffect(()=>{load(code);}, [])
    function load(code) {
        request(`http://tickets.сделай.site/api/order/${code}`, null, 'GET')
            .then(order=>setOrder(order))
    }

    return (
        <div>
            <Header/>
            <main>
                <div id={'error'} className={'error'}/>
                <Order_data data={order}/>
                <Back/>
            </main>
            <Footer/>
        </div>
    );
};



export default Order_management_page;