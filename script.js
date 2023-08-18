document.addEventListener("DOMContentLoaded", function() {
    // Get references to DOM elements
    const startButton = document.getElementById("start-button");
    const replayButton = document.getElementById("replay-button");
    const player1AvatarDropdown = document.getElementById("player1-avatar");
    const player2AvatarDropdown = document.getElementById("player2-avatar");
    const squares = document.querySelectorAll(".square");
    const currentWinnerName = document.getElementById("current-winner-name");
    const player1Emoji = document.querySelector(".player1-emoji");
    const player2Emoji = document.querySelector(".player2-emoji");
    const player1Wins = document.querySelector(".player1-wins");
    const player2Wins = document.querySelector(".player2-wins");
  
    // Initialize player objects with default values
    let player1 = {
      name: "Player 1",
      wins: 0,
      emoji: ""
    };
  
    let player2 = {
      name: "Player 2",
      wins: 0,
      emoji: ""
    };
  
    // Initialize variables
    let currentPlayer = player1; // Player 1 starts first
    let gameBoard = Array(9).fill(""); // Initialize an empty game board
    let isGameOver = false; // The game is not over initially
  
    // Map rapper names to their corresponding emoji names
    const rapperEmojis = {
      Drake: '🦉',
      Kendrick: '🥷',
      CardiB: '💰',
      JayZ: '🐐',
      Nipsey: '🏁',
      MeganTheeStallion: '🐎',
      Jeezy: '❄️',
      Dolph: '🐬',
      SnoopDogg: '🌿',
    };
  
    // Function to initialize player avatar dropdowns with options
    function initializeAvatarDropdowns() {
      for (const rapper in rapperEmojis) {
        const option1 = document.createElement("option");
        option1.value = rapper;
        option1.innerText = rapper;
        player1AvatarDropdown.appendChild(option1);
  
        const option2 = document.createElement("option");
        option2.value = rapper;
        option2.innerText = rapper;
        player2AvatarDropdown.appendChild(option2);
      }
    }
  
    // Function to initialize the game and player avatars
    function initializeGame() {
      initializeAvatarDropdowns();
      resetGame();
    }
  
    // Call the function to initialize the game
    initializeGame();
  
    // Function to start the game
    function startGame() {
      resetGame();
      startButton.disabled = true; // Disable the start button after starting
  
      // Assign emojis based on dropdown selections for both players
      player1.emoji = rapperEmojis[player1AvatarDropdown.value];
      player2.emoji = rapperEmojis[player2AvatarDropdown.value];
  
      // Update UI with player emojis
      player1Emoji.textContent = player1.emoji; // Set emoji for player 1
      player2Emoji.textContent = player2.emoji; // Set emoji for player 2
  
      // Enable the Replay button
      replayButton.disabled = false;
    }
  
    // Function to reset the game
    function resetGame() {
      gameBoard = Array(9).fill("");
      currentPlayer = player1;
      isGameOver = false;
  
      squares.forEach(square => {
        square.textContent = "";
        square.classList.remove("winning-square");
      });
  
      currentWinnerName.textContent = "";
    }
  
    // Function to replay the game
    function replayGame() {
      resetGame();
      startButton.disabled = false; // Enable the start button
      replayButton.disabled = true; // Disable the Replay button
    }
  
    // Function to handle a move
    function handleMove(squareIndex) {
      if (!isGameOver && gameBoard[squareIndex] === "") {
        gameBoard[squareIndex] = currentPlayer;
        squares[squareIndex].textContent = currentPlayer.emoji;
  
        if (checkForWinner(currentPlayer)) {
          isGameOver = true;
          showWinner(currentPlayer);
        } else if (gameBoard.every(square => square !== "")) {
          isGameOver = true;
          showDraw();
        } else {
          currentPlayer = currentPlayer === player1 ? player2 : player1;
        }
      }
    }
  
    // Function to check for a win
    function checkForWinner(player) {
      // (existing checkWinner logic)
    }
  
    // Function to display winner
    function showWinner(player) {
      // (existing showWinner logic)
    }
  
    // Function to display draw
    function showDraw() {
      // (existing showDraw logic)
    }
  
    // Event listeners for buttons and squares
    startButton.addEventListener("click", startGame);
    replayButton.addEventListener("click", replayGame);
    squares.forEach((square, index) => {
      square.addEventListener("click", () => handleMove(index));
    });
  
    // Prevent form submission on Enter key press
    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
      }
    });
  });
  