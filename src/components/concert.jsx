import React from 'react';

const Concert = (props) => {
    return (
        <div className={'row_item'}>

                <div className="border_white row_item width100 row_align">

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
                        <p className="color_blue row_item">Общая цена:</p>
                        <p className="test-4-fp row_item color_white">{props.data.price*localStorage.guests}</p>


                        <input type="button" value="Оформить заказ"
                               onClick="window.location.href = '../html/order.html'" className="test-4-bsb button"/>
                </div>


        </div>
    );
};

export default Concert;