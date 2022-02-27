import Concert from "../components/concert";
import {render} from "react-dom";
import Concerts from "../components/concerts";
import {useParams} from "react-router-dom";
import request from "./request";
import React from "react";
import Data_concert from "./data_concert";


async function concert_process(date1, date2, type) {

    let answer=await request(`http://tickets.сделай.site/api/concert?date1=${date1}&date2=${date2}&type=${type}`, null, 'GET', null)

    let concerts=await answer.data.concert
    let list_concert=concerts.map((concerts, index)=><Concert data={concerts} number={index} key={index}/>)

}

export default concert_process
