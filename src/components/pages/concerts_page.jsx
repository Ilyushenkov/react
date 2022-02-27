import React, {useContext} from 'react';
import Header from "../header";
import Footer from "../footer";
import Concerts from "../concerts";
import Concert from "../concert";
import {useParams} from "react-router-dom";
import request from "../../action/request";

function ConcertsPage(){

    return (
        <div>
            <Header/>
            <main>
                <div id={'error'} className={'error'}/>
                <Concerts key={11}/>
            </main>
            <Footer/>
        </div>
    );
};

export default ConcertsPage;