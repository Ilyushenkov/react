import React, {useContext} from 'react';
import Custom_data from "./custom_data";

import '../action/number_seats'


const ChooseSeats = (props) => {


    let list_custom=props.data.guest.map((data, index)=> {

        return (

            <div className={'row_item'}>
                <Custom_data data={data} key={index}/>
            </div>
        )

    });
return (
    <section>
        <h1>Выбор мест для гостей</h1>
        <h3 className={'color_red'}>Список гостей:</h3>
        <div className={'row_align'} id={'mycustoms'}>
             {list_custom}
        </div>
    </section>
)


};

export default ChooseSeats;