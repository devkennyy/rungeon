console.log(
  "01001001 01101110 00100000 01110000 01110010 01101111 01100111 01110010 01100101 01110011 01110011 00101110 00101110 00101110"
);

function returnHome() {
  window.location.href = "index.html";
}

function goToDungeon() {
  window.location.href = "rungeon.html";
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
