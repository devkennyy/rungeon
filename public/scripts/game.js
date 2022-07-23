// todo: add stage switching functionality
var stageCounter = 0;

setStage(stages[stageCounter]);

document.getElementById('stage-btn-next').addEventListener('click', () => {
  stageCounter++;
  setStage(stages[stageCounter]);
});

document.getElementById('stage-btn-back').addEventListener('click', () => {
  stageCounter--;
  setStage(stages[stageCounter]);
});

document.getElementById('stage-btn-restart').addEventListener('click', () => {
  stageCounter = 0;
  setStage(stages[stageCounter]);
});
