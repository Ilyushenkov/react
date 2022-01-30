import React from 'react';

const Registr = () => {

    return (
        <div>
            <section>
                <h1>Регистрация</h1>
                <p className="color_red">Введите свои регистрационные данные</p>
                <form action="" method="GET">
                    <fieldset className="row_align color_white">
                        <label htmlFor="name" className="row_item">Имя:</label>
                        <input type="text" className="test-2-name row_item" name="name" id="name"/>
                            <label htmlFor="last" className="row_item">Фамилия:</label>
                            <input type="text" className="test-2-last row_item" name="last" id="last"/>
                                <label htmlFor="doc" className="row_item">Номер документа:</label>
                                <input type="text" className="test-2-doc row_item" name="doc" id="doc"/>
                                    <label htmlFor="tel" className="row_item">Телефон:</label>
                                    <input type="tel" className="test-3-num row_item" name="tel" id="tel"/>
                                        <label htmlFor="pass" className="row_item">Пароль:</label>
                                        <input type="password" className="test-2-pass row_item" name="pass" id="pass"/>
                                            <label htmlFor="pass2" className="row_item">Повторите пароль:</label>
                                            <input type="password" className="test-2-pass2 row_item" name="pass2"
                                                   id="pass2"/>
                    </fieldset>
                    <div className="row_align">
                        <input type="submit" className="test-2-btn button" value="Зарегистрироваться"/>
                            <input type="reset" className="button" value="Сбросить"/>
                    </div>
                </form>

            </section>
        </div>
    );
};

export default Registr;