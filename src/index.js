import React from 'react';
import ReactDOM, {render} from 'react-dom';
import App from "./App";
import NavButton from "./components/nav_button";




ReactDOM.render(
<App/>,
  document.getElementsByClassName('screen')[0]
);
render([<NavButton value={'Зарегистрироваться'} key={6} className={'row_item'}/>, <NavButton value={'Войти'} key={77} className={'row_item'}/>],
    document.getElementById('top_menu'))



