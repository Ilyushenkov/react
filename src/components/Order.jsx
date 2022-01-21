import React from 'react';
import Custom from "./custom";
import Nav_button from "./nav_button";
import order_manegment from "../action/order_manegment";
const Order = (props) => {

    let number=[0, 1, 2, 3, 4, 5, 6, 7]
    let list_customs=number.map((data,index)=>Custom(index))

console.log(props)


first_custom()

    return (
<section className={'width100'}>
    <h1>Оформление заказа</h1>
    <p className={'color_red'}>Информация о билете</p>
            <div className="border_white row_item row_align" style={{width:'90%'}}>
                <p className="color_blue row_item">ID билета:</p>
                <p className="test-4-fn row_item color_white">{props.data.id}</p>
                <p className="color_blue row_item">Номер билета:</p>
                <p className="test-4-fn row_item color_white">{props.data.concert_code}</p>
                <p className="color_blue row_item">Название концерта:</p>
                <p className="test-4-at row_item color_white">{props.data.name_concert}</p>
                <p className="color_blue row_item">Дата концерта:</p>
                <p className="test-4-at row_item color_white">{props.data.date_concert}</p>
                <p className="color_blue row_item">Время начала концерта:</p>
                <p className="test-4-dd row_item color_white">{props.data.time_start}</p>
                <p className="color_blue row_item">Время окончания концерта</p>
                <p className="test-4-dt row_item color_white">{props.data.time_finish}</p>
                <p className="color_blue row_item">Длительность концерта</p>
                <p className="test-4-ft row_item color_white">{props.data.duration}</p>
                <p className="color_blue row_item">Стоимость:</p>
                <p className="test-4-fp row_item color_white">{props.data.price}</p>
            </div>
        <p className={'color_red'}>Информация о гостях</p>
    <div className={'width100 row_align'}>
        {list_customs}

    </div>
        <div className={'width100 row_align'}>
    <Nav_button onclick={()=>order_manegment(props)} value={'Подтвердить'} style={{marginInline:'auto'}}/>
        </div>
</section>

    );
};

async function first_custom(first_name){
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+localStorage.token);
    let request_options={method: 'GET', headers:myHeaders}
    let result=await fetch('http://tickets.сделай.site/user',request_options)
    let answer=await result.json()
    let status=result.status
    if (status===200){
        document.getElementsByClassName('test-5-name')[0].value=answer.first_name
        document.getElementsByClassName('test-5-last')[0].value=answer.last_name
        document.getElementsByClassName('test-5-dob')[0].value=answer.phone
        document.getElementsByClassName('test-5-doc')[0].value=answer.document_number
    }
   let number=[0,1,2,3,4,5,6,7]
    first_name=document.getElementsByClassName('test-5-name')
    let last_name=document.getElementsByClassName('test-5-last')
    let birth_date=document.getElementsByClassName('test-5-dob')
    let document_number=document.getElementsByClassName('test-5-doc')

    let guests_all=number.map((data, index)=>{return {first_name:first_name[index].value, last_name:last_name[index].value,
        birth_date:birth_date[index].value, document_number:document_number[index].value}})

}

export default Order;