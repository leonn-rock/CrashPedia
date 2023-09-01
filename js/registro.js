const email = $("#email")
const identificacao = $("#identificacao")
const senha = $("#senha")
const repeteSenha = $("#repeteSenha")
const btnRegistrar = $("#registrar")

btnRegistrar.on('click', registra)

function registra(){
    if( email.val() ==""){
        window.alert("O campo email é de preenchimento obrigatório.")
    } else if( identificacao.val() ==""){
        window.alert("O campo IdBandicoot é de preenchimento obrigatório.")
    } else if( senha.val() ==""){
        window.alert("O campo senha é de preenchimento obrigatório.")
    } else if( senha.val() != repeteSenha.val()){
        window.alert("As senhas não correspondem. Verifique a digitação.")
    } else {
        window.alert("Cadastro realizado!")
        window.location.replace("index.html")
    }
}

