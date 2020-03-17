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
