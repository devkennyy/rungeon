window.onload = runStageRequiredScripts();

//themeToggler ensures that it needs two clicks on body to close the themePopup, given that a click on the button that opens the popup counts as a click on body as well
var themeToggler = 0;
document.addEventListener('click', function (event) {
  themeToggler = themeToggler += 1;
  if(themeToggler%2 === 0) {
    document.getElementById("themePopup").style.display = "none";
    document.getElementById("doors_icon").style.visibility = "visible";
  }
});

//Global vars
const totalStages = 4;
var stage = 1;

//Stage one vars
var stageOne_ClickCount = 0;
var stageOne_Opacity = 1.0;
var stageOne_BtnDisabled = false;

//Stage two vars
var stageTwo_hasCoin = false;

// START OF GLOBAL FUNCTIONS

//Some stages require an initial setup before the stage is loaded. This script is run as soon as the page is loaded.
function runStageRequiredScripts() {
  // Fetch themes from local storage
  getThemes();

  //Check if user is on index page
  if(window.location.pathname == '/' || window.location.pathname == '/index.html'){
    //Add listener to close theme popup when clicked outside
    addPopupListener();
  }
}

/*
Some stages might require resetting certain elements to their original value, or the other way around (for example, if you grab a coin, go to the next stage and then come back, you shouldn't be able to grab a coin again).
This function runs everytime the stage changes. Use it to setup any logic you need applied in case the user comes back to the stage.
*/

function resetStage(stage) {
  switch (stage) {
    case 1:
      stageOne_ClickCount = 0;
      stageOne_Opacity = 1.0;
      stageOne_BtnDisabled = false;
      document.getElementById("stage_1-icon").style.opacity = 1;
      document.getElementById("stage_1-icon").style.visibility = "visible";
      disableContinueButton(1);
    case 2:
      stageTwo_hasCoin = false;
      document.getElementById("stage_2-coin").style.display = "initial";
      disableContinueButton(2);
    case 3:
      disableContinueButton(3);
      document.getElementById(
        "stage_3-icon"
      ).style.cursor = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='32' height='38' viewport='0 0 100 100' style='fill:black;font-size:19px;'><text y='50%'>🟡</text></svg>") 16 0,auto`;
    default:
      break;
  }
}

/*
We really only need the stage we're in right now. Using template literals (also called "back-ticks" -> ` <-) we can directly grab the ID of the stage we're in, as well as the stage we want to change to.

This kind of setup will allow us to add as many stages as we want, as long as we have one stage called "stage_start" and another called "stage_end".
*/

function previousStage(currentStage) {
  if (currentStage == "end") {
    stage = totalStages;
    document.getElementById(`stage_end`).classList.add("d-none");
    document.getElementById(`stage_${stage}`).classList.remove("d-none");
  } else if (currentStage == 1) {
    stage = 0;
    document.getElementById(`stage_${currentStage}`).classList.add("d-none");
    document.getElementById(`stage_start`).classList.remove("d-none");
  } else {
    stage--;
    document.getElementById(`stage_${currentStage}`).classList.add("d-none");
    document.getElementById(`stage_${stage}`).classList.remove("d-none");
  }
  updateTitleProgress();
  resetStage(stage);
}

function nextStage(currentStage) {
  if (currentStage == "start") {
    stage = 1;
    document.getElementById(`stage_start`).classList.add("d-none");
    document.getElementById(`stage_${stage}`).classList.remove("d-none");
  } else if (currentStage == totalStages) {
    stage = totalStages + 1;
    document.getElementById(`stage_${currentStage}`).classList.add("d-none");
    document.getElementById(`stage_end`).classList.remove("d-none");
  } else {
    stage++;
    document.getElementById(`stage_${currentStage}`).classList.add("d-none");
    document.getElementById(`stage_${stage}`).classList.remove("d-none");
  }
  updateTitleProgress();
  resetStage(stage);
}

// These functions allow us to enable/disable the continue button. Should be combined with other logic for a more interactive stage (grabbing a coin / giving it, etc)

function enableContinueButton(currentStage) {
  document.getElementById(`stage_${currentStage}-btn`).disabled = false;
  document.getElementById(`stage_${currentStage}-btn`).innerHTML = "Continue";
}

function disableContinueButton(currentStage) {
  document.getElementById(`stage_${currentStage}-btn`).disabled = true;
}

function restart() {
  stage = 0;
  window.location.href = "index.html";
}

