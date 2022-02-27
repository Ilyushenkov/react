import React, {useMemo, useState} from 'react';
import Concert from "./concert";
import {render} from "react-dom";



const Concerts = (props) => {

let [sort, setSort]=useState('price')
    let [low_price, setLowprice]=useState(0)
    let [high_price, setHighprice]=useState(Infinity)
   let sort_data=useMemo(()=>{return props.data.filter((data, index, arr)=>{
       return(arr[index].props.data.price>=low_price && arr[index].props.data.price<=high_price)})})
    if (low_price<0) setLowprice(0)
    if(high_price<low_price) setHighprice(Infinity)


    switch (sort){
        case 'price': sort_data.sort((a, b)=>{
            let price1=a.props.data.price
            let price2=b.props.data.price
            return price1-price2} )
            break
        case 'date': sort_data.sort((a, b)=>{
            let date1=a.props.data.date_concert+' '+a.props.data.time_start
            let date2=b.props.data.date_concert+' '+b.props.data.time_start

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