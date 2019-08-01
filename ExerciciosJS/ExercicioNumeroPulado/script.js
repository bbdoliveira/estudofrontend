function contar(params) {
    var inicio = document.getElementById('txtinicio')
    var final = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var ini = Number(inicio.value)
    var fin = Number(final.value)
    var pas = Number(passo.value)
    var res = document.querySelector('div#res')
    //res.innerHTML = (`Teste ${ini}, ${fin} e ${pas}`)
    if (ini <= 0) {
        window.alert('Inicio zerado ou vazio. Impossivel Contar!')
    } else if (fin <= 0) {
        window.alert('Final zerado ou vazio. Impossivel contar!')
    } else if (pas <= 0) { //Caso passo seja 0 ele recebe 1
        window.alert('[ERRO] Passo Inválido! Considerando passo 1!')
        pas = 1
        //window.alert(`Teste passo ${pas}`)
    } else if (ini <= 0 && fin <= 0 && pas <= 0) {
        window.alert('[ERRO] Formulário vazio! Tente novamente!')
    } else {
        while (ini <= fin) {
            res.innerHTML = (`${ini}`)
            ini = ini + pas
        }
    }
}