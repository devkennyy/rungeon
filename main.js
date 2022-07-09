function returnHome() {
  window.location.href = "index.html";
}

function goToDungeon() {
  window.location.href = "rungeon.html";
}

function toScreenTwo() {
  document.title = "Room Two";
  document.getElementById("screenOne").style.display = "none";
  document.getElementById("screenTwo").style.display = "flex";
}

function toScreenThree() {
  document.title = "Room Three";
  document.getElementById("screenTwo").style.display = "none";
  document.getElementById("screenThree").style.display = "flex";
}

function toScreenFour() {
  document.title = "Room Four";
  document.getElementById("screenThree").style.display = "none";
  document.getElementById("screenFour").style.display = "flex";
}

function toScreenFive() {
  document.title = "Room Five";
  document.getElementById("screenFour").style.display = "none";
  document.getElementById("screenFive").style.display = "flex";
}

function takeCoin() {
  document.getElementById("key").style.display = "none";
  foo();
}

let hasCoin = false;
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
    document.getElementById("dragonIcon").style.cursor ="grab";
    document.getElementById("screenFourButton").disabled = false;
    document.getElementById("screenFourButton").style.opacity = "1";
  } else {
    document.getElementById("dragonIcon").style.cursor = "not-allowed";
  }
}