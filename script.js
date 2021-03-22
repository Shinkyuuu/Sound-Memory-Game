// Global constants
const nextClueWaitTime = 1000; // How long to wait before playing sequence
const freqMap = {
  1: 'C', //523.25, // C
  2: 'D', //587.33, // D
  3: 'E', //659.26, // E
  4: 'F', //698.46, // F
  5: 'G', //783.99, // G
  6: 'A' //880.0 // A
};


// Global Variables
var clueHoldTime; // How long to hold each clue's light/sound (Determined in challengePatternTime function)
var cluePauseTime; // How long to pause in between clues (Determined in challengePatternTime function)
var patternTimeout;
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var colorBlind = false;
var volume = 0.2; // Must be between 0.0 and 1.0
var guessCounter = 0;
var failCounter = 3;
var modeDict = {
  "normalMode": true,
  "lambMode": false, 
  "randomMode": false, 
  "challengeMode":false
};
var prevMode = "normalMode";
var timer; // (Determined in guess function)
var timerCounter; // (Determined in guess function)


function colorBlindOn() {
  for (let i = 1; i <= 6; i++) {
    document.getElementById("button" + i).classList.add("colorblind");
  }
}


function colorBlindOff() {
  for (let i = 1; i <= 6; i++) {
    document.getElementById("button" + i).classList.remove("colorblind");
  }
}


// Toggle on/off colorblind mode
function colorBlindToggle() {
  // Toggle colorblind on and off!
  colorBlind = !colorBlind;

  if (colorBlind) {
    document.getElementById("colorBlindBtn").classList.add("on");
    colorBlindOn();
    console.log("Colorblind mode turned on");
  } else {
    document.getElementById("colorBlindBtn").classList.remove("on");
    colorBlindOff();
    console.log("Colorblind mode turned off");
  }
}


// User toggles between the game modes!
function modeSelector(mode) {
  if (gamePlaying) {
    stopGame();
  }
  
  modeDict[mode] = true;
  document.getElementById(mode).classList.add("on");
  modeDict[prevMode] = false;
  
  if (!(prevMode == "normalMode")) {
    document.getElementById(prevMode).classList.remove("on");
  }
  
  if (prevMode ==mode) {
    prevMode = "normalMode";
    modeDict[prevMode] = true;
  } else {
    prevMode = mode;
  }
}


function lambMode() {
  //If lamb mode is active, make the pattern 'Mary Had a Little Lamb'
  if (modeDict["lambMode"]) {
    pattern = [3, 2, 1, 2, 3, 3, 3, 2, 2, 2, 3, 5, 5];
  }
}


function challengeMode() {
  //If lamb mode is active, make the pattern 'Mary Had a Little Lamb'
  if (modeDict["challengeMode"]) {
    pattern = [];
    for (let i = 0; i < 20; i++) {
      pattern.push(Math.floor(Math.random() * 6) + 1);
    }
  }
}


// The speed of the pattern played before the user's turn
function challengePatternTime(level) {
  if (modeDict["challengeMode"]) {
    clueHoldTime = (600/(level + 1)) + 80;
    cluePauseTime = (150/(level + 1)) + 80;
  } else {
    clueHoldTime = 700; 
    cluePauseTime = 250;
  }
}


function randomMode() {
  //If random mode is active, then replace the pattern with random integers.
  if (modeDict["randomMode"]) {
    pattern = [];
    for (let i = 0; i < 8; i++) {
      pattern.push(Math.floor(Math.random() * 6) + 1);
    }
  }
}


function normalMode() {
    //If normal mode is active, then everything is... normal.
  if (modeDict["normalMode"] == true) {
    pattern = [2, 6, 5, 3, 2, 1, 2, 4];
  }
}


function startGame() {
  // Initialize game variables
  progress = 0;
  
  // Check modes
  lambMode();
  randomMode();
  challengeMode();
  normalMode();

  // Swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  gamePlaying = true;
  playClueSequence();
}


