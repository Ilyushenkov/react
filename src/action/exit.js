import ReactDOM from "react-dom";
import App from "../App";
import close_screen from "./close_screen";

function exit() {
    localStorage.token=''
    close_screen()
    document.getElementsByClassName('screen')[0].style.display='flex'
    ReactDOM.render(
        <App/>,

        document.getElementsByClassName('screen')[0]
    );
}
export default exit