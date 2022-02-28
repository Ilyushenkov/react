import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="row_align">
                <div className="color_red row_item">
                    <Link to={'/'}><img src="/../../image/logo.jpeg" alt="WhiteTickets" className="test-0-logo"/></Link>
                </div>
                <div className="color_red row_item"><p className="center">Обратите внимание, билеты на эти мероприятия
                    заканчиваются!</p>
                    <div id="stars" className="row_align_nowrap">
                        <img src="/../../image/maruf.jpg" alt="Маруф" className="test-1-logo" id="maruv"/>
                            <img src="/../../image/leps.jpg" alt="Лепс" className="test-1-logo" id="leps"/>
                                <img src="/../../image/loboda.png" alt="Лобода" className="test-1-logo" id="loboda"/>
                    </div>
                </div>
            </div>

            <div className="row_align" id="top_menu">
                <Link to={'/register'}><input type={'button'} value={'Зарегистрироваться'} key={6} className={'row_item button'}/></Link>
                <Link to={'/login'}><input type={'button'} value={'Войти'} key={77} className={'row_item button'}/></Link>
                <Link to={'/'}><input type={'button'} value={'Поиск концертов'} key={76} className={'row_item button'}/></Link>

            </div>
        </header>
    );
};

export default Header;