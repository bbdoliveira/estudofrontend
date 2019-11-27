let num = [5, 8, 6, 9, 3, 7, 1, 2]
//let pos
let index = num.indexOf(9) //Faz buscas de elementos no array
/*
console.log(`O meu vetor tem ${num.length} posições!`)
console.log(`A posição 3 do meu vetor é: ${num[2]}`)
console.log(`O primeiro numero do meu vetor é: ${num[0]}`)
console.log(`A ordem crescente do meu vetor é: ${num.sort()}`)
*/
/* Forma padrão de escrever o array na tela.
for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição atual é: ${num[pos]}`)
    
}*/

for (let pos in num) {
    console.log(`Aposição ${pos} tem o numero: ${num[pos]}`)
}

if (index == -1) {
    console.log("O Valor não foi encontrando!" )
} else {
    console.log(`O numero proucrado esta na posição: ${index}`)
}
