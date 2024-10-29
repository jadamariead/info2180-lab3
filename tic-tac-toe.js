document.addEventListener('DOMContentLoaded', () => {
  const board = document.querySelector("#board");
  const squares = board.querySelectorAll("div");
  const statusDiv = document.getElementById("status");
  const newGameBtn = document.getElementsByClassName("btn")[0];

  squares.forEach((square) => {
    square.classList.add("square");
  });

  let state = [null, null, null, null, null, null, null, null, null];
  let currentPlayer = "X";

  squares.forEach((square, index) => {
    
    square.addEventListener("mouseover",() =>{
      square.classList.add("hover");
    });

    square.addEventListener("mouseout",() =>{
      square.classList.remove("hover");
    });

    square.addEventListener("click", () => {

      if (state[index] == null ) {

        state[index] = currentPlayer;

        square.textContent = currentPlayer; 
        square.classList.add(currentPlayer); 
        
        if (currentPlayer == "X"){
          currentPlayer = "O";
        }else{
          currentPlayer = "X";
        }

        let winner = checkForWinner(state);

        if (winner == "X") {
          statusDiv.textContent = "Congratulations! X is the Winner!";
          statusDiv.classList.add("you-won");
        }
        else if (winner == "O")
        {
          statusDiv.textContent = "Congratulations! O is the Winner!";
          statusDiv.classList.add("you-won");
        }  
      }
    });
  });

  function checkForWinner(state){
    if ((state[0] == "X" && state[1] == "X" && state[2] == "X") || (state[3] == "X" && state[4] == "X" && state[5] == "X") || (state[6] == "X" && state[7] == "X" && state[8] == "X") || (state[0] == "X" && state[3] == "X" && state[6] == "X") || (state[1] == "X" && state[4] == "X" && state[7] == "X") || (state[2] == "X" && state[5] == "X" && state[8] == "X") || (state[0] == "X" && state[4] == "X" && state[8] == "X") || (state[2] == "X" && state[4] == "X" && state[6] == "X"))
    {
      return "X";
    } 
    else if ((state[0] == "O" && state[1] == "O" && state[2] == "O") || (state[3] == "O" && state[4] == "O" && state[5] == "O") || (state[6] == "O" && state[7] == "O" && state[8] == "O") || (state[0] == "O" && state[3] == "O" && state[6] == "O") || (state[1] == "O" && state[4] == "O" && state[7] == "O") || (state[2] == "O" && state[5] == "O" && state[8] == "O") || (state[0] == "O" && state[4] == "O" && state[8] == "O") || (state[2] == "O" && state[4] == "O" && state[6] == "O"))
    {
      return "O";
    } 
    return null
  }

  newGameBtn.addEventListener("click", () => {
    state = [null, null, null, null, null, null, null, null, null];
    currentPlayer = "X";
    statusDiv.textContent = "Move your mouse over a square and click to play an X or an O."; 
    statusDiv.classList.remove("you-won");

    squares.forEach(square => {
      square.textContent = ''; 
      square.classList.remove("X", "O"); 
    });
  });
});

