import request from "./request";

const Reserve_seat=async (props)=>{

   //let history=useNavigate()
   let url='http://tickets.сделай.site/api/order/'+props.data.data.code+'/seat'
   let response=null
   let result=null
   for(let i=0;i<props.data.guest.length;i++){
      let body=JSON.stringify({guest_id:props.data.guest[i].id, seat:props.data.guest[i].place_from})
      response=await request(url, body, 'PATCH', null)
          result=await response
      if (response===null) return
      console.log(result)
   }
 window.location.href=`/order_management/${props.data.data.code}`


}
export default Reserve_seat