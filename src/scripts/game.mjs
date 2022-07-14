import { GetThemes } from "./themes.mjs";
import { stage } from "../../main.mjs";
import { totalStages } from "../../main.mjs";
// START OF GLOBAL FUNCTIONS

//Some stages require an initial setup before the stage is loaded. This script is run as soon as the page is loaded.
export function Run_Stage_Required_Scripts() {
  // Fetch themes from local storage
  GetThemes();
  //Stage one
  console.log(document.getElementById("stage_1-icon"));
  document.getElementById("stage_1-icon").style.opacity = 1.0;
}

/*
Some stages might require resetting certain elements to their original value, or the other way around (for example, if you grab a coin, go to the next stage and then come back, you shouldn't be able to grab a coin again).
This function runs everytime the stage changes. Use it to setup any logic you need applied in case the user comes back to the stage.
*/

export function Restart() {
  stage = 0;
  window.location.href = "index.html";
}

export function StartGame() {
  stage = 0;
  window.location.href = "rungeon.html";
}

export function Update_Title_Progress() {
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
