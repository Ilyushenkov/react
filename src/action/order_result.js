import Order_data from "../components/order_data";
import {render} from "react-dom";
import Custom from "../components/custom";

function Order_result(props) {

render([<Order_data data={props} key={0}/>], document.getElementsByClassName('screen')[3])

}


export default Order_result