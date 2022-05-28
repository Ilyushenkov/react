// Функция реализует запросы

import {render} from "react-dom";
import React from "react";
import Error from "../components/error";
import Download from "../components/download";
import error from "../components/error";


async function request(url, body, method) {
    render([<Download/>], document.getElementById('window_download'))
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+localStorage.token);
    myHeaders.append("Content-Type", "application/json");
            let request_options={method: method, body:body, headers:myHeaders}
            let result=await fetch(url,request_options)
            let answer=''
            let status=await result.status
            try {
                answer=await result.json()

            } catch {await console.log(status)}


            document.getElementById('window_download').className='none'


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