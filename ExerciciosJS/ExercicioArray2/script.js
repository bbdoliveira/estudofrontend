function add() {
    let num = document.getElementById('txtnum')
    let show = Number(num.value)
    if (show < 1 || show > 100) {
        alert('Digite numeros apenas entre 1 e 100!')
    }else {
        let teste = []
        teste.push(show)
        for (let pos = 0; pos < teste.length; pos++) {
            alert(`A posição ${pos} tem o numero ${teste[pos]}`)
        }
    }
    
}