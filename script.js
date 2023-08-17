//PHASE NUMBER 1 >> Declare variables/ constants/ imports

    // >>> Get references to DOM elements
const startButton = document.getElementById("start-button");
const replayButton = document.getElementById("replay-button");
const player1AvatarDropdown = document.getElementById("player1-avatar");
const player2AvatarDropdown = document.getElementById("player2-avatar");
const squares = document.querySelectorAll(".square");
const hallOfFameTable = document.querySelector(".hall-of-fame-table");


    // >>> Initialize variables
let currentPlayer = "player1"; // Player 1 starts first
let gameBoard = Array(9).fill(""); // Initialize an empty game board
let winner = null; // No winner at the start
let isGameOver = false; // The game is not over initially
let totalMoves = 0; // No moves have been made yet


    // >>> Emojis for players imported from the api
    // >>>> Map rapper names to their corresponding emoji names
    const rapperEmojis = {
        Drake: '\u{1F989}',     // 🦉
        Kendrick: '\u{1F977}',  // 🥷
        CardiB: '\u{1F4B0}',     // 💰
        JayZ: '\u{1F410}',      // 🐐
        Nipsey: '\u{1F3C1}',    // 🏁
        MeganTheeStallion: '\u{1F40E}',     // 🐎
        Jeezy: '\u{2744}',      // ❄️
        Dolph: '\u{1F42C}',     // 🐬
        SnoopDogg: '\u{1F33F}'      // 🌿
    };
    
    // Initialize player objects with default values and the logic to choose rapper and match it to its corresponding emoji
    let player1 = {
        name: "Player 1",
        wins: 0,
        emoji: "" // Emoji will be assigned based on dropdown selection
    };
    
    let player2 = {
        name: "Player 2",
        wins: 0,
        emoji: "" // Emoji will be assigned based on dropdown selection
    };
  
// Function to initialize player avatar dropdowns with options
function initializeAvatarDropdowns() {
    for (const rapper in rapperEmojis) {
      // Create a new option element
      const option1 = document.createElement("option");
      const option2 = document.createElement("option");
  
      // Set the value attribute to the rapper name
      option1.value = rapper;
      option2.value = rapper;
  
      // Set the inner text of the option to include the rapper name and emoji
      option1.innerText = `${rapper} ${rapperEmojis[rapper]}`;
      option2.innerText = `${rapper} ${rapperEmojis[rapper]}`;
  
      // Append the options to the dropdowns
      player1AvatarDropdown.appendChild(option1);
      player2AvatarDropdown.appendChild(option2);
    }
  }
  
  // Call the function to initialize the dropdowns
  initializeAvatarDropdowns();
  
  
  
 
  
  

 // >>> Initialize gamebaord and start of game 




// Phase #3 Add event listerns to the functions thats being called on the DOM elements in Phase #1 and Phase #2







// Call the game function to start the game