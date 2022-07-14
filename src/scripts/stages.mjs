import { Update_Title_Progress } from "./game.mjs";
import { stage } from "../../main.mjs";
import { setStage } from "../../main.mjs";
import { stageOne_ClickCount } from "../../main.mjs";
import { stageOne_Opacity } from "../../main.mjs";
import { stageOne_BtnDisabled } from "../../main.mjs";
import { setStageOne_Opacity } from "../../main.mjs";
import { setStageOne_ClickCount } from "../../main.mjs";
import { setStageOne_BtnDisabled } from "../../main.mjs";
import { Disable_Continue_Button } from "./button-controller.mjs";
import { stageTwo_hasCoin } from "../../main.mjs";
import { setStageTwo_hasCoin } from "../../main.mjs";
import { totalStages } from "../../main.mjs";

export function Reset_Stage(stage) {
  switch (stage) {
    case 1:
      setStageOne_ClickCount(0);
      setStageOne_Opacity(1.0);
      setStageOne_BtnDisabled(false);
      document.getElementById("stage_1-icon").style.opacity = 1;
      document.getElementById("stage_1-icon").style.visibility = "visible";
      Disable_Continue_Button(1);
    case 2:
      setStageTwo_hasCoin(false);
      document.getElementById("stage_2-coin").style.display = "initial";
      Disable_Continue_Button(2);
    case 3:
      Disable_Continue_Button(3);
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

export function Previous_Stage(currentStage) {
  if (currentStage == "end") {
    setStage(totalStages);
    document.getElementById(`stage_end`).classList.add("d-none");
    document.getElementById(`stage_${stage}`).classList.remove("d-none");
  } else if (currentStage == 1) {
    setStage(0);
    document.getElementById(`stage_${currentStage}`).classList.add("d-none");
    document.getElementById(`stage_start`).classList.remove("d-none");
  } else {
    setStage(stage - 1);
    document.getElementById(`stage_${currentStage}`).classList.add("d-none");
    document.getElementById(`stage_${stage}`).classList.remove("d-none");
  }
  Update_Title_Progress();
  Reset_Stage(stage);
}

export function Next_Stage(currentStage) {
  if (currentStage == "start") {
    setStage(1);
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
  Update_Title_Progress();
  Reset_Stage(stage);
}
