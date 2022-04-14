//Список концертов в личном кабинете пользователя

import React, {useEffect, useState} from 'react';
import ConcertData from "./concert_data";
import Download from "./download";


let i=0

const ListConcerts = (props) => {
    let [concerts, setConcerts]=useState([])
    useEffect(()=>{

        try {
            let myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer "+props.token);
            myHeaders.append("Content-Type", "application/json");
            let request_options={method: 'GET',  headers:myHeaders}
            fetch('http://tickets.сделай.site/user/booking', request_options)
                .then(concerts => concerts.json())
                .then(concerts => setConcerts(concerts.data.items))
        }
        catch  {setConcerts({data: {items:[]}}) }
    }, [props.token])


        let data_concerts=concerts.map((value, index)=>{
        let date= new Date(value.tickets.date_concert)
        if (date<new Date()) {i++}
        else return <ConcertData data={value.tickets} key={100+index}/>
    })





    return (
        <div>
            <p className={'color_red'}>Посещенные концерты: {i}</p>
            <p className={"color_red"}>Предстаящие концерты:</p>
            {data_concerts}
        </div>
    );
};

export default ListConcerts;