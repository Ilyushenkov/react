import request from "./request";
import {render} from "react-dom";
import close_screen from "./close_screen";
import Profile from "../components/profile";

async function get_user(user_data) {

    let body=JSON.stringify(user_data)
    let url='http://tickets.сделай.site/api/login'
    let response=await request(url, body, 'POST', null)
    let result=await response
    localStorage.token=result.data.token
    url='http://tickets.сделай.site/user'
    response=await request(url, null, 'GET', null)
    let user=await response
    url='http://tickets.сделай.site/user/booking'
    response=await request(url, null, 'GET', null)
    let concerts=await response
    close_screen()
    render([<Profile user={user} concerts={concerts}/>], document.getElementsByClassName('screen')[7])
    document.getElementsByClassName('screen')[7].style.display='flex'
}
export default get_user