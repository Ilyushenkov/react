import Seat from "./seat";
import edit from "../action/edit";


const Hall = () => {
    let row=[]
    let row_html=[]
    let hall=[]
    let key=0
    for (let i=4; i<79; i++) {
        for (let j = 1; j < 101; j++) {
            let message='Место ' + j+' Ряд '+i
            row.push(<input type={'button'} className={'seat'} onclick={() => edit(i,j, message)} title={message} key={key}/>)
            key++
        }
       row_html.push(<div className={'wrap_row'}>{row}</div>)
        row=[]
        hall.push(row_html)

    }
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