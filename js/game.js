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

/*
var game = function() {
    
    // private members
    var factorElement = document.getElementById('factor');
    var problemsPerGame = 3; // set default value
    
    function printGame() {
    
        player.logPlayer();
    
        // determine the number of problems to show
        setProblemCount(document.getElementById('problemCount').value);
    
        // create the html for the current game
        var gameForm = '';
        for (var i = 1; i <= problemsPerGame; i++) {
            gameForm += '<div class="form-group">';
            gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
            gameForm += factorElement.value + ' x ' + i + ' = </label>';
            gameForm += '<div class="col-sm-1">
            <input type="text" class="form-control" id="answer' + i + '" size="5" /></div>';
            gameForm += '</div>';
        }
    
        // add the new game to the page
        var gameElement = document.getElementById('game');
        gameElement.innerHTML = gameForm;
    
        // enable the calculate score button
        document.getElementById('calculate').removeAttribute('disabled');
    }
    
    function calculateScore() {
    
        var problemsInGame = getProblemCount();
        var score = 0;
    
        // loop through the text boxes and calculate the number that are correct
        for (var i = 1; i <= problemsInGame; i++) {
            var answer = document.getElementById('answer' + i).value;
            if(i * factorElement.value == answer) {
                score++;
            }
        }
    
        // create a new result object to pass to the scoreboard
        var result = {
            name: player.getName(),
            score: score,
            problems: problemsInGame,
            factor: factorElement.value
        };
    
        // add the result and update the scoreboard
        var scoreboard = new Scoreboard();
        scoreboard.addResult(result);
        scoreboard.updateScoreboard();
    
        // disable the calculate score button
        document.getElementById('calculate').setAttribute('disabled', 'true');
    }
    
    function setProblemCount(newProblemCount) {
        problemsPerGame = newProblemCount;
    }
    
    function getProblemCount() {
        return problemsPerGame;
    }
    
    // public members
    return {
        printGame: printGame,
        calculateScore: calculateScore,
        setProblemCount: setProblemCount,
        getProblemCount: getProblemCount
    };
    
}();
*/
