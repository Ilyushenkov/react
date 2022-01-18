

function custom_first(answer) {
       return (<div className={'custom'} style={{display:'flex'}}>

                <div className="color_blue row_item">Имя:</div>
                <input type="text" className="test-5-name row_item" value={answer.first_name} required/>
                <div className="color_blue row_item">Фамилия:</div>
                <input type="text" className="test-5-last row_item" required value={answer.last_name}/>
                <div className="color_blue row_item">Телефон:</div>
                <input type="tel" className="test-5-dob row_item" required value={answer.phone}/>
                <div className="color_blue row_item">Номер документа:</div>
                <input type="text" className="test-5-doc row_item" required value={answer.document_number}/>
                <input type={'button'} className="test-5-add button" value="Добавить покупателя" onClick={()=>{
                        document.getElementsByClassName('custom')[1].style.display = 'flex'}}/>
        </div>)

        }



export default custom_first