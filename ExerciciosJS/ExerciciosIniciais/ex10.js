function calcular() {
    var txtv = document.getElementById('txtvel')
    var res = document.getElementById('res')
    var vel = Number(txtv.value)
    //window.alert (`Sua velocidade atual é ${vel}`)
    //res.innerHTML = (`Sua velocidade atual é ${vel}`)
    if (vel > 60) {
        res.innerHTML = (`Você foi Multado por estar a ${vel}, numa rodovia onde o maximo é 60Km/h!`)
    } else {
        res.innerHTML = (`Você esta a ${vel}Km/h Tenha uma boa Viagem!`)
    }
}
