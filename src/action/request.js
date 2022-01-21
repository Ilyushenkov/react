import {render} from "react-dom";
import React, {useRef} from "react";
import Error from "../components/error";
import concert_process from "./concert_process";
import order from "./order";
import search from "./search";
import nav_button from "./nav_button";

async function request(url, body, method, screen) {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+localStorage.token);
    myHeaders.append("Content-Type", "application/json");
            let request_options={method: method, body:body, headers:myHeaders}
            let result=await fetch(url,request_options)
            let answer=await result.json()
            let status=result.status

    let Functions=[search, concert_process, order]
       switch (status){
       case 200:
           if (screen===null){return (answer)}
           document.getElementById('error').style.display='none'
           for (let i=0; i<document.getElementsByClassName('screen').length; i++) {
               document.getElementsByClassName('screen')[i].style.display = 'none'
           }

        Functions[screen](answer)
           nav_button(screen)
               return
       case 422:
           return render([<Error title={'Ошибка валидации'} message={answer}/>], document.getElementById('error'))
           case 401:
               if (screen===null) return
               return render([<Error title={'Ошибка авторизации'} message={answer}/>], document.getElementById('error'))


   }


}
export default request