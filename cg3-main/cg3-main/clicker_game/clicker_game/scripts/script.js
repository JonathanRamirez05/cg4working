//-Start of code provided by Steven Boyd-

const tickRate = 1000 / 30; // 30 frames per second(fps)
let score = 0;

//-End of code provided by Steven Boyd-

let clicksps = 0;

// Buildings are made from classes here.
// Building(name, clicks per second, base cost, button ID)
let blueDrink = new Building('Blue Drink', 1, 15, 'buyBlueDrink', 1);
let yellowDrink = new Building('Yellow Drink', 8, 100, 'buyYellowDrink', 2);
let orangeDrink = new Building('Orange Drink', 47, 1100, 'buyOrangeDrink', 3);
let redDrink = new Building('Red Drink', 100, 12000, 'buyRedDrink', 4);
let purpleDrink = new Building('Purple Drink', 1000, 50000, 'buyPurpleDrink', 5);
let blackDrink = new Building('Black Drink', 5000, 2500000, 'buyBlackDrink', 6);


// Manual click function
function scorePlusPlus() {
    score++;
}

// Increases the score by the current clicks-per-second
function incScore() {
    score += blueDrink.cps + yellowDrink.cps + orangeDrink.cps + redDrink.cps + purpleDrink.cps + blackDrink.cps;
}


// Updates the states of all the Building buttons
function updateButtons() {
    blueDrink.buttonState();
    yellowDrink.buttonState();
    orangeDrink.buttonState();
    redDrink.buttonState();
    purpleDrink.buttonState();
    blackDrink.buttonState();
}

//-Start of code provided by Steven Boyd-

// Everything in the following function updates every tick as set at the top
function updatePage() {
    incScore();
    
    updateButtons();
    document.getElementById('score').innerHTML =
        Math.floor(score).toLocaleString();

//-End of code provided by Steven Boyd-        
        
    document.getElementById('clicksps').innerHTML =
        Math.floor(clicksps).toLocaleString();    
}

  

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }  

setInterval(updatePage, tickRate);

const facts1 = [
  "fact 1",
  "fact 2",
  "fact 3",
  "fact 4",
  "fact 5",
  "fact 6"
];

const facts2 = [
  "fact 1",
  "fact 2",
  "fact 3",
  "fact 4",
  "fact 5",
  "fact 6"
];

let factNumber = 0;

function updateFactAbout(newNumber1) {
  factNumber = newNumber1;
  document.getElementById('customText1').textContent = facts1[factNumber - 1];
}



function updateFactNumber(newNumber2) { 
  factNumber = newNumber2;
  document.getElementById('customText2').textContent = facts2[factNumber - 1];
}

window.onload = function() {
  updateFactNumber(factNumber);
}
