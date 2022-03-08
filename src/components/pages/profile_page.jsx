import React, {useEffect, useState} from 'react';
import request from "../../action/request";
import Profile from "../profile";
import Header from "../header";
import Footer from "../footer";


const Profile_page = () => {

        let user_data=global.user
        let body=JSON.stringify(user_data)
        let url='http://tickets.сделай.site/api/login'
        localStorage.token=null
        let [token, setToken]=useState(null)
       /* let [custom, setCustom]=useState({first_name:'', last_name:'', phone:'', document_number:''})
        let [booking, setBooking]=useState({data:{items:[]}})*/
        useEffect(()=>{
try {
    request(url, body, 'POST', null)
        .then(token => {setToken(token.data.token)})

}
           catch (e) {
               
           }







/*


                fetch('http://tickets.сделай.site/user/booking', {method:'GET'})
                .then(booking=>setBooking(booking))*/
        }, [])

    return (
        <div>
            <Header/>
            <main>
                <div id={'error'} className={'error'}/>
                 <Profile key={new Date()} token={token}/>

            </main>
            <Footer/>
        </div>

    );
};

export default Profile_page;