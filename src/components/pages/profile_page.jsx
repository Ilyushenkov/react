import React, {useEffect, useState} from 'react';
import request from "../../action/request";
import Profile from "../profile";
import Header from "../header";

import Footer from "../footer";


const Profile_page = () => {

        let user_data=global.user
        let body=JSON.stringify(user_data)
        let url='http://tickets.сделай.site/api/login'
        let [token, setToken]=useState('')
        let [custom, setCustom]=useState({first_name:'', last_name:'', phone:'', document_number:''})
        let [booking, setBooking]=useState({data:{items:[]}})
        useEffect(()=>{request(url, body, 'POST', null)
            .then(token=>setToken(token.data.token))
            .then(()=>{localStorage.token=token})/*
            request('http://tickets.сделай.site/user', null, 'GET', null)
                .then(custom=>setCustom(custom))
            request('http://tickets.сделай.site/user/booking', null, 'GET', null)
                .then(booking=>setBooking(booking))*/
        }, [])

    return (
        <div>
            <Header/>
            <main>
                <div id={'error'} className={'error'}/>
                <Profile user={custom} concerts={booking} key={1}/>
            </main>
            <Footer/>
        </div>

    );
};

export default Profile_page;