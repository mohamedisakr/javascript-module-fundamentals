// **************************** Using the CommonJS Format with SystemJS ********************
const player = require("./player.js");
const game = require("./game.js");

console.log("Loading with SystemJS");

startGameButton = document.querySelector("#startGame");
calculateButton = document.querySelector("#calculate");
problemCountInput = document.querySelector("#problemCount");
playernameInput = document.querySelector("#playername");

function handleStartGame() {
  player.setName(playernameInput.value);
  game.printGame();
}

function handleCalculation() {
  game.calculateScore();
}

startGameButton.addEventListener("click", handleStartGame);
calculateButton.addEventListener("click", handleCalculation);
problemCountInput.value = game.getProblemCount();

// **************************** Using the AMD Format with RequireJS ********************
/*
define(["./player", "./game"], function(player, game) {
  // "use strict";
  console.log("Loading with RequireJS");

  startGameButton = document.querySelector("#startGame");
  calculateButton = document.querySelector("#calculate");
  problemCountInput = document.querySelector("#problemCount");
  playernameInput = document.querySelector("#playername");

  function handleStartGame() {
    player.setName(playernameInput.value);
    game.printGame();
  }

  function handleCalculation() {
    game.calculateScore();
  }

  startGameButton.addEventListener("click", handleStartGame);
  calculateButton.addEventListener("click", handleCalculation);
  problemCountInput.value = game.getProblemCount();
});
*/
// **************************** Revealing Module Pattern - Singleton ********************
/*
(function() {
  console.log("Starting app");

  startGameButton = document.querySelector("#startGame");
  calculateButton = document.querySelector("#calculate");
  problemCountInput = document.querySelector("#problemCount");
  playernameInput = document.querySelector("#playername");

  function handleStartGame() {
    player.setName(playernameInput.value);
    game.printGame();
  }

  function handleCalculation() {
    game.calculateScore();
  }

  startGameButton.addEventListener("click", handleStartGame);
  calculateButton.addEventListener("click", handleCalculation);
  problemCountInput.value = game.getProblemCount();
})();
*/
