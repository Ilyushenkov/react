function close_screen() {
    for (let i=0; i<document.getElementsByClassName('screen').length; i++) {
        document.getElementsByClassName('screen')[i].style.display = 'none'
    }
    document.getElementById('error').style.display='none'
}
export default close_screen