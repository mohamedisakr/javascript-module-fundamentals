// **************************** Using ES6 Modules ********************
let playerName = "";

export function logPlayer() {
  console.log(`The current player is ${playerName}.`);
}

export default function setName(newName) {
  playerName = newName;
}

export function getName() {
  return playerName;
}

// export { logPlayer, setName, getName };

// **************************** Using the CommonJS Format with SystemJS ********************
/*
let playerName = "";

function logPlayer() {
  console.log(`The current player is ${playerName}.`);
}

function setName(newName) {
  playerName = newName;
}

function getName() {
  return playerName;
}

exports.logPlayer = logPlayer;
exports.setName = setName;
exports.getName = getName;
*/

// **************************** Using the AMD Format with RequireJS ********************
/*
define([], function() {
  let playerName = "";

  function logPlayer() {
    console.log(`The current player is ${playerName}.`);
  }

  function setName(newName) {
    playerName = newName;
  }

  function getName() {
    return playerName;
  }

  return {
    logPlayer: logPlayer,
    setName: setName,
    getName: getName
  };
});
*/

// **************************** Revealing Module Pattern - Singleton ********************
/*
var player = (function() {
  let playerName = "";

  function logPlayer() {
    console.log(`The current player is ${playerName}.`);
  }

  function setName(newName) {
    playerName = newName;
  }

  function getName() {
    return playerName;
  }

  return {
    logPlayer: logPlayer,
    setName: setName,
    getName: getName
  };
})();
*/
