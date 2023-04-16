// list of available themes
const themes = ["cobalt", "dots", "hedge", "passionfruit", "rgb", "serika", "default"];

/**
 * Determines if provided theme names are the unique and therefore would
 * require a local storage update. For the cases in which no theme is present
 * in local storage, the default theme gets set
 *
 * Returns 1 if an update is needed and 0 otherwise
 */
const checkNewTheme = (currentTheme, theme) => {
  if (currentTheme === theme) {
    console.log("same theme");
    return 0;
  } else if (currentTheme === null) {
    localStorage.setItem("theme", "default");
    console.log("set default theme");
    return 0;
  }
  return 1;
};

/**
 * Sets the website theme as long as it exists. If the requested theme
 * is the same as the current theme, no operation is done
 */
const setTheme = theme => {
  const currTheme = localStorage.getItem("theme");
  if (!checkNewTheme(currTheme, theme)) return;

  switch (theme) {
    case themes[0]:
      localStorage.setItem("theme", themes[0]);
      break;
    case themes[1]:
      localStorage.setItem("theme", themes[1]);
      break;
    case themes[2]:
      localStorage.setItem("theme", themes[2]);
      break;
    case themes[3]:
      localStorage.setItem("theme", themes[3]);
      break;
    case themes[4]:
      localStorage.setItem("theme", themes[4]);
      break;
    case themes[5]:
      localStorage.setItem("theme", themes[5]);
      break;
    default:
      localStorage.setItem("theme", themes[6]);
      break;
  }

  getTheme(currTheme);

  //Check if user is on index page
  if (window.location.pathname == "/") {
    toggleThemePopup();
  }
};

const getTheme = oldTheme => {
  const newTheme = localStorage.getItem("theme");
  document.body.classList.replace(`theme-${oldTheme}`, `theme-${newTheme}`);
  addCheckMark();
  // if (newTheme !== undefined) {
  //   document.body.classList.add(`theme-${newTheme}`);
  //   console.log(`theme: ${newTheme}`);
  //   return;
  // }
};

function addCheckMark() {
  $("i").remove(".fa-check");
  $(`#${localStorage.getItem("theme")}`).append(" <i class=\"fa-solid fa-check\"></i>");
}

function progressVisabilityToggle() {
  $("#progress-container").toggle();

  if ($("#progress-container").is(":visible")) {
    $("#visabilityIcon").removeClass("fa-eye-slash").addClass("fa-eye");
  } else {
    $("#visabilityIcon").removeClass("fa-eye").addClass("fa-eye-slash");
  }
}
