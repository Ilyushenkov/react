import React from 'react';
import Concert_data from "./concert_data";
import Custom_data from "./custom_data";
import NavButton from "./nav_button";

import sel_seats from "../action/sel_seats";

const OrderData = (props) => {
    let data=props.data
    let list_custom=data.guest.map((data, index)=> {

       return <Custom_data data={data} key={index}/>
    })

    return (
        <section>
            <h1>Данные о бронировании</h1>
            <h3 className={'color_red'}>Информация о заказе</h3>
        <div className={'row_align border_white'}>
            <p className={'color_blue row_item'}>Код бронирования:</p> <p className={'color_white row_item'}>{data.data.code}</p>
            <p className={'color_blue row_item'}>Цена, руб:</p> <p className={'color_white row_item'}>{data.data.cost}</p>
        </div>
                <h3 className={'color_red'}>Информация о концерте</h3>
                <Concert_data data={data.ticket} id={0}/>
                <h3 className={'color_red'}>Информация о гостях</h3>
            <div className={'row_align'}>
                {list_custom}
            </div>
            <NavButton key={1} id={'Select seats'} value={'Выбрать места'}  onclick={()=>sel_seats(data)}/>
           </section>

    );
};

export default OrderData;