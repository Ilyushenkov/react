import Concert from "../components/concert";
import {render} from "react-dom";
import Concerts from "../components/concerts";
import NavButton from "../components/nav_button";

function concert_process(answer) {

    let concerts=answer.data.concert
    let list_concert=concerts.map((concerts, index)=><Concert data={concerts} number={index} key={index}/>)
    render([<Concerts data={list_concert} key={0}/>], document.getElementsByClassName('screen')[1])
    document.getElementsByClassName('screen')[1].style.display='flex'
}

export default concert_process