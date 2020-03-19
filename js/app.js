// **************************** Using ES6 Modules ********************
import assignPlayerName from "./player.js";
import { printGame, calculateScore, getProblemCount } from "./game.js";

function handleDOMContentLoaded() {
  console.log("Built with webpack");

  calculateButton = document.querySelector("#calculate");
  startGameButton = document.querySelector("#startGame");
  problemCountInput = document.querySelector("#problemCount");
  playernameInput = document.querySelector("#playername");

  function handleStartGame() {
    assignPlayerName(playernameInput.value);
    printGame();
  }

  function handleCalculation() {
    calculateScore();
  }

  startGameButton.addEventListener("click", handleStartGame);
  calculateButton.addEventListener("click", handleCalculation);
  problemCountInput.value = getProblemCount();
}

document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);

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
