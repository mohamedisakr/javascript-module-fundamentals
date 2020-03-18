// **************************** Using the CommonJS Format with SystemJS ********************
console.log("Creating a scoreboard...");

const scoresElement = document.querySelector("#scores");
let results = [];

function addResult(newResult) {
  results.push(newResult);
}

function updateScoreboard() {
  let output = "<h2>Scoreboard</h2>";
  results.forEach(
    result =>
      (output += `<h4>${result.name} : ${result.score} / ${result.problems} for factor ${result.factor}</h4>`)
  );

  scoresElement.innerHTML = output;
}

module.exports = {
  addResult: addResult,
  updateScoreboard: updateScoreboard
};
// exports.addResult = addResult;
// exports.updateScoreboard = updateScoreboard;

// **************************** Using the AMD Format with RequireJS ********************
/*
define([], function() {
  "use strict";
  console.log("Creating a scoreboard...");

  const scoresElement = document.querySelector("#scores");
  let results = [];

  function addResult(newResult) {
    results.push(newResult);
  }

  function updateScoreboard() {
    let output = "<h2>Scoreboard</h2>";
    results.forEach(
      result =>
        (output += `<h4>${result.name} : ${result.score} / ${result.problems} for factor ${result.factor}</h4>`)
    );

    scoresElement.innerHTML = output;
  }

  return {
    addResult: addResult,
    updateScoreboard: updateScoreboard
  };
});
*/
// **************************** Revealing Module Pattern - Constructor ********************
/*
const Scoreboard = function() {
  console.log("Creating a scoreboard...");

  const scoresElement = document.querySelector("#scores");
  let results = [];

  function addResult(newResult) {
    results.push(newResult);
  }

  function updateScoreboard() {
    let output = "<h2>Scoreboard</h2>";
    results.forEach(
      result =>
        (output += `<h4>${result.name} : ${result.score} / ${result.problems} for factor ${result.factor}</h4>`)
    );

    scoresElement.innerHTML = output;
  }

  return {
    addResult: addResult,
    updateScoreboard: updateScoreboard
  };
};
*/

// **************************** Revealing Module Pattern - Singleton ********************
/*
const scoreboard = (function() {
  console.log("Creating a scoreboard...");
  const scoresElement = document.querySelector("#scores");
  let results = [];

  function addResult(newResult) {
    results.push(newResult);
  }

  function updateScoreboard() {
    let output = "<h2>Scoreboard</h2>";
    results.forEach(
      result =>
        (output += `<h4>${result.name} : ${result.score} / ${result.problems} for factor ${result.factor}</h4>`)
    );

    scoresElement.innerHTML = output;
  }

  return {
    addResult: addResult,
    updateScoreboard: updateScoreboard
  };
})();
*/
