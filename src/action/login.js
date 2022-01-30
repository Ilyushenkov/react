import close_screen from "./close_screen";
import {render} from "react-dom";
import Login from "../components/login";

function login(){
    close_screen()
    document.getElementsByClassName('screen')[6].style.display='flex'
    render([<Login key={11}/>], document.getElementsByClassName('screen')[6])
}

export default login