import React from 'react';


const ConcertData = (props) => {
    return (
        <div className="border_white row_align">
            <p className="color_blue row_item">Номер консерта:</p>
            <p className="test-4-fn row_item color_white">{props.data.ticket_id}</p>
            <p className="color_blue row_item">Название концерта:</p>
            <p className="test-4-at row_item color_white">{props.data.name_concert}</p>
            <p className="color_blue row_item">Дата концерта:</p>
            <p className="test-4-at row_item color_white">{props.data.date_concert}</p>
            <p className="color_blue row_item">Время начала концерта:</p>
            <p className="test-4-dd row_item color_white">{props.data.time_start}</p>
            <p className="color_blue row_item">Время окончания концерта:</p>
            <p className="test-4-dt row_item color_white">{props.data.time_finish}</p>
            <p className="color_blue row_item">Место проведения концерта:</p>
            <p className="test-4-dt row_item color_white">{props.data.venue}</p>
        </div>
    );
};

export default ConcertData;