const entradaComentario = $("#comentario")
const btnLimpar = $("#limpar")
const btnPostar = $("#postar")
const entradaNome = $("#nome")
const postagens = $("#postagens")

var temp

btnLimpar.on('click', limpaTudo)
btnPostar.on('click', postaComentario)
entradaComentario.on('input', countText)

$(window).on('load', limpaTudo)

function postaComentario(){
    let nome = entradaNome.val()
    let comentario = entradaComentario.val()
    if(nome ==""){
        nome = "umBandicootAnônimo"
    }
    if(comentario ==""){
        window.alert("Escreva algo na caixa de comentário!")
    }else{
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
}

function countText() {
    let text = entradaComentario.val()
    $("#caracteres").text(text.length)
  }

  function limpaTudo(){
    entradaComentario.val("")
    entradaNome.val("")
    countText()
  }