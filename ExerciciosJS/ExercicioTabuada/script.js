function tabuada (params) {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    
    if (num.value.length == 0) {
        tab.innerHTML = ''
        window.alert('Por favor, digite um numero!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')//Cria options no select.
            item.text = `${n} x ${c} = ${n*c}` //Altera o texto dos options
            item.value = `tab${c}` //Adiciona um value nos options.
            tab.appendChild(item)
            c++
        }
    }
}