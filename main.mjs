import { Run_Stage_Required_Scripts } from "./src/scripts/game.mjs";
window.onload = Run_Stage_Required_Scripts();

//Global vars
const totalStages = 4;
var stage = 1;

//Stage one vars
var stageOne_ClickCount = 0;
var stageOne_Opacity = 1.0;
var stageOne_BtnDisabled = false;

//Stage two vars
var stageTwo_hasCoin = false;

// START OF STAGE SPECIFIC FUNCTIONS

/* STAGE ONE */
function Stage_One_Squish() {
  stageOne_ClickCount++;
  stageOne_Opacity -= 0.4;

  if (stageOne_BtnDisabled == false) {
    document.getElementById("stage_1-icon").style.opacity -= stageOne_Opacity;
  }

  if (stageOne_ClickCount >= 3) {
    Enable_Continue_Button(1);
    stageOne_BtnDisabled = true;
    document.getElementById("stage_1-icon").style.opacity = 0;
    document.getElementById("stage_1-icon").style.visibility = "hidden";
  }
}

/* STAGE TWO */
function Stage_Two_Coin() {
  document.getElementById("stage_2-coin").style.display = "none";
  stageTwo_hasCoin = true;
}

/* STAGE THREE */
function Stage_Three_Coin() {
  if (stageTwo_hasCoin) {
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
  Enable_Continue_Button(4);
}