function startGame() {
  stage = 0;
  window.location.href = "rungeon.html";
}

function toggleThemePopup() {
  if(document.getElementById("themePopup").style.display === "none") {
    document.getElementById("themePopup").style.display = "block";
    document.getElementById("doors_icon").style.visibility = "hidden";
  } else {
    document.getElementById("themePopup").style.display = "none";
    document.getElementById("doors_icon").style.visibility = "visible";
  }
}

//when user clicks outside of theme popup, close it
function addPopupListener() {

  window.addEventListener('click', function (e) {

    if (document.getElementById("themePopup").hidden) {return;}

    if (e.target == document.body) {
      toggleThemePopup();
    }
  })
}

function setTheme(event) {
  try {
    let previousTheme = localStorage.getItem("theme");
    document.getElementById(previousTheme).innerHTML = previousTheme; 
  } catch (error) {
    getThemes();
  }
  
  document.getElementById(
    "themeStylesheet"
  ).href = `styles/themes/${event.target.id}.css`;
  localStorage.setItem("index_theme", `${event.target.id}`);
  localStorage.setItem("theme", `${event.target.id}`);
  document.getElementById(event.target.id).innerHTML +=
    ' <i class="fa-solid fa-check"></i>';
  
  //Only toggle the main theme popup when on index.html (the navbar dropdown has a close of its own)
  if(window.location.pathname == '/' || window.location.pathname == '/index.html'){
    toggleThemePopup();
  }
}


function getThemes() {
  // index.html theme check
  var indexTheme = localStorage.getItem("index_theme");
  if ((indexTheme) === null) {
    document.getElementById(
      "themeStylesheet"
    ).href = `styles/themes/default.css`;
  } else {
    document.getElementById(
      "themeStylesheet"
    ).href = `styles/themes/${indexTheme}.css`;
  }

  // rungeon.html theme check
  var storageTheme = localStorage.getItem("theme");
  if (storageTheme === null) {
    document.getElementById(
      "themeStylesheet"
    ).href = `styles/themes/default.css`;
  } else {
    console.log("Getting rungeon themes...");
    let theme = storageTheme;
    document.getElementById(
      "themeStylesheet"
    ).href = `styles/themes/${theme}.css`;
    document.getElementById(theme).innerHTML +=
      ' <i class="fa-solid fa-check"></i>';
  }
}

function updateTitleProgress() {
  let val = stage / (totalStages + 2);
  switch (true) {
    case val <= 0.1:
      document.title = "██░░░░░░░░";
      break;
    case val <= 0.2:
      document.title = "███░░░░░░░";
      break;
    case val <= 0.3:
      document.title = "████░░░░░░";
      break;
    case val <= 0.4:
      document.title = "█████░░░░░";
      break;
    case val <= 0.5:
      document.title = "██████░░░░";
      break;
    case val <= 0.6:
      document.title = "███████░░░";
      break;
    case val <= 0.7:
      document.title = "████████░░";
      break;
    case val <= 0.8:
      document.title = "██████████";
      break;
  }
}

// END OF GLOBAL FUNCTIONS

// START OF STAGE SPECIFIC FUNCTIONS

/* STAGE ONE */
function stageOneSquish() {
  stageOne_ClickCount++;
  stageOne_Opacity -= 0.4;

  if (stageOne_BtnDisabled == false) {
    document.getElementById("stage_1-icon").style.opacity -= stageOne_Opacity;
  }

  if (stageOne_ClickCount >= 3) {
    enableContinueButton(1);
    stageOne_BtnDisabled = true;
    document.getElementById("stage_1-icon").style.opacity = 0;
    document.getElementById("stage_1-icon").style.visibility = "hidden";
  }
}

/* STAGE TWO */
function stageTwoCoin() {
  document.getElementById("stage_2-coin").style.display = "none";
  stageTwo_hasCoin = true;
}

/* STAGE THREE */
function stageThreeCoin() {
  if (stageTwo_hasCoin) {
    enableContinueButton(3);
    document.getElementById("stage_3-btn").disabled = false;
    document.getElementById("stage_3-icon").style.cursor = "auto";
  }
}

/* STAGE FOUR */
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}


function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  document.getElementById("stage_4-h1").textContent = "The door is unlocked";
  document.getElementById("stage_4-p").textContent =
    "I knew that was useful, good work!";
  enableContinueButton(4);
}
