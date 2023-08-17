//PHASE NUMBER 1 >> Declare variables/ constants/ imports

// >>> Import and Initialize Emoji API:
// >>> Import the emoji-api library and create an instance of the EmojiApi class.
import emojiApi from 'emoji-api';
const api = new emojiApi.EmojiApi();


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


// >>> Emojis for players coing from the api
// >>>> Map rapper names to their corresponding emoji names
const rapperEmojiNames = {
    drake: 'owl',
    kendrick: 'black_ninja',
    cardi: 'moneybag',
    jayz: 'goat',
    nipsey: 'checkered_flag',
    megan: 'horse',
    jeezy: 'snowflake',
    dolph: 'dolphin',
    snoop: 'weed'
  };

 // >>> Initialize player objects with default values and the logic to choode rapper and match it to its corresponding emoji 
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
  
  // >>> Event listener for the player avatar dropdowns
  player1AvatarDropdown.addEventListener("change", updatePlayerAvatars);
  player2AvatarDropdown.addEventListener("change", updatePlayerAvatars);
  
  // Function to update player avatars based on dropdown selection
  function updatePlayerAvatars() {
    const selectedRapper1 = player1AvatarDropdown.value;
    const selectedRapper2 = player2AvatarDropdown.value;
  
    player1.emoji = rapperEmojiNames[selectedRapper1];
    player2.emoji = rapperEmojiNames[selectedRapper2];
  }



// Phase #3 Add event listerns to the functions thats being called on the DOM elements in Phase #1 and Phase #2







// Call the game function to start the game