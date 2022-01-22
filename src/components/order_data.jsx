import React from 'react';
import Concert from "./concert";
import Custom from "./custom";
import Concert_data from "./concert_data";
import Custom_data from "./custom_data";

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
            <p className={'color_blue row_item'}>Цена, руб:</p> <p className={'color_white row_item'}>{data.data.cost*data.guest.length}</p>
        </div>
                <h3 className={'color_red'}>Информация о концерте</h3>
                <Concert_data data={data.ticket}/>
                <h3 className={'color_red'}>Информация о гостях</h3>
            {list_custom}
            </section>

    );
};

export default OrderData;