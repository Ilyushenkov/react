import React, {useContext} from 'react';
import Header from "../header";
import Footer from "../footer";
import Concerts from "../concerts";
import Concert from "../concert";
import {useParams} from "react-router-dom";
import request from "../../action/request";

async function ConcertsPage(){
    let req={date1:'2022-02-28', date2:'2022-06-01', type:'Рок'}//useParams()
    let answer=await request(`http://tickets.сделай.site/api/concert?date1=${req.date1}&date2=${req.date2}&type=${req.type}`, null, 'GET', null)

    let concerts=await answer.data.concert

    let list_concert=concerts.map((concerts, index)=><Concert data={concerts} number={index} key={index}/>)
    return (
        <div>
            <Header/>
            <main>
                <div id={'error'} className={'error'}/>
                <Concerts value={list_concert} key={11}/>
            </main>
            <Footer/>
        </div>
    );
};

export default ConcertsPage;