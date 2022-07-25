var stageCounter = 0;


document.getElementById("stage-btn-next").addEventListener("click", () => {
  if(stageCounter == stages.length - 1) {
    return;
  }

  stageCounter++;
  setStage(stages[stageCounter]);
});

document.getElementById("stage-btn-back").addEventListener("click", () => {
  if(stageCounter == 0) {
    return;
  }
  
  stageCounter--;
  setStage(stages[stageCounter]);
});

document.getElementById("stage-btn-restart").addEventListener("click", () => {
  stageCounter = 0;
  setStage(stages[stageCounter]);
});
