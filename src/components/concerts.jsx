import React, {useEffect, useMemo, useState} from 'react';
import Concert from "./concert";
import request from "../action/request";
import {useParams} from "react-router-dom";



const Concerts =(props) => {

    const [concert, setConcert] = useState([])
    useEffect(() => {
        load();
    }, []);
    let req=useParams()
    let url=`http://tickets.сделай.site/api/concert?date1=${req.date1}&date2=${req.date2}&type=${req.type}`
    console.log(url)
    function load(){

        try {
            //fetch('https://json.versant.digital/.netlify/functions/fake-api/message')

            request(`http://tickets.сделай.site/api/concert?date1=${req.date1}&date2=${req.date2}&type=${req.type}`, null, 'GET', null)
                //.then(res => res.json())
                .then(concert => {
                    setConcert(concert.data.concert);
                });
        } catch (e) {}
    };
    console.log(concert)

    /* const load_concerts=()=> {
         try {
             request(`http://tickets.сделай.site/api/concert?date1=${req.date1}&date2=${req.date2}&type=${req.type}`, null, 'GET', null)
                 .then(answer=>setConcerts(answer.data.concert))
                 console.log('Привет')
         } catch (e) {

         }
     }
     load_concerts()
     let req=useParams()
     let [concerts, setConcerts]=useState()*/

     let list_concert=concert.map((concert, index)=><Concert data={concert} number={index} key={index}/>)
let [sort, setSort]=useState('price')
    let [low_price, setLowprice]=useState(0)
    let [high_price, setHighprice]=useState(Infinity)
   let sort_data=useMemo(()=>{return list_concert.filter((data, index, arr)=>{
       return(arr[index].props.data.price>=low_price && arr[index].props.data.price<=high_price)})})
    if (low_price<0) setLowprice(0)
    if(high_price<low_price) setHighprice(Infinity)
console.log(sort_data)

    switch (sort){
        case 'price': sort_data.sort((a, b)=>{
            let price1=a.price
            let price2=b.price
            return price1-price2} )
            break
        case 'date': sort_data.sort((a, b)=>{
            let date1=a.date_concert+' '+a.time_start
            let date2=b.date_concert+' '+b.time_start

            return new Date(date1)-new Date(date2)
        })
            break
    }
if(sort_data.length===0){
    return (
        <div className={'width100'}>
            <section>
                <h1>Найденные концерты</h1>

                <div className={'row_align border_white'}>
                    <p className={'row_item color_white'}>Цена от, руб: <input type={'number'} onChange={(e)=>setLowprice(e.target.valueAsNumber)}/></p>
                    <p className={'row_item color_white'}>Цена до, руб: <input type={'number'} onChange={(e)=>setHighprice(e.target.valueAsNumber)}/></p>
                    <p className={'row_item color_white'}>Выберите фильтр:
                        <select value={sort} style={{minWidth:'150px'}} onChange={(e)=>setSort(e.target.value)}>
                            <option value={'price'}>По цене</option>
                            <option  value={'date'}>По дате</option>
                        </select>
                    </p>
                </div>


                <h2 className={'error'} style={{display: 'flex', padding:'20px', justifyContent:'center'}} >Концерты не найдены</h2>
            </section>

        </div>
    )
}

    return (

       <div className={'width100'}>

            <section>

                <h1>Найденные концерты</h1>
                    <div className={'row_align border_white'}>
                        <p className={'row_item color_white'}>Цена от, руб: <input type={'number'} onChange={(e)=>setLowprice(e.target.valueAsNumber)}/></p>
                        <p className={'row_item color_white'}>Цена до, руб: <input type={'number'} onChange={(e)=>setHighprice(e.target.valueAsNumber)}/></p>
                        <p className={'row_item color_white'}>Выберите фильтр:
                            <select value={sort} style={{minWidth:'150px'}} onChange={(e)=>setSort(e.target.value)}>
                                <option value={'price'}>По цене</option>
                                <option  value={'date'}>По дате</option>
                            </select>
                        </p>
                    </div>

                <div className={'row_align'}>
                {sort_data}
                </div>
            </section>

        </div>
    );
};

export default Concerts;