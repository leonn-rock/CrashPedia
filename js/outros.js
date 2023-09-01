const btnRelacionados = $("#relacionados")
btnRelacionados.on('click', irParaRelacionados)

function irParaRelacionados(){
    $(location).attr('href', 'relacionados.html')
}