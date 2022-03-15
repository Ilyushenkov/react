//Кнопка назад
import React from 'react';

const Back = () => {

    return (
        <div style={{textAlign: "center"}}>
            <input className={'button'} style={{textAlign: "center"}} value={'<<Назад'} onClick={()=>window.history.go(-1)}/>
        </div>
    );
};

export default Back;