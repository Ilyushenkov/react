import {render} from "react-dom";
import Hall from "../components/hall";


function hall_manegment(Number_seat) {

    render([<Hall Number_seat={Number_seat} key={4}/>], document.getElementsByClassName('screen')[5])
   let screen=document.getElementsByClassName('screen')[5]

    screen.style.display='flex'

}
export  default hall_manegment