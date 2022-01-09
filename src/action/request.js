import {render} from "react-dom";
import Error from "../components/error";

async function request(url, body,method, object1, object2) {

    switch (method) {
        case 'GET':
            url+=body
            let result=await fetch(url,{method:method})
            var answer=result.json()
            var status=result.status
            break
    }
   switch (status){
       case 200:
           return render([object1(answer)], document.getElementById('root'))
       case 422:
           return render([object2(answer), Error], document.getElementById('root'))

   }


}
export default request