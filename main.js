document.querySelector(".one").style.display = "flex";

function returnHome() {
  window.location.href = "index.html";
}

function goToDungeon() {
  window.location.href = "rungeon.html";
}

function toScreenTwo() {
  document.title = "Room Two";
  document.querySelector(".one").style.display = "none";
  document.querySelector(".two").style.display = "flex";
}

function toScreenThree() {
  document.title = "Room Three";
  document.querySelector(".two").style.display = "none";
  document.querySelector(".three").style.display = "flex";
}

function toScreenFour() {
  document.title = "Room Four";
  document.querySelector(".three").style.display = "none";
  document.querySelector(".four").style.display = "flex";
}

function toScreenFive() {
  document.title = "Room Five";
  document.querySelector(".four").style.display = "none";
  document.querySelector(".five").style.display = "flex";
}

function takeCoin() {
  document.getElementById("key").style.display = "none";
  foo();
}

let hasCoin;
function foo() {
  hasCoin = true;
  return hasCoin;
}

clickCount = 0;
opacityVal = 1;
function squashBug() {
  clickCount++;
  opacityVal -= 0.4;
  document.getElementById("bugIcon").style.opacity = opacityVal;
  if (clickCount == 3) {
    document.getElementById("bugButton").disabled = false;
    document.getElementById("bugButton").style.opacity = "1";
  }
}

function checkForKey() {
  if (hasCoin) {
    document.getElementById("dragonIcon").style.cursor = "pointer";
    document.getElementById("screenFourButton").disabled = false;
    document.getElementById("screenFourButton").style.opacity = "1";
  } else {
    document.getElementById("dragonIcon").style.cursor = "not-allowed";
  }
}
