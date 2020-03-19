/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./js/player.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ \"./js/game.js\");\n// **************************** Using ES6 Modules ********************\n\n\n\nfunction handleDOMContentLoaded() {\n  console.log(\"Built with webpack\");\n\n  calculateButton = document.querySelector(\"#calculate\");\n  startGameButton = document.querySelector(\"#startGame\");\n  problemCountInput = document.querySelector(\"#problemCount\");\n  playernameInput = document.querySelector(\"#playername\");\n\n  function handleStartGame() {\n    Object(_player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(playernameInput.value);\n    Object(_game_js__WEBPACK_IMPORTED_MODULE_1__[\"printGame\"])();\n  }\n\n  function handleCalculation() {\n    Object(_game_js__WEBPACK_IMPORTED_MODULE_1__[\"calculateScore\"])();\n  }\n\n  startGameButton.addEventListener(\"click\", handleStartGame);\n  calculateButton.addEventListener(\"click\", handleCalculation);\n  problemCountInput.value = Object(_game_js__WEBPACK_IMPORTED_MODULE_1__[\"getProblemCount\"])();\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", handleDOMContentLoaded);\n\n// **************************** Using the AMD Format with RequireJS ********************\n/*\ndefine([\"./player\", \"./game\"], function(player, game) {\n  // \"use strict\";\n  console.log(\"Loading with RequireJS\");\n\n  startGameButton = document.querySelector(\"#startGame\");\n  calculateButton = document.querySelector(\"#calculate\");\n  problemCountInput = document.querySelector(\"#problemCount\");\n  playernameInput = document.querySelector(\"#playername\");\n\n  function handleStartGame() {\n    player.setName(playernameInput.value);\n    game.printGame();\n  }\n\n  function handleCalculation() {\n    game.calculateScore();\n  }\n\n  startGameButton.addEventListener(\"click\", handleStartGame);\n  calculateButton.addEventListener(\"click\", handleCalculation);\n  problemCountInput.value = game.getProblemCount();\n});\n*/\n// **************************** Revealing Module Pattern - Singleton ********************\n/*\n(function() {\n  console.log(\"Starting app\");\n\n  startGameButton = document.querySelector(\"#startGame\");\n  calculateButton = document.querySelector(\"#calculate\");\n  problemCountInput = document.querySelector(\"#problemCount\");\n  playernameInput = document.querySelector(\"#playername\");\n\n  function handleStartGame() {\n    player.setName(playernameInput.value);\n    game.printGame();\n  }\n\n  function handleCalculation() {\n    game.calculateScore();\n  }\n\n  startGameButton.addEventListener(\"click\", handleStartGame);\n  calculateButton.addEventListener(\"click\", handleCalculation);\n  problemCountInput.value = game.getProblemCount();\n})();\n*/\n\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! exports provided: printGame, calculateScore, setProblemCount, getProblemCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"printGame\", function() { return printGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateScore\", function() { return calculateScore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setProblemCount\", function() { return setProblemCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProblemCount\", function() { return getProblemCount; });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./js/player.js\");\n/* harmony import */ var _scoreboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scoreboard.js */ \"./js/scoreboard.js\");\n// **************************** Using ES6 Modules ********************\n\n\n\nconst factorElement = document.querySelector(\"#factor\");\nconst problemCountElement = document.querySelector(\"#problemcount\");\nconst gameElement = document.querySelector(\"#game\");\nconst calculateElement = document.querySelector(\"#calculate\");\nlet problemsPerGame = 3;\n\nfunction printGame() {\n  Object(_player_js__WEBPACK_IMPORTED_MODULE_0__[\"logPlayer\"])();\n  setProblemCount(problemCountElement.value);\n\n  let gameForm = \"\";\n  for (let i = 1; i <= problemsPerGame; i++) {\n    gameForm += `\n        <div class='form-group'>\n            <label class=\"col-sm-2 control-label\" for=\"answer${i}\"\n                >${factorElement.value} x ${i} = </label>\n            <div class=\"col-sm-1\">\n                <input type=\"text\" class=\"form-control\" id=\"answer${i}\" size=\"5\" />\n            </div>\n        </div>`;\n  }\n\n  gameElement.innerHTML = gameForm;\n  calculateElement.removeAttribute(\"disabled\");\n}\n\nfunction calculateScore() {\n  let problemsInGame = getProblemCount();\n  let score = 0;\n\n  for (let i = 1; i <= problemsInGame; i++) {\n    let answer = document.querySelector(`#answer${i}`).value;\n    if (i * factorElement.value == answer) {\n      score++;\n    }\n  }\n\n  let result = {\n    name: Object(_player_js__WEBPACK_IMPORTED_MODULE_0__[\"getName\"])(),\n    score: score,\n    problems: problemsInGame,\n    factor: factorElement.value\n  };\n\n  _scoreboard_js__WEBPACK_IMPORTED_MODULE_1__[\"addResult\"](result);\n  _scoreboard_js__WEBPACK_IMPORTED_MODULE_1__[\"updateScoreboard\"]();\n\n  calculateElement.setAttribute(\"disabled\", \"true\");\n}\n\nfunction setProblemCount(newProblemCount) {\n  problemsPerGame = newProblemCount;\n}\n\nfunction getProblemCount() {\n  return problemsPerGame;\n}\n\n\n\n// **************************** Using the CommonJS Format with SystemJS ********************\n/*\nconst player = require(\"./player.js\");\nconst scoreboard = require(\"./scoreboard.js\");\n\nconst factorElement = document.querySelector(\"#factor\");\nconst problemCountElement = document.querySelector(\"#problemcount\");\nconst gameElement = document.querySelector(\"#game\");\nconst calculateElement = document.querySelector(\"#calculate\");\nlet problemsPerGame = 3;\n\nfunction printGame() {\n  player.logPlayer();\n  setProblemCount(problemCountElement.value);\n\n  let gameForm = \"\";\n  for (let i = 1; i <= problemsPerGame; i++) {\n    gameForm += `\n        <div class='form-group'>\n            <label class=\"col-sm-2 control-label\" for=\"answer${i}\"\n                >${factorElement.value} x ${i} = </label>\n            <div class=\"col-sm-1\">\n                <input type=\"text\" class=\"form-control\" id=\"answer${i}\" size=\"5\" />\n            </div>\n        </div>`;\n  }\n\n  gameElement.innerHTML = gameForm;\n  calculateElement.removeAttribute(\"disabled\");\n}\n\nfunction calculateScore() {\n  let problemsInGame = getProblemCount();\n  let score = 0;\n\n  for (let i = 1; i <= problemsInGame; i++) {\n    let answer = document.querySelector(`#answer${i}`).value;\n    if (i * factorElement.value == answer) {\n      score++;\n    }\n  }\n\n  let result = {\n    name: player.getName(),\n    score: score,\n    problems: problemsInGame,\n    factor: factorElement.value\n  };\n\n  scoreboard.addResult(result);\n  scoreboard.updateScoreboard();\n\n  calculateElement.setAttribute(\"disabled\", \"true\");\n}\n\nfunction setProblemCount(newProblemCount) {\n  problemsPerGame = newProblemCount;\n}\n\nfunction getProblemCount() {\n  return problemsPerGame;\n}\n\nexports.printGame = printGame;\nexports.calculateScore = calculateScore;\nexports.setProblemCount = setProblemCount;\nexports.getProblemCount = getProblemCount;\n*/\n\n// **************************** Using the AMD Format with RequireJS ********************\n/*\ndefine([\"./player\", \"./scoreboard\"], function(player, scoreboard) {\n  \"use strict\";\n  const factorElement = document.querySelector(\"#factor\");\n  const problemCountElement = document.querySelector(\"#problemcount\");\n  const gameElement = document.querySelector(\"#game\");\n  const calculateElement = document.querySelector(\"#calculate\");\n  let problemsPerGame = 3;\n\n  function printGame() {\n    player.logPlayer();\n    setProblemCount(problemCountElement.value);\n\n    let gameForm = \"\";\n    for (let i = 1; i <= problemsPerGame; i++) {\n      gameForm += `\n    <div class='form-group'>\n        <label class=\"col-sm-2 control-label\" for=\"answer${i}\"\n            >${factorElement.value} x ${i} = </label>\n        <div class=\"col-sm-1\">\n            <input type=\"text\" class=\"form-control\" id=\"answer${i}\" size=\"5\" />\n        </div>\n    </div>`;\n    }\n\n    gameElement.innerHTML = gameForm;\n    calculateElement.removeAttribute(\"disabled\");\n  }\n\n  function calculateScore() {\n    let problemsInGame = getProblemCount();\n    let score = 0;\n\n    for (let i = 1; i <= problemsInGame; i++) {\n      let answer = document.querySelector(`#answer${i}`).value;\n      if (i * factorElement.value == answer) {\n        score++;\n      }\n    }\n\n    let result = {\n      name: player.getName(),\n      score: score,\n      problems: problemsInGame,\n      factor: factorElement.value\n    };\n\n    scoreboard.addResult(result);\n    scoreboard.updateScoreboard();\n\n    calculateElement.setAttribute(\"disabled\", \"true\");\n  }\n\n  function setProblemCount(newProblemCount) {\n    problemsPerGame = newProblemCount;\n  }\n\n  function getProblemCount() {\n    return problemsPerGame;\n  }\n\n  return {\n    printGame: printGame,\n    calculateScore: calculateScore,\n    setProblemCount: setProblemCount,\n    getProblemCount: getProblemCount\n  };\n});\n*/\n// **************************** Revealing Module Pattern - Singleton ********************\n/*\nvar game = (function() {\n  const factorElement = document.querySelector(\"#factor\");\n  const problemCountElement = document.querySelector(\"#problemcount\");\n  const gameElement = document.querySelector(\"#game\");\n  const calculateElement = document.querySelector(\"#calculate\");\n  let problemsPerGame = 3;\n\n  function printGame() {\n    player.logPlayer();\n    setProblemCount(problemCountElement.value);\n\n    let gameForm = \"\";\n    for (let i = 1; i <= problemsPerGame; i++) {\n      gameForm += `\n    <div class='form-group'>\n        <label class=\"col-sm-2 control-label\" for=\"answer${i}\"\n            >${factorElement.value} x ${i} = </label>\n        <div class=\"col-sm-1\">\n            <input type=\"text\" class=\"form-control\" id=\"answer${i}\" size=\"5\" />\n        </div>\n    </div>`;\n    }\n\n    gameElement.innerHTML = gameForm;\n    calculateElement.removeAttribute(\"disabled\");\n  }\n\n  function calculateScore() {\n    let problemsInGame = getProblemCount();\n    let score = 0;\n\n    for (let i = 1; i <= problemsInGame; i++) {\n      let answer = document.querySelector(`#answer${i}`).value;\n      if (i * factorElement.value == answer) {\n        score++;\n      }\n    }\n\n    let result = {\n      name: player.getName(),\n      score: score,\n      problems: problemsInGame,\n      factor: factorElement.value\n    };\n\n    const scoreboard = new Scoreboard();\n    scoreboard.addResult(result);\n    scoreboard.updateScoreboard();\n\n    calculateElement.setAttribute(\"disabled\", \"true\");\n  }\n\n  function setProblemCount(newProblemCount) {\n    problemsPerGame = newProblemCount;\n  }\n\n  function getProblemCount() {\n    return problemsPerGame;\n  }\n\n  return {\n    printGame: printGame,\n    calculateScore: calculateScore,\n    setProblemCount: setProblemCount,\n    getProblemCount: getProblemCount\n  };\n})();\n*/\n\n\n//# sourceURL=webpack:///./js/game.js?");

