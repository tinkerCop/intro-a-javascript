// Función para calcular el IMC
function calcularIMC() {
  var peso = parseFloat(prompt("Ingresa tu peso en kg:"));
  var altura = parseFloat(prompt("Ingresa tu altura en metros:"));

  // Calcular el cuadrado de la altura
  var alturaCuadrado = altura * altura;

  // Calcular el IMC
  var imc = peso / alturaCuadrado;
   var RoundedFigures = imc * 10000;
  // Devolver el result redondeado a dos decimales
  return RoundedFigures.toFixed(1);
}

// Llamar a la función y mostrar el result en un prompt
var result = calcularIMC();
alert("Tu IMC es: " + result);
console.log("Tu IMC es: " + result);