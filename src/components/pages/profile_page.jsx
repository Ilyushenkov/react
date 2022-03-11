import React, {useEffect, useState} from 'react';
import request from "../../action/request";
import Profile from "../profile";
import Header from "../header";
import Footer from "../footer";
import ListConcerts from "../list_concerts";


const Profile_page = () => {

        let user_data=global.user
        let body=JSON.stringify(user_data)
        let url='http://tickets.сделай.site/api/login'
        localStorage.token=null
        let [token, setToken]=useState(null)

        useEffect(()=>{
try {
    request(url, body, 'POST', null)
        .then(token => {setToken(token.data.token)})

}
           catch (e) {
               
           }



        }, [token])

    return (
        <div>
            <Header/>
            <main>
            <section>
                <div id={'error'} className={'error'} key={21}/>
                 <Profile token={token}/>
                <ListConcerts key={23} token={token}/>

            </section>
            </main>
            <Footer/>
        </div>

    );
};

export default Profile_page;