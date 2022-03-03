import React, {createContext, useContext} from 'react';
const Custom = (props) => {
/*
    function add(item){
        document.getElementsByClassName('custom')[item+1].style.display = 'flex'
        global.guest_list[item+1]=1


    }

    function del(item){
        document.getElementsByClassName('custom')[item].style.display = 'none'
        global.guest_list[item]=0

    }

   switch (props.number){
        case 0:

               return (
                    <div className={'custom'} style={{display:'flex'}}>

                        <div className="color_blue row_item">Имя:</div>
                        <input type="text" className="test-5-name row_item" required />
                        <div className="color_blue row_item">Фамилия:</div>
                        <input type="text" className="test-5-last row_item" required/>
                        <div className="color_blue row_item">Дата Рождения:</div>
                        <input type="date" className="test-5-dob row_item" required/>
                        <div className="color_blue row_item">Номер документа:</div>
                        <input type="text" className="test-5-doc row_item" required/>
                        <input type={'button'} className="test-5-add button" value="Добавить покупателя" onClick={()=>add(props.number)}/>
                    </div>)

        case 7: return (
            <div className={'custom'}>
                <div className="test-5-remove" onClick={()=>del(props.number)}>&#10006;</div>
                <div className="color_blue row_item">Имя:</div>
                <input type="text" className="test-5-name row_item" required/>
                <div className="color_blue row_item">Фамилия:</div>
                <input type="text" className="test-5-last row_item" required/>
                <div className="color_blue row_item">Дата рождения:</div>
                <input type="date" className="test-5-dob row_item" required/>
                <div className="color_blue row_item">Номер документа:</div>
                <input type="text" className="test-5-doc row_item" required/>

            </div>
        )
    }
    <input type={'button'} className="test-5-add button" value="Добавить покупателя" onClick={()=>add(props.number)}/>
     <div className="test-5-remove" onClick={()=>del(props.number)}>&#10006;</div>
*/
    return (
        <div className={'custom'}>

            <div className="color_blue row_item">Имя:</div>
            <input type="text" className="test-5-name row_item" required/>
            <div className="color_blue row_item">Фамилия:</div>
            <input type="text" className="test-5-last row_item" required/>
            <div className="color_blue row_item">Дата рождения:</div>
            <input type="date" className="test-5-dob row_item" required/>
            <div className="color_blue row_item">Номер документа:</div>
            <input type="text" className="test-5-doc row_item" required/>

        </div>
    );
};

export default Custom;