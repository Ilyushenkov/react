import request from "./request";

async function get_user(user_data) {

    let body=JSON.stringify(user_data)
    let url='http://tickets.сделай.site/api/login'
    let response=await request(url, body, 'POST', null)
    let result=await response
    localStorage.token=result.data.token
    url=''
    let concerts='tickets.сделай.site/user/booking'

}
export default get_user