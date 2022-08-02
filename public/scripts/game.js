var stageCounter = 0;
var totalStages = stages.length - 2;

// TODO: if the user is on the final stage display a different title since 6/5 is innaccurate

function updateProgressBar() {
  let percentage = (stageCounter / (totalStages + 1)) * 100;
  $(".progress-bar").css("width", `${percentage}%`);
  $(".fa-person-running").css("left", `${percentage - 1}%`);

  //Start the icon run animation
  $(".fa-person-running").addClass("animateRun");

  //Stop the run animation after the progress bar stops moving
  setTimeout(function () {
    $(".fa-person-running").removeClass("animateRun");
  }, 600);
}

document.getElementById("stage-btn-next").addEventListener("click", () => {
  if (stageCounter == stages.length - 1) {
    return;
  }

  stageCounter++;

  stageReset(stages[stageCounter - 1]);
  setStage(stages[stageCounter]);
  updateProgressBar();
});

document.getElementById("stage-btn-back").addEventListener("click", () => {
  if (stageCounter == 0) {
    return;
  }

  stageCounter--;
  setStage(stages[stageCounter]);
  stageReset(stages[stageCounter + 1]);
  updateProgressBar();
});

document.getElementById("stage-btn-restart").addEventListener("click", () => {
  console.log("restart clicked");
  stageCounter = 0;

  for (let i = 0; i < stages.length; i++) {
    console.log(stages[i].id);
    stages[i].completed = false;
  }
  setStage(stages[stageCounter]);
  updateProgressBar();
});
