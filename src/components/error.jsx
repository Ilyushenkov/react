import React from 'react';

const Error = (props) => {
    let error=document.getElementById('error');
    error.style.display='block';
   let message=''

    for (var key in props.message.error.error) {
        message+=`${key}: ${props.message.error.error[key]}<br/>`;
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