window.onload = runStageRequiredScripts();

//themeToggler ensures that it needs two clicks on body to close the themePopup, given that a click on the button that opens the popup counts as a click on body as well
var themeToggler = 0;
document.addEventListener("click", function (event) {
  themeToggler++;
  if ((themeToggler & 2) === 0) {
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
  //Check if user is on index page
  if (window.location.pathname == "/" || window.location.pathname == "/index.html") {
    //Add listener to close theme popup when clicked outside
    addPopupListener();
  }
}

function toggleThemePopup() {
  themeToggler = 2;
  if (document.getElementById("themePopup").style.display === "none") {
    document.getElementById("themePopup").style.display = "block";
    document.getElementById("doors_icon").style.visibility = "hidden";
  } else {
    document.getElementById("themePopup").style.display = "none";
    document.getElementById("doors_icon").style.visibility = "visible";
  }
}

//when user clicks outside of theme popup, close it
function addPopupListener() {

  window.addEventListener("click", function (e) {

    if (document.getElementById("themePopup").hidden) { return; }

    if (e.target == document.body) {
      toggleThemePopup();
    }
  });
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
