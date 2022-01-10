import {render} from "react-dom";
import React, {useRef} from "react";
import Error from "../components/error";
import Concerts from "../components/concerts";
import Search from "../components/search";
import Order from "../components/Order";

async function request(url, body, method, screen) {

            let request_options={method: method,body:body}
            let result=await fetch(url,request_options)
            let answer=await result.json()
            let status=result.status

    let Screens=[<Search answer={answer}/>, <Concerts answer={answer}/>, <Order answer={answer}/>]
    let Screen_before=Screens[screen-1]
    let Screen_after=Screens[screen+1]
       switch (status){
       case 200:
           document.getElementById('error').style.display='none'
          console.log(document.getElementsByClassName('screen').length)
           for (let i=0; i<document.getElementsByClassName('screen').length; i++) {
               document.getElementsByClassName('screen')[i].style.display = 'none'           }

           render([<navButton onClick={Screen_before} value={'<<Назад'}/>, <navButton onClick={Screen_after} value={'Вперед>>'}/>], document.getElementById('navigation'))
           console.log(Screen_after)
           return render([Screen_before], document.getElementsByClassName('screen')[2])
       case 422:
           return render([<Error title={'Ошибка валидации'} message={answer}/>], document.getElementById('error'))

   }


}
export default request