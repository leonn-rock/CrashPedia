document.body.onload = mostraPopup

const popup = $("#popup")
const btnFecha = $("#fechar")

btnFecha.on('click', fechaPopup)

function mostraPopup(){
    popup.toggle()
    setTimeout(()=>{
        popup.toggle()
        popup.animate({left : "0"},1000)
    },1000);
}
function fechaPopup(){
    popup.animate({left : "-400px"},1000)
    setTimeout(()=>{
        popup.toggle()
    },1000)
}