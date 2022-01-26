
import edit from "../action/edit";
import ReactDOM from "react-dom";

const Hall = (props) => {
    let row=[]
    let row_html=[]
    let hall=[]
    document.getElementsByClassName('screen')[5].style.display='flex'
    let key=0
    for (let i=4; i<75; i++) {
        for (let j = 1; j < 100; j++) {
            let message='Место ' + j+' Ряд '+i
            row.push(<input type={'button'} className={'seat'} onClick={() => edit(message, props.Number_seat)} title={message} key={key} id={message}/>)
            key++
        }
       row_html.push(<div className={'wrap_row'}>{row}</div>)
        row=[]
    }
    hall.push(row_html)
    return(
        <div id={'abs'}>
            <div id={'select_seats'}>
        <section>
            <h1 className={'color_white'}>Выберите место</h1>
        <div id={'wrap hall'}>{hall}</div>
        </section>
        </div>
        </div>
    )
}


export default Hall;