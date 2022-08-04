window.onload = runStageRequiredScripts();


//Some stages require an initial setup before the stage is loaded. This script is run as soon as the page is loaded.
function runStageRequiredScripts() {
  //Add checkmark to popup item
  addCheckMark();

  //Check if user is on index page
  if (window.location.pathname == "/") {
    //Add listener to close theme popup when clicked outside
    addPopupListener();
  }

  //Set theme in localStorage if it doesn't exist
  if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "default");
  }
}
function toggleThemePopup() {
  if (document.getElementById("themePopup").style.display === "none") {
    document.getElementById("themePopup").style.display = "block";
    document.getElementById("doors_icon").style.visibility = "hidden";
  } else {
    document.getElementById("themePopup").style.display = "none";
    document.getElementById("doors_icon").style.visibility = "visible";
  }
}

//when user clicks outside of theme popup, close it
function addPopupListener() {
  window.addEventListener("click", function (e) {
    if (document.getElementById("themePopup").style.display == "none") {
      return;
    }

    if (e.target == document.body) {
      toggleThemePopup();
    }
  });
}
