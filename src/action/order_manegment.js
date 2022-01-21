import request from "./request";

function order_manegment(props) {
    let guest=[]

global.guest_list.map((data, index)=>{
    if (data!==0){
    let first_name=document.getElementsByClassName('test-5-name')[index].value
    let last_name=document.getElementsByClassName('test-5-last')[index].value
    let birth_date= document.getElementsByClassName('test-5-dob')[index].value
    let document_number=document.getElementsByClassName('test-5-doc')[index].value
     guest.push({first_name, last_name, birth_date, document_number})
    return}

})

    let body=JSON.stringify({'concert':
    {'id': props.data.id,     'date':props.data.date_concert},
    'guest':guest
    })
    order_save(body)
    async function order_save(body){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer CCMonov2e9QKy0Wsm0q2IbJWTCqy7o3F4sEB54nwwJjbY6L1w2PUJ2gImV1IGDGuhFhmizCPxj6v0lkj");

        let result=await request('http://tickets.сделай.site/api/order', body, 'POST', null)
            .then((result)=>console.log(result))
        let a=2



    }



}


export default order_manegment

