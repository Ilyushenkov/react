import Concert from "../components/concert";
import {render} from "react-dom";
import Concerts from "../components/concerts";

function concert_process(answer) {

    let concerts=answer.data.concert
    let list_concert=concerts.map((concerts, index)=><Concert data={concerts} number={index}/>)
    render(<Concerts data={list_concert}/>, document.getElementsByClassName('screen')[1])
    document.getElementsByClassName('screen')[1].style.display='flex'
}

export default concert_process