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
    let code=order_save(body)

    async function order_save(body){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+localStorage.token);

        let result=await request('http://tickets.сделай.site/api/order', body, 'POST', null)
            .then( (result)=>{
                request('http://tickets.сделай.site/api/order/'+result.data.code, null, 'GET', 4)
            })


          }
}


export default order_manegment

