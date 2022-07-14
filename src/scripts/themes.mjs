export function OpenThemePopup() {
  if (document.getElementById("themePopup").hidden) {
    document.getElementById("themePopup").hidden = false;
    document.getElementById("doors_icon").hidden = true;
  } else {
    document.getElementById("themePopup").hidden = true;
    document.getElementById("doors_icon").hidden = false;
  }
}

export function SetTheme(event) {
  document.getElementById(
    "themeStylesheet"
  ).href = `styles/themes/${event.target.id}.css`;
  localStorage.setItem("index_theme", `${event.target.id}`);
  localStorage.setItem("theme", `${event.target.id}`);
  CloseThemePopup();
}

function CloseThemePopup() {
  document.getElementById("themePopup").hidden = true;
}

export function GetThemes() {
  // index.html theme check
  if (localStorage.getItem("index_theme") == null) {
    console.log("theme was null");
    document.getElementById(
      "themeStylesheet"
    ).href = `styles/themes/default.css`;
  } else {
    console.log("Getting index themes...");
    let index_theme = localStorage.getItem("index_theme");
    document.getElementById(
      "themeStylesheet"
    ).href = `styles/themes/${index_theme}.css`;
  }

  // rungeon.html theme check
  console.log(document.getElementById("themeStylesheet"));
  if (localStorage.getItem("theme") == null) {
    console.log("theme was null");
    document.getElementById(
      "themeStylesheet"
    ).href = `styles/themes/default.css`;
  } else {
    console.log("Getting rungeon themes...");
    let theme = localStorage.getItem("theme");
    document.getElementById(
      "themeStylesheet"
    ).href = `styles/themes/${theme}.css`;
  }
}
