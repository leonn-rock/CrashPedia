const popupLogin = $("#popupLogin")
const divTudo = $("#tudo")
const identificacao = $("#identificacao")
const senha = $("#senha")
const btnConfirma = $("#btnConfirma")
const textoConfirma = $("#confirma")
const textoPopup = $("#conteudoLogin")
const divSome = $("#some")
const divAparece = $("#aparece")

class Cadastrado{
    constructor(id,senha){
        this.id = id
        this.senha = senha
    }
}
var cad1 = new Cadastrado("Admin","Admin")
var cad2 = new Cadastrado("VictorRohod","prefiroJakAndDaxter")
var cadastrados = [cad1,cad2]
var idValor, senhaValor, verificaId = false, verificaSenha = false
// document.body.onload = esconde()

// function esconde(){
//     popupLogin.hide()
// }

function troca(){
    popupLogin.toggle()
    divTudo.toggle()
}
divAparece.hide()

btnConfirma.on('click', confirmarId)

function entrar(){  //chamada direto pelo botão do HTML
    console.log("Clicou")
    atribui()
    if(idValor == ""){
        window.alert("O campo IdBandicoot é obrigatório!")
    } else if(senhaValor == "") {
        window.alert("O campo Senha é obrigatório!")
    } else{
            verificaIdSenha()
        }
}
function atribui(){
    idValor = identificacao.val()
    senhaValor = senha.val()
}

function verificaIdSenha(){
    for(let i = 0; i<cadastrados.length; i++ ){
        console.log(i)
        if(cadastrados[i].id == identificacao.val()){
            verificaId= true
            if(cadastrados[i].senha == senha.val()){
                verificaSenha = true
                if(cadastrados[i].id == "VictorRohod"){
                    troca()
                } else if (cadastrados[i].id == identificacao.val()){
                    window.alert("Login efetuado!")
                    window.location.replace("index.html")
                }                
            }
         }
    }
    if(verificaId == false){
        window.alert("Id inexistente. Verifique a ortografia ou clique em registrar.")
    } else if(verificaSenha == false){
        window.alert('Código incorreto. Caso tenha esquecido, clique em "esqueci o código".')
    }
}

function confirmarId(){
    if(textoConfirma.val() == "VSRohod"){
        divSome.toggle()
        divAparece.toggle()
    }
}