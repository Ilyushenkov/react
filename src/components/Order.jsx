import React from 'react';
import Custom from "./custom";
import Customs_control from "../action/customs_control";
import request from "../action/request";
const Order = (props) => {


    let number=[0, 1, 2, 3, 4, 5, 6, 7]
   let list_customs=number.map((data,index)=>Custom(index))


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
    {list_customs}

</section>

    );
};

export default Order;