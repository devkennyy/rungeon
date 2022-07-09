window.onload = Run_Stage_Required_Scripts();

const totalStages = 3;
var stage = 1;

//Stage one vars
var stageOne_ClickCount = 0;
var stageOne_Opacity = 1.0;
var stageOne_BtnDisabled = false;

//Stage two vars
var stageTwo_hasCoin = false;

// START OF GLOBAL FUNCTIONS

//Some things require initial setup before the stage is loaded. This script is run as soon as the page is loaded.
function Run_Stage_Required_Scripts() {

  //Stage one
  document.getElementById("stage_1-icon").style.opacity = 1.0;


}

/*
Some stages might require resetting certain elements to their original value, or the other way around (for example, if you grab a coin, go to the next stage and then come back, you shouldn't be able to grab a coin again).
This function runs everytime the stage changes. Use it to setup any logic you need applied in case the user comes back to the stage.
*/

function Reset_Stage(stage)
{
  switch (stage) {
    /*
    
    Example:

    case 3:
     (your changes here);
     break;

    */
    default:
      break;
  }
}

/*
We really only need the stage we're in right now. Using template literals (also called "back-ticks" -> ` <-) we can directly grab the ID of the stage we're in, as well as the stage we want to change to. It can be done in even less lines of code, but readability is important too.

As for the function itself, all I'm doing is adding / removing the class "d-none", a bootstrap class that sets the display to 'none'.
This kind of setup will allow us to add as many stages as we want, as long as we have one stage called "stage_start" and another called "stage_end".
*/

function Previous_Stage(currentStage)
{
  if (currentStage == 'end')
  {

    stage = totalStages;
    document.getElementById(`stage_end`).classList.add('d-none');
    document.getElementById(`stage_${stage}`).classList.remove('d-none');

  } else if (currentStage == 1)
  {

    stage = 0;
    document.getElementById(`stage_${currentStage}`).classList.add('d-none');
    document.getElementById(`stage_start`).classList.remove('d-none');

  } else {

    stage--;
    document.getElementById(`stage_${currentStage}`).classList.add('d-none');
    document.getElementById(`stage_${stage}`).classList.remove('d-none');

  }
  Update_Title_Progress();
}

function Next_Stage(currentStage)
{
  if (currentStage == 'start') {

    stage = 1;
    document.getElementById(`stage_start`).classList.add('d-none');
    document.getElementById(`stage_${stage}`).classList.remove('d-none');
  } else if (currentStage == totalStages) {

    stage = (totalStages + 1);
    document.getElementById(`stage_${currentStage}`).classList.add('d-none');
    document.getElementById(`stage_end`).classList.remove('d-none');
  } else {

    stage++;
    document.getElementById(`stage_${currentStage}`).classList.add('d-none');
    document.getElementById(`stage_${stage}`).classList.remove('d-none');

  }
  Update_Title_Progress();
}

function Enable_Continue_Button(currentStage)
{
  document.getElementById(`stage_${currentStage}-btn`).disabled = false;
}

function Disable_Continue_Button(currentStage)
{
  document.getElementById(`stage_${currentStage}-btn`).disabled = true;
}

function Restart() {
  stage = 0;
  window.location.href = "index.html";
}

function StartGame()
{
  stage = 0;
  window.location.href = "rungeon.html";
}

function Update_Title_Progress() {
  
  let val = (stage / (totalStages + 2));
  console.log(val);
  switch(true)
  {
    case (val <= 0.1):
      document.title = "██░░░░░░░░";
    break;
    case (val <= 0.2):
      document.title = "███░░░░░░░";
    break;
    case (val <= 0.3):
      document.title = "████░░░░░░";
    break;
    case (val <= 0.4):
      document.title = "█████░░░░░";
    break;
    case (val <= 0.5):
      document.title = "██████░░░░";
    break;
    case (val <= 0.6):
      document.title = "███████░░░";
    break;
    case (val <= 0.7):
      document.title = "████████░░";
    break;
    case (val <= 0.8):
      document.title = "██████████";
    break;

  }

}

// END OF GLOBAL FUNCTIONS




// START OF STAGE SPECIFIC FUNCTIONS

/* STAGE ONE */
function Stage_One_Squish() {
  stageOne_ClickCount++;
  stageOne_Opacity -= 0.4;

  if (stageOne_BtnDisabled == false)
  {
    document.getElementById("stage_1-icon").style.opacity -= stageOne_Opacity;
  }

  if (stageOne_ClickCount >= 3) {
    Enable_Continue_Button(1);
    stageOne_BtnDisabled = true;
    document.getElementById("stage_1-icon").style.opacity = 0;
    document.getElementById("stage_1-icon").style.visibility = 'hidden';
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
  }
}




const finalButton = document.querySelector("#finalButton");
finalButton.addEventListener("click", () => {
  new Notify({
    status: "warning",
    title: "This isn't the end",
    text: "Rungeon is a work in progress, stay tuned",
    effect: "fade",
    speed: 300,
    customClass: "",
    customIcon: "👀",
    showIcon: true,
    showCloseButton: true,
    autoclose: true,
    autotimeout: 3000,
    gap: 20,
    distance: 20,
    type: 1,
    position: "right top",
  });
});

