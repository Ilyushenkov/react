import React from 'react';
import '../action/number_seats'
import Custom_select_seat from "./Custom_select_seat";
import reserve_seat from "../action/reserv_seat";


const ChooseSeats = (props) => {

    let list_custom=props.data.guest.map((data, index)=> {

        return (

            <div className={'row_item'}>
                <Custom_select_seat data={data} key={index}/>
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
        <input type={'button'} className={'button'} onClick={()=>reserve_seat(props)} value='Подтвердить'/>
    </section>
)


};

export default ChooseSeats;