var a
for (a = 1; a <= 2; a++){ //FOR tem Inicio, Teste Lógico e Incremento.
    var b = 1
    console.log('|---------------FOR----------------|')
    console.log('Começou!')
do { // Do While - Executa o bloco e testa no final.
    var c = 1
    console.log('Inicio teste (While)!')
    while (c < 6) { //While -  Teste no inicio, depois executa o bloco.
        console.log(c)
        c++
    }
    console.log('Fim teste (While)!')
    b++
} while (b <=2)
console.log('|------------Fim do FOR------------|')
}