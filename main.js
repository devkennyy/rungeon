function exitGame() {
  window.close();
}

function toScreenTwo() {
  document.title = "██░░░░░░░░";
  document.getElementById("screenOne").style.display = "none";
  document.getElementById("screenTwo").style.display = "block";
}

function toScreenThree() {
  document.title = "████░░░░░░";
  document.getElementById("screenTwo").style.display = "none";
  document.getElementById("screenThree").style.display = "block";
}

function toScreenFour() {
  document.title = "██████░░░░";
  document.getElementById("screenThree").style.display = "none";
  document.getElementById("screenFour").style.display = "block";
  console.log("🔑");
}

function toScreenFive() {
  document.title = "████████░░";
  document.getElementById("screenFour").style.display = "none";
  document.getElementById("screenFive").style.display = "block";
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
    document.getElementById("screenFourButton").disabled = false;
    document.getElementById("screenFourButton").style.opacity = "1";
  } else {
    console.log("you dont have a coin");
    document.getElementById("coinComment").textContent("Well, you killed us!");
  }
}

// TODO unlock navbar (achivements)
