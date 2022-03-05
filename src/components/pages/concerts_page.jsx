import React from 'react';
import Header from "../header";
import Footer from "../footer";
import Concerts from "../concerts";
import Back from "../back";


const ConcertsPage=()=>{

    return (
        <div>
            <Header/>
            <main>
                <div id={'error'} className={'error'}/>
                <Concerts key={11}/>
                <Back/>
            </main>
            <Footer/>
        </div>
    );
};

export default ConcertsPage;