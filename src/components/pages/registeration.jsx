//Страница регистрации

import React from 'react';
import Header from "../header";
import Footer from "../footer";
import Registr from "../registr";

const Registeration = () => {
    return (
        <div>
            <Header/>
            <main>
                <div id={'error'} className={'error'}/>
                <Registr/>
            </main>
            <Footer/>
        </div>
    );
};

export default Registeration;