/***/ }),

/***/ "./js/player.js":
/*!**********************!*\
  !*** ./js/player.js ***!
  \**********************/
/*! exports provided: logPlayer, default, getName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logPlayer\", function() { return logPlayer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getName\", function() { return getName; });\n// **************************** Using ES6 Modules ********************\nlet playerName = \"\";\n\nfunction logPlayer() {\n  console.log(`The current player is ${playerName}.`);\n}\n\nfunction setName(newName) {\n  playerName = newName;\n}\n\nfunction getName() {\n  return playerName;\n}\n\n// export { logPlayer, setName, getName };\n\n// **************************** Using the CommonJS Format with SystemJS ********************\n/*\nlet playerName = \"\";\n\nfunction logPlayer() {\n  console.log(`The current player is ${playerName}.`);\n}\n\nfunction setName(newName) {\n  playerName = newName;\n}\n\nfunction getName() {\n  return playerName;\n}\n\nexports.logPlayer = logPlayer;\nexports.setName = setName;\nexports.getName = getName;\n*/\n\n// **************************** Using the AMD Format with RequireJS ********************\n/*\ndefine([], function() {\n  let playerName = \"\";\n\n  function logPlayer() {\n    console.log(`The current player is ${playerName}.`);\n  }\n\n  function setName(newName) {\n    playerName = newName;\n  }\n\n  function getName() {\n    return playerName;\n  }\n\n  return {\n    logPlayer: logPlayer,\n    setName: setName,\n    getName: getName\n  };\n});\n*/\n\n// **************************** Revealing Module Pattern - Singleton ********************\n/*\nvar player = (function() {\n  let playerName = \"\";\n\n  function logPlayer() {\n    console.log(`The current player is ${playerName}.`);\n  }\n\n  function setName(newName) {\n    playerName = newName;\n  }\n\n  function getName() {\n    return playerName;\n  }\n\n  return {\n    logPlayer: logPlayer,\n    setName: setName,\n    getName: getName\n  };\n})();\n*/\n\n\n//# sourceURL=webpack:///./js/player.js?");

