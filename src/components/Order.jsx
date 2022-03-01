import React, {useEffect, useState} from 'react';
import Custom from "./custom";
import Nav_button from "./nav_button";
import order_manegment from "../action/order_manegment";
import {useParams} from "react-router-dom";

const Order = (props) => {

let req=useParams()

    let number=[0, 1, 2, 3, 4, 5, 6, 7]
    let list_customs=number.map((data,index)=><Custom key={data} number={index}/>)

    let [user, setUser]=useState()
    let getUser=()=>{
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+localStorage.token);
        myHeaders.append("Content-Type", "application/json");
        try {
            fetch('http://tickets.сделай.site/user', {headers:myHeaders})
                .then(user=>user.json())
                .then(user=>setUser(user))
            document.getElementsByClassName('test-5-name')[0].value = user.first_name
            document.getElementsByClassName('test-5-last')[0].value = user.last_name
            document.getElementsByClassName('test-5-doc')[0].value = user.document_number
        }
        catch (e) {}
    }

    useEffect(()=>getUser(), [])

    return (
        <div className={'width100'}>
<section>
    <h1>Оформление заказа</h1>
    <p className={'color_red'}>Информация о билете</p>
            <div className="border_white row_item row_align" style={{width:'90%'}}>
                <p className="color_blue row_item">ID билета:</p>
                <p className="test-4-fn row_item color_white">{req.id}</p>
                <p className="color_blue row_item">Номер билета:</p>
                <p className="test-4-fn row_item color_white">{req.concert_code}</p>
                <p className="color_blue row_item">Название концерта:</p>
                <p className="test-4-at row_item color_white">{req.name_concert}</p>
                <p className="color_blue row_item">Дата концерта:</p>
                <p className="test-4-at row_item color_white">{req.date_concert}</p>
                <p className="color_blue row_item">Время начала концерта:</p>
                <p className="test-4-dd row_item color_white">{req.time_start}</p>
                <p className="color_blue row_item">Время окончания концерта</p>
                <p className="test-4-dt row_item color_white">{req.time_finish}</p>
                <p className="color_blue row_item">Длительность концерта</p>
                <p className="test-4-ft row_item color_white">{req.duration}</p>
                <p className="color_blue row_item">Стоимость:</p>
                <p className="test-4-fp row_item color_white">{req.price}</p>
            </div>
        <p className={'color_red'}>Информация о гостях</p>
    <div className={'width100 row_align'}>
        {list_customs}

    </div>
        <div className={'width100 row_align'}>
    <Nav_button onclick={()=>order_manegment(props)} value={'Подтвердить'} style={{marginInline:'auto'}}/>
        </div>
</section>
        </div>
    );
};
/*
async function first_custom(first_name) {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.token);
    let request_options = {method: 'GET', headers: myHeaders}
    let result = await fetch('http://tickets.сделай.site/user', request_options)
    let answer = await result.json()
    let status = result.status
    if (status === 200) {
        document.getElementsByClassName('test-5-name')[0].value = answer.first_name
        document.getElementsByClassName('test-5-last')[0].value = answer.last_name
        document.getElementsByClassName('test-5-doc')[0].value = answer.document_number
    }

}*/
export default Order;