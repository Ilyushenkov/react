import {render} from "react-dom";
import NavButton from "../components/nav_button";

function nav_button(screen) {


    function click_btn1(screen){
        document.getElementsByClassName('screen')[screen].style.display='flex'
        document.getElementsByClassName('screen')[screen+1].style.display='none'
        if (screen===0) {
            document.getElementById('navigation').style.display='none'
            return
        }
    }

    function click_btn2(screen){
        document.getElementsByClassName('screen')[screen].style.display='flex'
        document.getElementsByClassName('screen')[screen-1].style.display='none'

    }

    render([<NavButton onclick={()=>click_btn1(screen-1)} value={'<<Назад'}/>, <NavButton onclick={()=>click_btn2(screen+1)} value={'Вперед>>'}/>],
        document.getElementById('navigation'))
    document.getElementById('navigation').style.display='flex'


}
export default nav_button