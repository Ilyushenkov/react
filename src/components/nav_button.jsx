import React from 'react';

const NavButton = (props) => {
    console.log(props.onclick)
    return (
        <div>
            <input type={'button'} className={'button'} value={props.value} onClick={props.onclick}/>
        </div>
    );
};

export default NavButton;