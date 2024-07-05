//practica 4



console.log ('Bienvenida');
let nombre = 'Leydi';
console.log(`¡Hola, ${nombre}!`); 

//4.-Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

pregunnta = parseInt( prompt ('¿Cuál es el lenguaje de programación que más te gusta?. '));
console.log ( pregunnta);
 

//5.-Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor1 = 325;
let valor2 = 200;
let resultado = (valor1 + valor2);
console.log (`La suma de ${valor1} y ${valor2} es igual a ${resultado} `);


//6.-Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.

let valor3 = 1250;
let valor4= 5874;
resultado= ( valor3 - valor4);
console.log(` La diferencia entre ${valor3} y ${valor4} es igual a ${resultado}`);


//7.-Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

edad = prompt ( " Ingrese su edad ");
if ( edad >= 18){
    alert('Eres mayor de edad');
} else {
    alert('Eres menor de edad');
}


//8.-Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.


let numero5 = prompt("Ingresa un valor");
if( numero5 > 0) {
    alert ('El valor es postivo');
} else if (numero5 < 0){
    alert ('el numero es negativo o cero')
}

//9.-Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

let numeros= 1;
while(numeros <= 10){
    console.log (numeros);
    numeros ++;
}

//10.-Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
let nota = 8;
if( nota >= 7) {
    console.log(`Aprobado` );
} else  {
    console.log (`Reprobado ` );

}
//11.-Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

Numeroaletorio = Math.random() ;
console.log (Numeroaletorio);

//12.-Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
numeroIntAleatorio = parseInt(Math.random() * 10) + 1;
console.log(numeroIntAleatorio); 

//13.-Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.

numeroIntAleatorio1 = parseInt(Math.random() * 1000)+1 ;
console.log(numeroIntAleatorio1); 
