//Страница личного кабинета

import React, {useEffect, useState} from 'react';
import request from "../../action/request";
import Profile from "../profile";
import Header from "../header";
import Footer from "../footer";
import ListConcerts from "../list_concerts";
import Download from "../download";


const Profile_page = () => {

        let user=global.user
        let body=JSON.stringify(user)
        let url='http://tickets.сделай.site/api/login'

        let [token, setToken]=useState(localStorage.token)

        useEffect(()=>{
try {
    request(url, body, 'POST')
        .then(token => {setToken(token.data.token)})

}
           catch (e) {
               
           }



        }, [token])

    return (
        <div>
            <Download/>
            <Header/>
            <main>
            <section>
                <div id={'error'} className={'error'} key={21}/>
                 <Profile token={token} key={22}/>
                <ListConcerts key={23} token={token}/>

            </section>
            </main>
            <Footer/>
        </div>

    );
};

export default Profile_page;