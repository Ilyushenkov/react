import {render} from "react-dom";
import Choose_seats from "../components/choose_seats";
import nav_button from "./nav_button";

function sel_seats(data) {
    document.getElementsByClassName('screen')[3].style.display='none'
    document.getElementsByClassName('screen')[4].style.display='flex'
    render([<Choose_seats data={data}/>], document.getElementsByClassName('screen')[4])
    nav_button(4)
}
export default sel_seats;