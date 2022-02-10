import React from 'react';
import Concert_data from "./concert_data";
import exit from "../action/exit";


const Profile = (props) => {
    let i=0
    let concerts=props.concerts.data.items
    let data_concerts=concerts.map((value)=>{
        let date= new Date(value.tickets.date_concert)
        if (date<new Date()) {i++}
        else return <Concert_data data={value.tickets}/>
    })

    return (
        <div>
            <section>
                <h1>Личный кабинет</h1>
                <div className="colomn_align">
                    <p className="color_red">Данные регистрации</p>
                    <div className="row_align">
                        <p className="color_blue row_item">Имя:</p>
                        <p className="test-3-name color_white row_item">{props.user.first_name}</p>
                        <p className="color_blue row_item">Фамилия:</p>
                        <p className="test-3-last color_white row_item">{props.user.last_name}</p>
                        <p className="color_blue row_item">Количество посещенных концертов:</p>
                        <p className="test-3-num color_white row_item">{i}</p>

                    </div>
                    <input type="button" className="test-3-logout button" value="Выйти" onClick={()=>exit()}/>
                        <p className="color_red">Предстаящие концерты</p>
                        <div className="row_align" id="concert">
                            {data_concerts}
                        </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;