


function edit(message, setSeat) {
    console.log(setSeat)
    document.getElementsByClassName('screen')[5].style.display = 'none'
    setSeat(message)

    document.getElementById(message).style.visibility='hidden'
}

export default edit