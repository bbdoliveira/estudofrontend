//var nome = window.prompt ('Qual o seu nome?')
	//window.alert ('Seja muito bem vindo, ' + nome + '!') //+ Significa concatenação
	/*window.alert ('Há Ie Ie! Pegadinha do Malandro!') /*Exibe uma mensagem na tela antes de carregar a página*/
	/*window.confirm ('Gostou da pegadinha?') /*Questiona alguma coisa*/
	//var n1 = window.prompt ('Digite um numero: ')
	//var n2 = window.prompt ('Digite outro numero: ')
	//var total = Number.parseFloat(n1) + Number.parseFloat(n2)//Converte os numeros em strings (Forma completa).
	//var total = Number(n1) + Number(n2)//Converte os numeros em strings forma abreviada.
	//window.alert ('A soma dos numeros digitados é: ' + total + '!')//Mostra o total.
	//window.alert (`A soma entre ${n1} e ${n2} é igual a ${total}`)//Mostra total utilizando Template String

    function somar(params) {
    var num1 = window.document.getElementById('txtn1')
    var num2 = window.document.getElementById('txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(num1.value) //Pega o valor de num1 e converte para numero!
    var n2 = Number(num2.value) //Pega o valor de num1 e converte para numero!
    var total = n1 + n2
    //window.alert (`A soma entre ${n1} e ${n2} é ${total}`) Mostra como PopUp
    //window.document.write (`A soma entre ${n1} e ${n2} é ${total}`)
    res.innerHTML = total // (`${total}`)
}
