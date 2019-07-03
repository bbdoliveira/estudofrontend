function carregar() {
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = (`Agora são ${hora} horas!`)
    if (hora >= 0 && hora <= 12) {
        //Bom Dia
        imagem.src = 'imagens/manha.png'
        document.body.style.background = '#489651'
    } else if (hora > 12 && hora <= 18) {
        //Boa tarde
        imagem.src = 'imagens/tarde.png'
        document.body.style.background = '#934857'
    } else {
        //Boa noite
        imagem.src = 'imagens/noite.png'
        document.body.style.background = '#002358'
    }
}
