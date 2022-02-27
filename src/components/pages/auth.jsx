import React from 'react';
import Header from "../header";
import Footer from "../footer";
import Login from "../login";

const Auth = () => {
    return (
        <div>
            <Header/>
            <main>
                <div id={'error'} className={'error'}></div>
                <Login/>
            </main>
            <Footer/>
        </div>
    );
};

export default Auth;