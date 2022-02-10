import React, {useState} from 'react';
import registr_req from "../action/registr_req";

const Registr = () => {
    let [first_name, setFirst_name]=useState()
    let [last_name, setLast_name]=useState()
    let [document_number, setDocument_number]=useState()
    let [phone, setPhone]=useState()
    let [password, setPassword]=useState()
    let user={'first_name':first_name, 'last_name':last_name, 'phone':phone, 'document_number':document_number, 'password':password}
    return (
        <div>
            <section>
                <h1>Регистрация</h1>
                <p className="color_red">Введите свои регистрационные данные</p>
                <form action="" method="GET">
                    <fieldset className="row_align color_white">
                        <label htmlFor="name" className="row_item">Имя:</label>
                        <input type="text" className="test-2-name row_item" name="name" id="name" onChange={(e)=>setFirst_name(e.target.value)}/>
                            <label htmlFor="last" className="row_item">Фамилия:</label>
                            <input type="text" className="test-2-last row_item" name="last" id="last" onChange={(e)=>setLast_name(e.target.value)}/>
                                <label htmlFor="doc" className="row_item">Номер документа:</label>
                                <input type="text" className="test-2-doc row_item" name="doc" id="doc" onChange={(e)=>setDocument_number(e.target.value)}/>
                                    <label htmlFor="tel" className="row_item">Телефон:</label>
                                    <input type="tel" className="test-3-num row_item" name="tel" id="tel" onChange={(e)=>setPhone(e.target.value)}/>
                                        <label htmlFor="pass" className="row_item">Пароль:</label>
                                        <input type="password" className="test-2-pass row_item" name="pass" id="pass" onChange={(e)=>setPassword(e.target.value)}/>

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