import React, {useState, useEffect} from 'react';
import Header from "./header";
import request from "../action/request";
import Concert from "./concert";




const Test = () => {
    const [message, setMessage] = useState('');
    const [id, setId]=useState(0)
    useEffect(() => {
        load();
    }, []);
    function load(){
        console.log('>> Loading message <<');
        try {
            //fetch('https://json.versant.digital/.netlify/functions/fake-api/message')

           request('http://tickets.сделай.site/api/concert?date1=2022-03-01&date2=2022-06-01&type=рок', null, 'GET', null)
                //.then(res => res.json())
                .then(message => {
                    setId(message.data.concert[0]);
                });
        } catch (e) {}
        console.log(`>> Current message is: ${message || 'EMPTY'} <<`);


       };

    return (
        <div>
            <Header/>
            <Concert data={id} key={2}/>
        </div>
    );
};

export default Test;