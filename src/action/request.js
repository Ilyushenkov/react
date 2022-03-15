// Функция реализует запросы

import {render} from "react-dom";
import React from "react";
import Error from "../components/error";


async function request(url, body, method) {
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


       switch (status){
       case 200:
           case 204:

           document.getElementById('error').style.display='none'

               return answer
       case 422:
           render([<Error title={'Ошибка валидации'} message={answer}/>], document.getElementById('error'))
           document.getElementById('error').style.display='block'
           return
           case 401:

               render([<Error title={'Ошибка авторизации'} message={answer}/>], document.getElementById('error'))
               document.getElementById('error').style.display='block'
               return


   }


}
export default request