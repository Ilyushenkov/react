import request from "./request";

function order_manegment(props) {
    let guests=[]

global.guest_list.map((data, index)=>{
    if (data!==0){
    let first_name=document.getElementsByClassName('test-5-name')[index].value
    let last_name=document.getElementsByClassName('test-5-last')[index].value
    let phone= document.getElementsByClassName('test-5-dob')[index].value
    let document_number=document.getElementsByClassName('test-5-doc')[index].value
     guests.push({first_name:{first_name}, last_name:{last_name}, phone:{phone}, document_number:{document_number}})
    return}
props.data.id=4
})
let body= JSON.stringify({concert:
    {id:props.data.id,     concert:props.data.name_concert},
    guest:[guests]
})
    order_save(body)
    async function order_save(body){
        let [result, status]=await request('http://tickets.сделай.site/api/order', body, 'POST', null)
        await console.log(result)
    }



}


export default order_manegment

