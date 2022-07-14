// These functions allow us to enable/disable the continue button. Should be combined with other logic for a more interactive stage (grabbing a coin / giving it, etc)

export function Enable_Continue_Button(currentStage) {
  document.getElementById(`stage_${currentStage}-btn`).disabled = false;
}

export function Disable_Continue_Button(currentStage) {
  document.getElementById(`stage_${currentStage}-btn`).disabled = true;
}
