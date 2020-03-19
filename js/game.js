// **************************** Using ES6 Modules ********************
import { getName as getPlayerName, logPlayer } from "./player.js";
import * as scoreboard from "./scoreboard.js";

const factorElement = document.querySelector("#factor");
const problemCountElement = document.querySelector("#problemcount");
const gameElement = document.querySelector("#game");
const calculateElement = document.querySelector("#calculate");
let problemsPerGame = 3;

function printGame() {
  logPlayer();
  setProblemCount(problemCountElement.value);

  let gameForm = "";
  for (let i = 1; i <= problemsPerGame; i++) {
    gameForm += `
        <div class='form-group'>
            <label class="col-sm-2 control-label" for="answer${i}"
                >${factorElement.value} x ${i} = </label>
            <div class="col-sm-1">
                <input type="text" class="form-control" id="answer${i}" size="5" />
            </div>
        </div>`;
  }

  gameElement.innerHTML = gameForm;
  calculateElement.removeAttribute("disabled");
}

function calculateScore() {
  let problemsInGame = getProblemCount();
  let score = 0;

  for (let i = 1; i <= problemsInGame; i++) {
    let answer = document.querySelector(`#answer${i}`).value;
    if (i * factorElement.value == answer) {
      score++;
    }
  }

  let result = {
    name: getPlayerName(),
    score: score,
    problems: problemsInGame,
    factor: factorElement.value
  };

  scoreboard.addResult(result);
  scoreboard.updateScoreboard();

  calculateElement.setAttribute("disabled", "true");
}

function setProblemCount(newProblemCount) {
  problemsPerGame = newProblemCount;
}

function getProblemCount() {
  return problemsPerGame;
}

export { printGame, calculateScore, setProblemCount, getProblemCount };

// **************************** Using the CommonJS Format with SystemJS ********************
/*
const player = require("./player.js");
const scoreboard = require("./scoreboard.js");

const factorElement = document.querySelector("#factor");
const problemCountElement = document.querySelector("#problemcount");
const gameElement = document.querySelector("#game");
const calculateElement = document.querySelector("#calculate");
let problemsPerGame = 3;

function printGame() {
  player.logPlayer();
  setProblemCount(problemCountElement.value);

  let gameForm = "";
  for (let i = 1; i <= problemsPerGame; i++) {
    gameForm += `
        <div class='form-group'>
            <label class="col-sm-2 control-label" for="answer${i}"
                >${factorElement.value} x ${i} = </label>
            <div class="col-sm-1">
                <input type="text" class="form-control" id="answer${i}" size="5" />
            </div>
        </div>`;
  }

  gameElement.innerHTML = gameForm;
  calculateElement.removeAttribute("disabled");
}

function calculateScore() {
  let problemsInGame = getProblemCount();
  let score = 0;

  for (let i = 1; i <= problemsInGame; i++) {
    let answer = document.querySelector(`#answer${i}`).value;
    if (i * factorElement.value == answer) {
      score++;
    }
  }

  let result = {
    name: player.getName(),
    score: score,
    problems: problemsInGame,
    factor: factorElement.value
  };

  scoreboard.addResult(result);
  scoreboard.updateScoreboard();

  calculateElement.setAttribute("disabled", "true");
}

function setProblemCount(newProblemCount) {
  problemsPerGame = newProblemCount;
}

function getProblemCount() {
  return problemsPerGame;
}

exports.printGame = printGame;
exports.calculateScore = calculateScore;
exports.setProblemCount = setProblemCount;
exports.getProblemCount = getProblemCount;
*/

// **************************** Using the AMD Format with RequireJS ********************
/*
define(["./player", "./scoreboard"], function(player, scoreboard) {
  "use strict";
  const factorElement = document.querySelector("#factor");
  const problemCountElement = document.querySelector("#problemcount");
  const gameElement = document.querySelector("#game");
  const calculateElement = document.querySelector("#calculate");
  let problemsPerGame = 3;

  function printGame() {
    player.logPlayer();
    setProblemCount(problemCountElement.value);

    let gameForm = "";
    for (let i = 1; i <= problemsPerGame; i++) {
      gameForm += `
    <div class='form-group'>
        <label class="col-sm-2 control-label" for="answer${i}"
            >${factorElement.value} x ${i} = </label>
        <div class="col-sm-1">
            <input type="text" class="form-control" id="answer${i}" size="5" />
        </div>
    </div>`;
    }

    gameElement.innerHTML = gameForm;
    calculateElement.removeAttribute("disabled");
  }

  function calculateScore() {
    let problemsInGame = getProblemCount();
    let score = 0;

    for (let i = 1; i <= problemsInGame; i++) {
      let answer = document.querySelector(`#answer${i}`).value;
      if (i * factorElement.value == answer) {
        score++;
      }
    }

    let result = {
      name: player.getName(),
      score: score,
      problems: problemsInGame,
      factor: factorElement.value
    };

    scoreboard.addResult(result);
    scoreboard.updateScoreboard();

    calculateElement.setAttribute("disabled", "true");
  }

  function setProblemCount(newProblemCount) {
    problemsPerGame = newProblemCount;
  }

  function getProblemCount() {
    return problemsPerGame;
  }

  return {
    printGame: printGame,
    calculateScore: calculateScore,
    setProblemCount: setProblemCount,
    getProblemCount: getProblemCount
  };
});
*/
// **************************** Revealing Module Pattern - Singleton ********************
/*
var game = (function() {
  const factorElement = document.querySelector("#factor");
  const problemCountElement = document.querySelector("#problemcount");
  const gameElement = document.querySelector("#game");
  const calculateElement = document.querySelector("#calculate");
  let problemsPerGame = 3;

  function printGame() {
    player.logPlayer();
    setProblemCount(problemCountElement.value);

    let gameForm = "";
    for (let i = 1; i <= problemsPerGame; i++) {
      gameForm += `
    <div class='form-group'>
        <label class="col-sm-2 control-label" for="answer${i}"
            >${factorElement.value} x ${i} = </label>
        <div class="col-sm-1">
            <input type="text" class="form-control" id="answer${i}" size="5" />
        </div>
    </div>`;
    }

    gameElement.innerHTML = gameForm;
    calculateElement.removeAttribute("disabled");
  }

  function calculateScore() {
    let problemsInGame = getProblemCount();
    let score = 0;

    for (let i = 1; i <= problemsInGame; i++) {
      let answer = document.querySelector(`#answer${i}`).value;
      if (i * factorElement.value == answer) {
        score++;
      }
    }

    let result = {
      name: player.getName(),
      score: score,
      problems: problemsInGame,
      factor: factorElement.value
    };

    const scoreboard = new Scoreboard();
    scoreboard.addResult(result);
    scoreboard.updateScoreboard();

    calculateElement.setAttribute("disabled", "true");
  }

  function setProblemCount(newProblemCount) {
    problemsPerGame = newProblemCount;
  }

  function getProblemCount() {
    return problemsPerGame;
  }

  return {
    printGame: printGame,
    calculateScore: calculateScore,
    setProblemCount: setProblemCount,
    getProblemCount: getProblemCount
  };
})();
*/
