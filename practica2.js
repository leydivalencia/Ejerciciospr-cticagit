// practica 2
let diaSemana = prompt ( " que dia de la semana es?")
if ( diaSemana == 'sabado' || diaSemana == 'domingo') {
    alert ('¡Buen fin de semana!');
} else {
    alert ('¡Buena semana!');
}
 let numero = prompt (" ingrese un numero ")
 if( numero > 0) {
    alert('El numero es positivo');
 } else if ( numero < 0) {
    alert('El numero es negativo');
 }

 let puntuacion = prompt (" ingrese la puntuación");
 if ( puntuacion >= 100) {
    alert ('Felicidades, has ganado!');
 } else if ( puntuacion <= 100) {
    alert ('"Intentalo nuevamente para ganar."');
 }

 let saldo = 100.000
 alert ( `Tu saldo actual es: ${saldo}`);

 let nombre3 = prompt (" ingresa tu nombre")
 alert ('Bienvenid@' + ' ' + nombre3);
