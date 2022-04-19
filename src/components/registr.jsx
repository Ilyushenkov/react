import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import request from "../action/request";


const Registr = () => {
    let [user, setUser]=useState({'first_name':'', 'last_name':'', 'phone':'', 'document_number':'', 'password':''})

    let history=useNavigate()

    async function registr_req(user) {
        let body=JSON.stringify(user)
        let url='http://tickets.сделай.site/api/register'
        let response=await request(url, body, 'POST')
        let result=await response
        if (result.status!==204) return
        let user_data={phone:user.phone, password:user.password}
        global.user=user_data




        body=JSON.stringify(user_data)
        url='http://tickets.сделай.site/api/login'
        response=await  request(url, body, 'POST')
        let token=await response.data.token
        localStorage.token=token

        history('/profile')

    }

    return (
        <div>
            <section>
                <h1>Регистрация</h1>
                <p className="color_red">Введите свои регистрационные данные</p>
                <form action="" method="GET">
                    <fieldset className="row_align color_white">
                        <label htmlFor="name" className="row_item">Имя:</label>
                        <input type="text" className="test-2-name row_item" name="name" id="name" onChange={(e)=>setUser({...user, first_name:e.target.value})}/>
                            <label htmlFor="last" className="row_item">Фамилия:</label>
                            <input type="text" className="test-2-last row_item" name="last" id="last" onChange={(e)=>setUser({...user, last_name:e.target.value})}/>
                                <label htmlFor="doc" className="row_item">Номер документа:</label>
                                <input type="text" className="test-2-doc row_item" name="doc" id="doc" onChange={(e)=>setUser({...user, document_number:e.target.value})}/>
                                    <label htmlFor="tel" className="row_item">Телефон:</label>
                                    <input type="tel" className="test-3-num row_item" name="tel" id="tel" onChange={(e)=>setUser({...user, phone:e.target.value})}/>
                                        <label htmlFor="pass" className="row_item">Пароль:</label>
                                        <input type="password" className="test-2-pass row_item" name="pass" id="pass" onChange={(e)=>setUser({...user, password:e.target.value})}/>

                    </fieldset>
                    <div className="row_align">
                        <input type="button" className="test-2-btn button" value="Зарегистрироваться" onClick={()=>registr_req(user)}/>
                            <input type="reset" className="button" value="Сбросить"/>
                    </div>
                </form>

            </section>
        </div>
    );
};

export default Registr;