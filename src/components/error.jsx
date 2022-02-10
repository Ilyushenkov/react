import React from 'react';

const Error = (props) => {
    let error=document.getElementById('error')
    error.style.display='flex'
   let message=''
    let list_error=null
    window.scrollTo(0,0)
    if ((props.message.error.error===undefined)) list_error=props.message.error; else list_error=props.message.error.error
    for (var key in list_error) {
        message+=`${key}: ${list_error[key]}<br/>`
    }
    return (
        <div>

                <h2>Произошла ошибка</h2>
                <p id="title_error">{props.title}</p>
                <p id="message" dangerouslySetInnerHTML={{__html:message}}/>

        </div>
    );
};

export default Error;