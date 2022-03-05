import React, {useState} from 'react';

const Custom = (props) => {


    let [user, setUser]=useState({})

    let customs=props.custom

    props.set_custom([...customs, user])
    return (
        <div className={'custom'}>

            <div className="color_blue row_item">Имя:</div>
            <input type="text" className="test-5-name row_item" required onChange={(e)=>setUser({...user, first_name: e.target.value})}/>
            <div className="color_blue row_item">Фамилия:</div>
            <input type="text" className="test-5-last row_item" required onChange={(e)=>setUser({...user, last_name: e.target.value})}/>
            <div className="color_blue row_item">Дата рождения:</div>
            <input type="date" className="test-5-dob row_item" required onChange={(e)=>setUser({...user, birth_date: e.target.value})}/>
            <div className="color_blue row_item">Номер документа:</div>
            <input type="text" className="test-5-doc row_item" required onChange={(e)=>setUser({...user, document_number: e.target.value})}/>

        </div>
    );
};

export default Custom;