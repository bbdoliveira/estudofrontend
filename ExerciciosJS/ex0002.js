function calcidade() {
    var nasc = document.getElementById('nascimento')
    var nasci = Number(nasc.value)
    var anoatual = 2019
    var idade = anoatual - nasci
    var res = document.getElementById('res')
    
    if (idade >= 18) {
        res.innerHTML = (`Você tem ${idade} anos, já é maior de idade!`)
    } else {
        res.innerHTML = (`Você tem apenas ${idade} anos de idade, ainda é menor!`)
    }
    
}