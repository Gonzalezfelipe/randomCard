let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
let simbols = ["♦", "♥", "♠", "♣"];

function randomCard() {
  let singleNumbers = numbers[Math.floor(Math.random() * numbers.length)];
  let singleSimbols = simbols[Math.floor(Math.random() * simbols.length)];
  let simbolsNumbersRandom = `${singleNumbers} ${singleSimbols}`;

  let cards = document.getElementsByClassName("card");

  // Recorrer la lista de elementos y establecer el contenido de cada uno
  for (let i = 0; i < cards.length; i++) {
    cards[i].innerHTML = simbolsNumbersRandom;
  }
}

// window.onload = function() {
//   randomCard();
// };
