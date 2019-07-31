function contar(params) {
    /*var inicio = document.getElementById('txtinicio')
    var final = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var ini = Number(inicio.value)
    var fin = Number(final.value)
    var pas = Number(passo.value)*/
    var res = document.querySelector('div#res')
    var ini = 5
    var fin = 10

    while (ini <= fin) {
        res.innerHTML = (`Teste ${ini}`)
        ini++
    }

    /*if (pas == 0) { //Caso passo seja 0 ele recebe 1
        window.alert('[ERRO] Passo Inválido! Considerando passo 1!')
        pas = 1
        window.alert(`Teste passo ${pas}`)
    }*/

    //window.alert(`Teste ${ini}, ${fin} e ${pas}`)

}