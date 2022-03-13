import request from "./request";
import get_user from "./get_user";



async function registr_req(user) {
    let body=JSON.stringify(user)
    let url='http://tickets.сделай.site/api/register'
    let response=await request(url, body, 'POST', null)
    let result=await response
    if (result.status!==204) return
    let user_data={'phone':user.phone, 'password':user.password}
    await get_user(user_data)


}

export default registr_req