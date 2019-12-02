let num = document.getElementById('txtnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []
let show = Number(num.value)

function isNumber(n) { //Verifica se "n" é um numero.
    if (Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) { //Verifica se é um numero e se ja está na lista!
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNumber(num.value) && !inList(num.value, valores)) { // ! Significa Não.
        valores.push(Number(num.value)) //Inclui o valor digitado no vetor
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = '' //Limpa o resultado na página.
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' //Limpa o campo Num.
    num.focus() //Foca no campo Num, "equivale" a um clique.
}

function end() {
    if (valores.length == 0) { //Verifica se o vetor esta vazio.
        alert('Digite valores antes de finalizar!')
    } else {
    let total = valores.length //Mostra quantos elementos temos no vetor.
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for(let pos in valores) {
        soma += valores[pos]
        if (valores[pos] > maior) {
            maior = valores[pos]
        }
        if (valores[pos] < menor) {
            menor = valores[pos]
        }
    }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número é ${maior}.</p>`
        res.innerHTML += `<p>O menor número é ${menor}.</p>`
        res.innerHTML += `<p>A soma total dos numeros é ${soma}.`
        res.innerHTML += `<p>A média dos números cadastrados é: ${media}`
    }
}