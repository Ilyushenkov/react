import React from 'react';

const CustomData = (props) => {
    return (

            <div className={'custom row_align border_white'} style={{display:'flex'}}>

                <div className="color_blue row_item">Имя:</div>
                <div className="test-5-name row_item color_white">{props.data.first_name}</div>
                <div className="color_blue row_item">Фамилия:</div>
                <div className="test-5-name row_item color_white">{props.data.last_name}</div>
                <div className="color_blue row_item">Дата Рождения:</div>
                <div className="test-5-name row_item color_white">{props.data.birth_date}</div>
                <div className="color_blue row_item">Номер документа:</div>
                <div className="test-5-name row_item color_white">{props.data.document_number}</div>
            </div>

    );
};

export default CustomData;