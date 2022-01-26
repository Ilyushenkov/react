


function edit(message, set_Seat) {
    document.getElementsByClassName('screen')[5].style.display = 'none'
    set_Seat.current.innerText=message

    document.getElementById(message).style.visibility='hidden'
}

export default edit