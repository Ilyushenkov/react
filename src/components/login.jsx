import React, {useState} from 'react';
import {Link} from "react-router-dom";





const Login = () => {
    const [user, setUser]=useState({phone:'', password:''})
    global.user=user
    localStorage.token=''


    return (
        <div className={'width100'}>
            <section>
                <h1>Вход в личный кабинет</h1>
                <p className="color_red">Введите регистрационные данные</p>
                <form method="GET" action="">
                    <fieldset className="row_align color_white">
                        <label htmlFor="tel" className="row_item">Введите ваше телефон</label>
                        <input type="tel" className="test-1-fpn row_item" required name="tel" id="tel"
                               onChange={(e)=>setUser({...user, phone: e.target.value})}/>
                            <label htmlFor="password" className="row_item">Введите пароль</label>
                            <input type="password" name="password" required className="test-1-fps row_item"
                                   id="password" onChange={(e)=>setUser({...user, password: e.target.value})}/>
                    </fieldset>

                    <div className="row_align">
                        <Link to={'/profile'}><input type="button" className="test-1-fbs button row_item" value="Войти"/></Link>

                    </div>
                </form>
            </section>

        </div>

    );
};

export default Login;