var stageCounter = 0;
var totalStages = stages.length - 2;

// TODO: if the user is on the final stage display a different title since 6/5 is innaccurate

function updateTitleProgress() {
  document.title = "Stage " + (stageCounter ) + "/" + totalStages;
}

document.getElementById("stage-btn-next").addEventListener("click", () => {
  if (stageCounter == stages.length - 1) {
    return;
  }

  stageCounter++;
  setStage(stages[stageCounter]);
  updateTitleProgress();
});

document.getElementById("stage-btn-back").addEventListener("click", () => {
  if (stageCounter == 0) {
    return;
  }

  stageCounter--;
  setStage(stages[stageCounter]);
  updateTitleProgress();
});

document.getElementById("stage-btn-restart").addEventListener("click", () => {
  stageCounter = 0;
  setStage(stages[stageCounter]);
});
