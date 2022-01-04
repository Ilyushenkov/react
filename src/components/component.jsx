import React from 'react';
import {useState} from "react";
const Component = () => {
    let [likes, SetLikes]=useState(0);
    return (
        <div>
            <p className={"color_white"}>Количество лайков: {likes}</p>
            <button onClick={()=>SetLikes(++likes)} className={'button'}>Увеличение</button>
            <button onClick={()=>SetLikes(--likes)} className={'button'}>Уменьшение</button>
        </div>
    );
};

export default Component;