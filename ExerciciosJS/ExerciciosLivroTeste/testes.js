/*points.dist = function(params) {
    var p1 = this[0];
    var p2 = this[1];
    var a = p2.x-p1.x;
    var b = p2.y-p1.y;
    return Math.sqrt(a*a + b*b)
}
points.dist()*/
function outrapag() {  //Exibe uma caixa de diálogo perguntando se ele quer ir pra outra página!
    var click = confirm("Ao Clicar em OK será redirecionado para outra página!")
    if (click) {
        window.location = ("http://google.com.br")
    }
}