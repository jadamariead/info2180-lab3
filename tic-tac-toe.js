document.addEventListener('DOMContentLoaded', () => {
  const board = document.querySelector("#board");
  const squares = board.querySelectorAll("div");

  squares.forEach((square) => {
    square.classList.add("square");
  });

  const state = Array(9).fill(null); 
  let currentPlayer = "X";

  squares.forEach((square, index) => {
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
      }
    });
  });
});