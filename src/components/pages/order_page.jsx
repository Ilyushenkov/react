
//Страница заказа

import React  from 'react';
import Header from "../header";
import Back from "../back";
import Order from "../Order";
import Footer from "../footer";


const OrderPage = () => {

    return (
        <div>
            <Header/>
            <main>
                <div id={'error'} className={'error'}/>
                <Order key={18}/>
                <Back/>
            </main>
            <Footer/>
        </div>
    );
};

export default OrderPage;