/***/ }),

/***/ "./js/scoreboard.js":
/*!**************************!*\
  !*** ./js/scoreboard.js ***!
  \**************************/
/*! exports provided: addResult, updateScoreboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addResult\", function() { return addResult; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateScoreboard\", function() { return updateScoreboard; });\n// **************************** Using ES6 Modules ********************\nconsole.log(\"Creating a scoreboard...\");\n\nconst scoresElement = document.querySelector(\"#scores\");\nlet results = [];\n\nfunction addResult(newResult) {\n  results.push(newResult);\n}\n\nfunction updateScoreboard() {\n  let output = \"<h2>Scoreboard</h2>\";\n  results.forEach(\n    result =>\n      (output += `<h4>${result.name} : ${result.score} / ${result.problems} for factor ${result.factor}</h4>`)\n  );\n\n  scoresElement.innerHTML = output;\n}\n\n\n\n// **************************** Using the CommonJS Format with SystemJS ********************\n/*\nconsole.log(\"Creating a scoreboard...\");\n\nconst scoresElement = document.querySelector(\"#scores\");\nlet results = [];\n\nfunction addResult(newResult) {\n  results.push(newResult);\n}\n\nfunction updateScoreboard() {\n  let output = \"<h2>Scoreboard</h2>\";\n  results.forEach(\n    result =>\n      (output += `<h4>${result.name} : ${result.score} / ${result.problems} for factor ${result.factor}</h4>`)\n  );\n\n  scoresElement.innerHTML = output;\n}\n\nmodule.exports = {\n  addResult: addResult,\n  updateScoreboard: updateScoreboard\n};\n// exports.addResult = addResult;\n// exports.updateScoreboard = updateScoreboard;\n*/\n// **************************** Using the AMD Format with RequireJS ********************\n/*\ndefine([], function() {\n  \"use strict\";\n  console.log(\"Creating a scoreboard...\");\n\n  const scoresElement = document.querySelector(\"#scores\");\n  let results = [];\n\n  function addResult(newResult) {\n    results.push(newResult);\n  }\n\n  function updateScoreboard() {\n    let output = \"<h2>Scoreboard</h2>\";\n    results.forEach(\n      result =>\n        (output += `<h4>${result.name} : ${result.score} / ${result.problems} for factor ${result.factor}</h4>`)\n    );\n\n    scoresElement.innerHTML = output;\n  }\n\n  return {\n    addResult: addResult,\n    updateScoreboard: updateScoreboard\n  };\n});\n*/\n// **************************** Revealing Module Pattern - Constructor ********************\n/*\nconst Scoreboard = function() {\n  console.log(\"Creating a scoreboard...\");\n\n  const scoresElement = document.querySelector(\"#scores\");\n  let results = [];\n\n  function addResult(newResult) {\n    results.push(newResult);\n  }\n\n  function updateScoreboard() {\n    let output = \"<h2>Scoreboard</h2>\";\n    results.forEach(\n      result =>\n        (output += `<h4>${result.name} : ${result.score} / ${result.problems} for factor ${result.factor}</h4>`)\n    );\n\n    scoresElement.innerHTML = output;\n  }\n\n  return {\n    addResult: addResult,\n    updateScoreboard: updateScoreboard\n  };\n};\n*/\n\n// **************************** Revealing Module Pattern - Singleton ********************\n/*\nconst scoreboard = (function() {\n  console.log(\"Creating a scoreboard...\");\n  const scoresElement = document.querySelector(\"#scores\");\n  let results = [];\n\n  function addResult(newResult) {\n    results.push(newResult);\n  }\n\n  function updateScoreboard() {\n    let output = \"<h2>Scoreboard</h2>\";\n    results.forEach(\n      result =>\n        (output += `<h4>${result.name} : ${result.score} / ${result.problems} for factor ${result.factor}</h4>`)\n    );\n\n    scoresElement.innerHTML = output;\n  }\n\n  return {\n    addResult: addResult,\n    updateScoreboard: updateScoreboard\n  };\n})();\n*/\n\n\n//# sourceURL=webpack:///./js/scoreboard.js?");

/***/ })

/******/ });