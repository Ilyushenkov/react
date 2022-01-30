import close_screen from "./close_screen";
import {render} from "react-dom";
import Search from "../components/search";


function search(){

        close_screen()
        document.getElementsByClassName('screen')[0].style.display='flex'
        render([<Search key={12}/>], document.getElementsByClassName('screen')[0])

}
export default search