import {render} from "react-dom";
import NavButton from "../components/nav_button";
function nav_button(screen) {
    let title1='<<Вернуться'
    let title2='Продолжить>>'

    switch (screen){
        case 0: document.getElementById('navigation').style.display='none'; return
        case 1: rend(screen); document.getElementById('navigation').children[1].style.display='none'; return;
        case 2:
        case 3:
        case 4: rend(screen); document.getElementById('navigation').children[1].style.display='none';
            document.getElementsByClassName('screen')[screen-1].style.display='none'; return;

    }


    function click_btn1(screen){
        document.getElementsByClassName('screen')[screen].style.display='flex'
        document.getElementsByClassName('screen')[screen+1].style.display='none'
        rend(screen)

    }

    function click_btn2(screen){
        document.getElementsByClassName('screen')[screen].style.display='flex'
        document.getElementsByClassName('screen')[screen-1].style.display='none'
    rend(screen)
    }

    function rend(screen){
        render([<NavButton onclick={()=>click_btn1(screen-1)} value={title1} key={0}/>, <NavButton onclick={()=>click_btn2(screen+1)} value={title2} key={1}/>],
            document.getElementById('navigation'))
        document.getElementById('navigation').style.display='flex'
        document.getElementsByClassName('screen')[screen].style.display='flex'
        if (screen===0){document.getElementById('navigation').style.display='none'}


    }
}
export default nav_button