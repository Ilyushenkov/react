import React, {useState} from 'react';


const Concerts = (props) => {
let [sort, setSort]=useState('price')
   let sort_data=props.data

    switch (sort){
        case 'price': sort_data.sort((a, b)=>{
            let price1=a.props.data.price
            let price2=b.props.data.price
            return price1-price2} )
            break
        case 'date': sort_data.sort((a, b)=>{
            let date1=a.props.data.date_concert+' '+a.props.data.time_start
            let date2=b.props.data.date_concert+' '+b.props.data.time_start

            return new Date(date1)-new Date(date2)
        })
            break
    }
if(props.data.length===0){
    return (
        <div className={'width100'}>
            <section>
                <h1>Найденные концерты</h1>
                <h2 className={'error'} style={{display: 'flex', padding:'20px', justifyContent:'center'}} >Концерты не найдены</h2>
            </section>

        </div>
    )
}
console.log(sort_data)
    return (

        <div className={'width100'}>

            <section>

                <h1>Найденные концерты</h1>
                    <div className={'row_align border_white'}>
                        <p className={'row_item color_white'}>Цена от, руб: <input type={'number'}/></p>
                        <p className={'row_item color_white'}>Цена до, руб: <input type={'number'}/></p>
                        <p className={'row_item color_white'}>Выберите фильтр:
                            <select value={sort} style={{minWidth:'150px'}} onChange={(e)=>setSort(e.target.value)}>
                                <option value={'price'}>По цене</option>
                                <option  value={'date'}>По дате</option>
                            </select>
                        </p>
                    </div>


                <div className={'row_align'}>
                {sort_data}
                </div>
            </section>

        </div>
    );
};

export default Concerts;