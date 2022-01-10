import React from 'react';

const Concert = (props) => {
    return (
        <div>


                <p className="color_red">Результат 1</p>
                <div className="border_white">
                    <div className="row_align">
                        <p className="color_blue row_item">Номер билета:</p>
                        <p className="test-4-fn row_item color_white">2364567895</p>
                        <p className="color_blue row_item">Название концерта:</p>
                        <p className="test-4-at row_item color_white">Валерий Меладзе</p>
                        <p className="color_blue row_item">Время начала концерта:</p>
                        <p className="test-4-dd row_item color_white">19:00</p>
                        <p className="color_blue row_item">Время окончания концерта</p>
                        <p className="test-4-dt row_item color_white">23.00</p>
                        <p className="color_blue row_item">Длительность концерта</p>
                        <p className="test-4-ft row_item color_white">4 часа</p>
                        <p className="color_blue row_item">Стоимость:</p>
                        <p className="test-4-fp row_item color_white">3500 руб.</p>
                    </div>

                        <p className="discount1 color_white"></p>
                        <input type="button" value="Оформить заказ"
                               onClick="window.location.href = '../html/order.html'" className="test-4-bsb button"/>
                </div>


        </div>
    );
};

export default Concert;