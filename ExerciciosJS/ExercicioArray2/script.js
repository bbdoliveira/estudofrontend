function add() {
    let num = document.getElementById('txtnum')
    let show = Number(num.value)
    if (show < 1 || show > 100) {
        alert('Digite numeros apenas entre 1 e 100!')
    }else {
        alert(`Vc Digitou ${show}`)
    }
    
}