function stopGame() {
  // Finalize game variables
  gamePlaying = false;
  failCounter = 3;
  
  // Reset Game
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("levelCounter").innerHTML = "&nbsp";

  for (let i = 1; i <= 3; i++) {
    document.getElementById("life" + i).classList.remove("hidden");
  }
}


function winGame() {
  stopGame();
  alert("You Win!!!");
}


function loseGame() {
  stopGame();
  alert("Game Over. You Lost.");
}


function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}


function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}


// Disable game buttons when not user's turn
function disableGameBtn() {
  for (let i = 1; i <= 6; i++) {
    document.getElementById("button" + i).disabled = true;
    document.getElementById("button" + i).classList.remove("clickable");
  }
}


// Enable game buttons when user's turn
function enableGameBtn() {
  for (let i = 1; i <= 6; i++) {
    document.getElementById("button" + i).disabled = false;
    document.getElementById("button" + i).classList.add("clickable");
  }
}


function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  } else {
    clearTimeout(patternTimeout);
  }
}


function playClueSequence() {
  challengePatternTime(progress);
  console.log(progress);
  disableGameBtn();
  guessCounter = 0;
  document.getElementById("levelCounter").innerHTML = "Level: " + (progress + 1);
  let delay = nextClueWaitTime; // Set delay to initial wait time

  for (let i = 0; i <= progress; i++) {
    // For each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    patternTimeout = setTimeout(playSingleClue, delay, pattern[i]); // Set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }

  setTimeout(enableGameBtn, delay);
}


// user guesses a button.
function guess(btn) {
  timerCounter = 500;
  clearInterval(timer);
  
  if (!gamePlaying) {
    return;
  }
  
  console.log("User guessed: " + btn);
  
  if (pattern[guessCounter] == btn) {
    // User guessed correctly.
    if (guessCounter == progress) {
      document.getElementById("timeLeft").innerHTML = "&nbsp";
      if (guessCounter == pattern.length - 1) {
        // User wins!!!
        winGame();
      } else {
        // User beats the round, time for the next one!
        progress++;
        playClueSequence();
      }
    } else {
      // If challengeMode, give user a limited time to guess next button.
      if (modeDict["challengeMode"]) { 
        document.getElementById("timeLeft").innerHTML = "Time Left: " + timerCounter;
        timer = setInterval(challengeTimer, 1);
      }
      
      // Time to check user's next guess
      guessCounter++;
    }
  } else {
    //User Guesses Wrong :(
    userWrong();
  }
}


// The timer for challengeMode
function challengeTimer() {
  document.getElementById("timeLeft").innerHTML = "Time Left: " + (timerCounter - 1);

  // If the timer reaches zero, the user loses a life and pattern replays.
  if (timerCounter <= 0) {
    userWrong();
    playClueSequence();
    clearInterval(timer);
  }
  
  timerCounter--;
}


// What happens when user guesses incorrectly
function userWrong() {
  failCounter--;
  document.getElementById("timeLeft").innerHTML = "&nbsp";
  
  // If user runs out of lives, he/she loses.
  if (failCounter <= 0) {
    loseGame();
  } else {
    console.log("Oh no!, only " + failCounter + " lives left :(");
    document.getElementById("life" + (failCounter + 1)).classList.add("hidden");
    playClueSequence();
  }
}


function playTone(btn, len) {
  document.getElementById("piano" + freqMap[btn]).play();
  tonePlaying = true;
  setTimeout(function() {
    stopTone(btn);
  }, len);
}


function startTone(btn) {
  if (!tonePlaying) {
    document.getElementById("piano" + freqMap[btn]).play();
    tonePlaying = true;
  }
}


function stopTone(btn) {
  document.getElementById("piano" + freqMap[btn]).pause();
  document.getElementById("piano" + freqMap[btn]).currentTime = 0;
  tonePlaying = false;
}
