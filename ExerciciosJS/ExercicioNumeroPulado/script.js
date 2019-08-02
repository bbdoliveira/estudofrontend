function contar(params) {
    var inicio = document.getElementById('txtinicio')
    var final = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var ini = Number(inicio.value)
    var fin = Number(final.value)
    var pas = Number(passo.value)
    var res = document.querySelector('div#res')
    var count
    //res.innerHTML = (`Teste ${ini}, ${fin} e ${pas}`)
    /*if (ini.value.length == 0 || fin.value.length == 0 || pas.value.length == 0) {
        window.alert('[ERRO] Faltam Dados! Tente novamente!')
    } else {
        while (ini <= fin) {
            res.innerHTML = (`${ini}`)
            ini = ini + pas
        }
    }*/
    if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0) {
        alert ('[ERRO] Faltam Dados!')
    } else {
        res.innerHTML = 'Contando: '
        for (count = ini; count <= fin; count += pas){
            res.innerHTML += ` - ${count}`
        }
    }
}