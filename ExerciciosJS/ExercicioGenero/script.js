function verificar(params) {
    var data = new Date()
    var ano = data.getFullYear() //Pega o ano atual e atribui a variável ano!
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados digitados!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //Cria um elemento direto na minha página.
        img.setAttribute('id', 'foto') //Seta um atributo: Como foi criado um ID para a tag foto!
        if (fsex[0].checked) { //Se a váriavel 'fsex' na posição 0 for marcada! Posição 0 é a bolinha da marcação.
            genero = 'Homem'
            if (idade >= 0 && idade < 10){ //Criança
                img.setAttribute('src', 'imagens/crianca-menino.png')
            } else if (idade < 21) {       //Jovem
                img.setAttribute('src', 'imagens/jovem-homem.png')
            } else if (idade < 50) {       //Adulto
                img.setAttribute('src', 'imagens/adulto-homem.png')
            } else {                       //Idoso
                img.setAttribute('src', 'imagens/idoso-homem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) { //Criança
                img.setAttribute('src', 'imagens/crianca-menina.png')
            } else if (idade < 21) {        //Jovem
                img.setAttribute('src', 'imagens/jovem-mulher.png')
            } else if (idade < 50) {        //Adulto
                img.setAttribute('src', 'imagens/adulto-mulher.png')
            } else {                        //Idoso
                img.setAttribute('src', 'imagens/idoso-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = (`Detectamos ${genero} com ${idade} anos.`)
        res.appendChild(img) //Adiciona o elemento IMG depois de aparecer o resultado. 
    }
}