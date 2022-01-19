import React from 'react';
import request from "../action/request";
const Custom = (props) => {

   switch (props){
        case 0:
               return (
                    <div className={'custom'} style={{display:'flex'}}>

                        <div className="color_blue row_item">Имя:</div>
                        <input type="text" className="test-5-name row_item" required />
                        <input type="text" className="test-5-last row_item" required/>
                        <div className="color_blue row_item">Телефон:</div>
                        <input type="tel" className="test-5-dob row_item" required/>
                        <div className="color_blue row_item">Номер документа:</div>
                        <input type="text" className="test-5-doc row_item" required/>
                        <input type={'button'} className="test-5-add button" value="Добавить покупателя" onClick={()=>{
                            document.getElementsByClassName('custom')[props+1].style.display = 'flex'}}/>
                    </div>)

        case 7: return (
            <div className={'custom'}>
                <div className="test-5-remove" onClick={()=> {
                    document.getElementsByClassName('custom')[props].style.display = 'none'
                }}>&#10006;</div>
                <div className="color_blue row_item">Имя:</div>
                <input type="text" className="test-5-name row_item" required/>
                <div className="color_blue row_item">Фамилия:</div>
                <input type="text" className="test-5-last row_item" required/>
                <div className="color_blue row_item">Телефон:</div>
                <input type="tel" className="test-5-dob row_item" required/>
                <div className="color_blue row_item">Номер документа:</div>
                <input type="text" className="test-5-doc row_item" required/>

            </div>
        )
    }

    return (
        <div className={'custom'}>
            <div className="test-5-remove" onClick={()=> {
                document.getElementsByClassName('custom')[props].style.display = 'none'
            }}>&#10006;</div>
            <div className="color_blue row_item">Имя:</div>
            <input type="text" className="test-5-name row_item" required/>
            <div className="color_blue row_item">Фамилия:</div>
            <input type="text" className="test-5-last row_item" required/>
            <div className="color_blue row_item">Телефон:</div>
            <input type="tel" className="test-5-dob row_item" required/>
            <div className="color_blue row_item">Номер документа:</div>
            <input type="text" className="test-5-doc row_item" required/>
            <input type={'button'} className="test-5-add button" value="Добавить покупателя" onClick={()=>{
                document.getElementsByClassName('custom')[props+1].style.display = 'flex'}}/>
        </div>
    );
};

export default Custom;