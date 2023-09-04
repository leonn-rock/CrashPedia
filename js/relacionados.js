document.body.onload = mostraPopup

const audio = $("audio#trofeu")[0]
const popup = $("#popup")
const btnFecha = $("#fechar")

btnFecha.on('click', fechaPopup)

function mostraPopup(){
    audio.play()
    popup.toggle()
    setTimeout(()=>{
        popup.toggle()
        popup.animate({left : "0"},1000)
    },700);
}
function fechaPopup(){
    popup.animate({left : "-400px"},1000)
    setTimeout(()=>{
        popup.toggle()
    },1000)
}