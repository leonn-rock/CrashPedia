//ESTA PARTE DO SCRIPT É PARA O FÓRUM

const entradaComentario = $("#comentario")
const btnLimpar = $("#limpar")
const btnPostar = $("#postar")
const entradaNome = $("#nome")
const postagens = $("#postagens")

var temp

btnPostar.on('click', postaComentario)
entradaComentario.on('input', countText)

$(window).on('load', countText)

function postaComentario(){
    let nome = entradaNome.val()
    let comentario = entradaComentario.val()
    console.log(nome,comentario)
    for(var i=1; i<100; i++){
        if(postagens.find(`#c${i}`).length == 0){
            let ultimoComentario
            let comentarioNovo = `<div id="c${i}" class="container m-3 forum"><span class="h5"><b>@${nome}</b> </span class="h5"><p>${comentario}</p>`
           
            ultimoComentario = $(`#c${i-1}`)
            ultimoComentario.append(comentarioNovo)
            return
        }
    }
}

function countText() {
    let text = entradaComentario.val()
    $("#caracteres").text(text.length)
  }


//ESTA PARTE DO SCRIPT E PARA A PAGINA OUTROS

const btnRelacionados = $("#relacionados")
btnRelacionados.on('click', irParaRelacionados)

function irParaRelacionados(){
    $(location).attr('href', 'relacionados.html')
}