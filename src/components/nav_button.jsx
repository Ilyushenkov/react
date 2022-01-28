import React from 'react';

const NavButton = (props) => {

    return (

            <input type={'button'} className={'button'} value={props.value} onClick={props.onclick}/>

    );
};

export default NavButton;