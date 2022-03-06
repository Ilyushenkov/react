import {render} from "react-dom";
import Hall from "../components/hall";


function hall_manegment(setSeat) {

    render([<Hall setSeat={setSeat} key={4}/>], document.getElementById('screen2'))
   document.getElementById('screen2').style.display='flex'


}
export  default hall_manegment