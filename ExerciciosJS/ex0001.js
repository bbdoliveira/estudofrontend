function localizar() {
var txtloca = document.getElementById('txtlocal')
var local = (txtloca.value)
var res = document.getElementById('res')

    if (local == 'Brasil') {
        res.innerHTML = (`<h3>Você está no ${local}, então você é Brasileiro!</h3>`)
    } else {
        res.innerHTML = (`<h3>Você está no ${local}, então você é Estrangeiro!</h3>`)
    }
}
