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


    // >>> Emojis for players imported from the api
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
  
  async function updatePlayerAvatars() {
    const selectedRapper1 = player1AvatarDropdown.value;
    const selectedRapper2 = player2AvatarDropdown.value;
  
    const emoji1 = await getRapperEmoji(selectedRapper1);
    const emoji2 = await getRapperEmoji(selectedRapper2);
  
    player1.emoji = emoji1;
    player2.emoji = emoji2;
  
    // Update the emojis displayed in the dropdown options
    player1AvatarDropdown.options[selectedRapper1].innerText = `${selectedRapper1} ${emoji1}`;
    player2AvatarDropdown.options[selectedRapper2].innerText = `${selectedRapper2} ${emoji2}`;
  }
  
  // Function to get the emoji for a rapper
  async function getRapperEmoji(rapperName) {
    try {
      const emojiName = rapperEmojiNames[rapperName];
      const response = await api.search(emojiName);
      const emoji = response[0]?.character || '';
      return emoji;
    } catch (error) {
      console.error("Error fetching rapper emoji:", error);
      return '';
    }
  }

 // >>> Initialize gamebaord and start of game 



 
// Phase #3 Add event listerns to the functions thats being called on the DOM elements in Phase #1 and Phase #2







// Call the game function to start the game