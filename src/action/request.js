import {render} from "react-dom";
import React, {useRef} from "react";
import Error from "../components/error";
import concert_process from "./concert_process";
import order from "./order";
import search from "./search";
import nav_button from "./nav_button";


async function request(url, body, method, screen) {
console.log(url)
            let request_options={method: method,body:body}
            let result=await fetch(url,request_options)
            let answer=await result.json()
            let status=result.status

    let Functions=[search, concert_process, order]
       switch (status){
       case 200:
           document.getElementById('error').style.display='none'
           for (let i=0; i<document.getElementsByClassName('screen').length; i++) {
               document.getElementsByClassName('screen')[i].style.display = 'none'
           }
        Functions[screen](answer)
           nav_button(screen)
               return
       case 422:
           return render([<Error title={'Ошибка валидации'} message={answer}/>], document.getElementById('error'))

   }


}
export default request