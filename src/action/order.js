import {render} from "react-dom";
import Order from "../components/Order";
import nav_button from "./nav_button";

function order(data) {
render([<Order data={data} key={0}/>], document.getElementsByClassName('screen')[2])
    nav_button(2)
}

export default order