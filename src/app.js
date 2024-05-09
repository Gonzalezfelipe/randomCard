let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
let simbols = ["♦", "♥", "♠", "♣"];

function randomCard() {
  let singleNumbers = numbers[Math.floor(Math.random() * numbers.length)];
  let singleSimbols = simbols[Math.floor(Math.random() * simbols.length)];
  let card = document.getElementsByClassName("card");
}

// window.onload = function() {
//   randomCard();
// };
