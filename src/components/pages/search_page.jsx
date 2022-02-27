import React from 'react';
import Header from "../header";
import Search from "../search";
import Footer from "../footer";

const SearchPage = () => {
    return (
        <div>
            <Header/>
            <main>
                <div id={'error'} className={'error'}></div>
                <Search/>
            </main>
            <Footer/>
        </div>
    );
};

export default SearchPage;