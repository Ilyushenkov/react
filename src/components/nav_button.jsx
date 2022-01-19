import React from 'react';

const NavButton = (props) => {

    return (
        <div>
            <input type={'button'} className={'button'} value={props.value} onClick={props.onclick}/>
        </div>
    );
};

export default NavButton;