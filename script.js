//Cadastro
function validarEmail(params) {
    var email = document.getElementById('txtEmail')
    if (!email.checkValidity()) {
        alert ('Email errado!')
    } else {
        alert ('Email Correto!')
    }
}
function validarSenha(params) {
    alert ('Teste')
}
function logar(params) {
    var senha = document.getElementById('txtSenha')
    var email = document.getElementById('txtEmail')
    let teste = "teste"
    if (teste != senha) {
        alert ('Sua senha esta errada!')
    } else {
        alert ('Seja bem vindo!')
    }
    /*alert (`Vc digitou ${senha}`)*/
}
function cadastrar(params) {
    alert ('Teste')
}