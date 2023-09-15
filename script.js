function cubic() {
    numero = parseInt(document.getElementById('num').value);
    result = numero * numero * numero;
    document.getElementById('resultado').innerHTML = result;
}
function convert() {
    farenheit = parseInt(document.getElementById('temp').value);
    celsius = (farenheit - 32) * 0.555;
    document.getElementById('celsiu').innerHTML = celsius + "°";
}
function areatri() {
    alt = parseInt(document.getElementById('altura').value);
    bas = parseInt(document.getElementById('base').value);
    areaa = (bas * alt) / 2;
    document.getElementById('area').innerHTML = areaa;
}
function calcperi() {
    raioo = parseInt(document.getElementById('raio').value);
    peri = 2 * 3.141592 * raioo;
    document.getElementById('perimetro').innerHTML = peri;
}
function vogais() {
    var palavra = document.getElementById('palavra').value.toLowerCase();
    var vogs = 'aeiou';
    var numeVog = 0;

    for (var i = 0; i < palavra.length; i++) {
        if (vogs.indexOf(palavra[i]) !== -1) {
            numeVog++;
        }
    }

    document.getElementById('numVog').innerHTML = numeVog;
}
function calc() {
    var nota1 = parseInt(document.getElementById('nota1').value);
    var nota2 = parseInt(document.getElementById('nota2').value);
    var media = (nota1 + nota2) / 2;
    var resultado = document.getElementById('resul');
    if (media >= 7) {
        resultado.innerHTML = "Aprovado";
    } else {
        resultado.innerHTML = "Reprovado";
    }
}