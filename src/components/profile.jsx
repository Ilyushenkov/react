import React from 'react';

const Profile = () => {
    return (
        <div>
            <section>
                <h1>Личный кабинет</h1>
                <div className="colomn_align">
                    <p className="color_red">Данные регистрации</p>
                    <div className="row_align">
                        <p className="color_blue row_item">Имя:</p>
                        <p className="test-3-name color_white row_item"></p>
                        <p className="color_blue row_item">Фамилия:</p>
                        <p className="test-3-last color_white row_item"></p>
                        <p className="color_blue row_item">Количество посещенных концертов:</p>
                        <p className="test-3-num color_white row_item"></p>

                    </div>
                    <input type="button" className="test-3-logout button" value="Выйти" onClick="exit()"/>
                        <p className="color_red">Предстаящие концерты</p>
                        <div className="row_align" id="concert">

                        </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;