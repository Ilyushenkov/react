import React, {useEffect, useState} from 'react';
import Custom from "./custom";
import Nav_button from "./nav_button";
import order_manegment from "../action/order_manegment";
import {useParams} from "react-router-dom";
import request from "../action/request";


const Order = (props) => {

let req=useParams()

    let i=0
    let number=[0, 1, 2, 3, 4, 5, 6, 7]
    let [custom, set_custom]=useState([])
    let [list_guest, setList_guest]=useState([<Custom  custom={custom} set_custom={set_custom} key={i}/>])
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
        catch (e) {
           /* document.getElementsByClassName('test-5-name')[0].value = []
            document.getElementsByClassName('test-5-last')[0].value = []
            document.getElementsByClassName('test-5-doc')[0].value = []*/
        }
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
    <table style={{margin:'15px'}}>
        <tr>
            <td><input type={'button'} value={'-'} style={{background: '#FFFAFA', padding:'10px', borderRadius:'10px', cursor:'pointer'}}
            onClick={()=>{del_guest(list_guest, setList_guest, custom); i--}}/></td>
            <td><span className={'color_red'}>Управление гостями</span></td>
            <td><input type={'button'} value={'+'} style={{background: '#FFFAFA', padding:'10px', borderRadius:'10px', cursor:'pointer'}}
            onClick={()=>{list_guest.length<8 ? setList_guest([...list_guest, <Custom custom={custom} set_custom={set_custom} key={list_guest.length}/>]):number=[2, 2]}}/></td>
        </tr>
    </table>
    <div className={'width100 row_align'}>

        {list_guest}

    </div>
        <div className={'width100 row_align'}>
    <input type={'button'} value={'Подтвердить'} style={{marginInline:'auto'}} onClick={()=>confirm(req.id, req.date_concert, custom)} className={'button'}/>
        </div>
</section>
        </div>
    );
};

function del_guest(list_guest, setList_guest, custom) {
    if (list_guest.length===1) return
    custom.splice(list_guest.length-1, 1)
    let list=list_guest.splice(0, list_guest.length-1)
    setList_guest(list)


}
async function confirm(id, date_concert, custom) {
let body={
    concert:{id: id, date: date_concert},
    guest:custom}
    body=JSON.stringify(body)
    let result=await request('http://tickets.сделай.site/api/order', body, 'POST', null)
        .then(result=>console.log(result))
}


export default Order;