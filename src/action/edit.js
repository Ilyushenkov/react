


function edit(message, setSeat) {

    document.getElementById('screen2').style.display = 'none'
    setSeat(message)

    document.getElementById(message).style.visibility='hidden'
}

export default edit