function contar(params) {
    var inicio = document.getElementById('txtinicio')
    var final = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.querySelector('div#res')
    
    if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0) {
        alert ('[ERRO] Faltam Dados!')
    } else {
        res.innerHTML = 'Contando: '
        var ini = Number(inicio.value)
        var fin = Number(final.value)
        var pas = Number(passo.value)
        if (pas == 0) {
            alert ('[ERRO] Passo Inválido! Considerando passo 1')
            pas = 1
        }
        if (ini < fin) {
            for (let count = ini; count <= fin; count += pas){
                res.innerHTML += `${count} \u{1F449} `
            }
        } else {
            //alert ('Ate aqui ta indo')
            for (let count = ini; count >= fin; count -= pas){
                res.innerHTML += `${count} \u{1F448}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}