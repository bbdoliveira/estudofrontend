var agora = new Date() //Colher informações: Data, Hora, Minuto, Segundo etc
var hora = agora.getHours()
//console.log (`São extamente ${hora} horas!`)
if (hora <= 12) {
    console.log (`Bom dia, são ${hora} horas!`)
} else if (hora < 18) {
    console.log (`Boa tarde, são ${hora} horas!`)
} else {
    console.log (`Boa noite, são ${hora} horas!`)
}