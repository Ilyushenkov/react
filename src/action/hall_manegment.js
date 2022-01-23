import {render} from "react-dom";
import Hall from "../components/hall";


function hall_manegment() {

    render([<Hall/>], document.getElementsByClassName('screen')[5])
   let screen=document.getElementsByClassName('screen')[5]

    screen.style.display='flex'

}
export  default hall_manegment