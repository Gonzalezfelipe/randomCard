// Definición de variables

let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
let symbols = ["♦", "♥", "♠", "♣"];

// Función que genera una carta aleatoria

function randomCard() {
  // Selecciona número y símbolo aleatorio

  let number = numbers[Math.floor(Math.random() * numbers.length)];
  let symbol = symbols[Math.floor(Math.random() * symbols.length)];

  // Selecciona los Elementos del DOM

  let cardElement = document.querySelector(".card");
  let symbolElement = document.querySelector(".symbol1");
  let numberElement = document.querySelector(".number");
  let symbol2Element = document.querySelector(".symbol2");

  // Se actualizan los valores con los valores aleatorios

  symbolElement.textContent = symbol;
  numberElement.textContent = number;
  symbol2Element.textContent = symbol;

  // Verificación si el simbolo es rojo, en donde se añade o quita la clase red

  if (symbol === "♥" || symbol === "♦") {
    cardElement.classList.add("red");
  } else {
    cardElement.classList.remove("red");
  }
}

// Selecciona el elemento button para escuchar el evento click y gatillar la funcion randomCard

let buttonElement = document.querySelector(".btn");
buttonElement.addEventListener("click", function() {
  randomCard();
});
