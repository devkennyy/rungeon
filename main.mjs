import { Run_Stage_Required_Scripts } from "./src/scripts/game.mjs";
import { Previous_Stage } from "./src/scripts/stages.mjs";
import { Next_Stage } from "./src/scripts/stages.mjs";

window.onload = Run_Stage_Required_Scripts();
const start = document.getElementsByClassName("btn");
start[0].addEventListener("click", () => {
  Next_Stage("start");
});
const stage1 = document.getElementById("stage_1-btn");
const stage2 = document.getElementById("stage_2-btn");
const stage3 = document.getElementById("stage_3-btn");
const stage4 = document.getElementById("stage_4-btn");
const prev_stage = document.getElementById("prev_stage");

stage1.addEventListener("click", () => {
  Next_Stage(1);
});
stage2.addEventListener("click", () => {
  Next_Stage(2);
});
stage3.addEventListener("click", () => {
  Next_Stage(3);
});
stage4.addEventListener("click", () => {
  Next_Stage(4);
});
prev_stage.addEventListener("click", () => {
  Previous_Stage(1);
});
//Global vars
export const totalStages = 4;
export let stage = 1;

//Stage one vars
export var stageOne_ClickCount = 0;
export var stageOne_Opacity = 1.0;
export var stageOne_BtnDisabled = false;

//Stage two vars
export var stageTwo_hasCoin = false;
//this function to change the value of the stage
export function setStageTwo_hasCoin(value) {
  stage = value;
}
export function setStage(value) {
  stage = value;
}
export function setStageOne_ClickCount(value) {
  stageOne_ClickCount = value;
}
export function setStageOne_Opacity(value) {
  stageOne_Opacity = value;
}
export function setStageOne_BtnDisabled(value) {
  stageOne_BtnDisabled = value;
}
// START OF STAGE SPECIFIC FUNCTIONS

/* STAGE ONE */
export function Stage_One_Squish() {
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
export function Stage_Two_Coin() {
  document.getElementById("stage_2-coin").style.display = "none";
  stageTwo_hasCoin = true;
}

/* STAGE THREE */
export function Stage_Three_Coin() {
  if (stageTwo_hasCoin) {
    document.getElementById("stage_3-btn").disabled = false;
    document.getElementById("stage_3-icon").style.cursor = "auto";
  }
}

/* STAGE FOUR */
export function allowDrop(ev) {
  ev.preventDefault();
}

export function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

export function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  document.getElementById("stage_4-h1").textContent = "The door is unlocked";
  document.getElementById("stage_4-p").textContent =
    "I knew that was useful, good work!";
  Enable_Continue_Button(4);
}
