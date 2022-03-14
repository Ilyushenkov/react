import React, {useEffect, useState} from 'react';

import {Link} from "react-router-dom";

const Profile = (props) => {


    localStorage.token=props.token
    let [custom, setCustom] = useState({first_name: '', last_name: '', phone: '', document_number: ''})
    useEffect(()=> {
try {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+props.token);
    myHeaders.append("Content-Type", "application/json");
    let request_options={method: 'GET',  headers:myHeaders}
    fetch('http://tickets.сделай.site/user', request_options)
        .then(custom => custom.json())
        .then(custom => setCustom(custom))
}
catch  {
    setCustom({first_name: '', last_name: '', phone: '', document_number: ''})
}



    }, [props.token])

    return (
        <div>

                <h1>Личный кабинет</h1>
                <div className="colomn_align">
                    <p className="color_red">Данные регистрации</p>
                    <div className="row_align">
                        <p className="color_blue row_item">Имя:</p>
                        <p className="test-3-name color_white row_item">{custom.first_name}</p>
                        <p className="color_blue row_item">Фамилия:</p>
                        <p className="test-3-last color_white row_item">{custom.last_name}</p>
                        <p className={'color_blue row_item'}>Номер телефона</p>
                        <p className={'color_white row_item'}>{custom.phone}</p>
                        <p className={'color_blue row_item'}>Номер документа</p>
                        <p className={'color_white row_item'}>{custom.document_number}</p>

                    </div>
                    <Link to={'/'}><input type="button" className="test-3-logout button" value="Выйти" onClick={()=>{localStorage.token=''}}/></Link>


                </div>

        </div>
    );
};

export default Profile;