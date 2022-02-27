import {render} from "react-dom";
import React, {useRef} from "react";
import Error from "../components/error";
import {Link} from "react-router-dom";
import concert_process from "./concert_process";
import order from "./order";
import search from "./search";
import nav_button from "./nav_button";
import Order_result from "./order_result";
import close_screen from "./close_screen";
import ConcertsPage from "../components/pages/concerts_page";

async function request(url, body, method, screen) {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+localStorage.token);
    myHeaders.append("Content-Type", "application/json");
            let request_options={method: method, body:body, headers:myHeaders}
            let result=await fetch(url,request_options)
            let answer=''
            try {
                answer=await result.json()
            } catch (e) {
                answer=await result
            }

            let status=result.status

    let Functions=[search, ConcertsPage, order, Order_result]
       switch (status){
       case 200:
           case 204:
           if (screen===null){return (answer)}
           document.getElementById('error').style.display='none'
           //close_screen()

        Functions[screen](answer)

          // nav_button(screen)
               return
       case 422:
           render([<Error title={'Ошибка валидации'} message={answer}/>], document.getElementById('error'))
           document.getElementById('error').style.display='block'
           return
           case 401:
              // if (screen===null) return
               render([<Error title={'Ошибка авторизации'} message={answer}/>], document.getElementById('error'))
               document.getElementById('error').style.display='block'
               return


   }


}
export default request