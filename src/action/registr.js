import close_screen from "./close_screen";
import {render} from "react-dom";
import Registr from "../components/registr";

function registr() {
    close_screen()
    document.getElementsByClassName('screen')[5].style.display='flex'
    render([<Registr key={10}/>], document.getElementsByClassName('screen')[5])
}
export default registr