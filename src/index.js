import React from 'react';
import ReactDOM, {render} from 'react-dom';
import App from "./App";
import registr from "./action/registr";
import login from "./action/login";
import search from "./action/search";




ReactDOM.render(
<App/>,

  document.getElementsByClassName('screen')[0]
);
render([<input type={'button'} value={'Зарегистрироваться'} key={6} className={'row_item'}
    onClick={()=>registr()} className={'button'}/>,
        <input type={'button'} value={'Войти'} key={77} className={'row_item'}
        onClick={()=>login()} className={'button'}/>,
            <input type={'button'} value={'Поиск концертов'} key={76} className={'row_item'}
                   onClick={()=>search()} className={'button'}/>],
    document.getElementById('top_menu'))



