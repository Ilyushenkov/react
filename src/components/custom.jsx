import React from 'react';
let guests_list=[1, 0, 0, 0, 0, 0, 0, 0]
const Custom = (props) => {
   switch (props){
        case 0:
               return (
                    <div className={'custom'} style={{display:'flex'}}>

                        <div className="color_blue row_item">Имя:</div>
                        <input type="text" className="test-5-name row_item" required />
                        <div className="color_blue row_item">Фамилия:</div>
                        <input type="text" className="test-5-last row_item" required/>
                        <div className="color_blue row_item">Телефон:</div>
                        <input type="tel" className="test-5-dob row_item" required/>
                        <div className="color_blue row_item">Номер документа:</div>
                        <input type="text" className="test-5-doc row_item" required/>
                        <input type={'button'} className="test-5-add button" value="Добавить покупателя" onClick={()=>{
                            document.getElementsByClassName('custom')[props+1].style.display = 'flex'
                            guests_list[props+1]=1}}/>
                    </div>)

        case 7: return (
            <div className={'custom'}>
                <div className="test-5-remove" onClick={()=> {
                    document.getElementsByClassName('custom')[props].style.display = 'none'
                    guests_list[props]=0}}>&#10006;</div>
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
            guests_list[props]=0; console.log(guests_list)}}>&#10006;</div>
            <div className="color_blue row_item">Имя:</div>
            <input type="text" className="test-5-name row_item" required/>
            <div className="color_blue row_item">Фамилия:</div>
            <input type="text" className="test-5-last row_item" required/>
            <div className="color_blue row_item">Телефон:</div>
            <input type="tel" className="test-5-dob row_item" required/>
            <div className="color_blue row_item">Номер документа:</div>
            <input type="text" className="test-5-doc row_item" required/>
            <input type={'button'} className="test-5-add button" value="Добавить покупателя" onClick={()=>{
                document.getElementsByClassName('custom')[props+1].style.display = 'flex'
                guests_list[props+1]=1; console.log(guests_list)}}/>
        </div>
    );
};

export default Custom;