// list of available themes
const themes = [
    "cobalt",
    "dots",
    "hedge",
    "passionfruit",
    "rgb",
    "serika",
    "default"
];

/**
 * Sets the website theme as long as it exists. If the requested theme
 * is the same as the current theme, no operation is done
 */
const setTheme = (theme) => {
    const currentTheme = localStorage.getItem("theme");
    if(currentTheme === theme) {
        console.log("same theme");
        return;
    } else if(currentTheme === null) {
        localStorage.setItem("theme", "default");
        return;
    }

    switch(theme) {
        case themes[0]: localStorage.setItem("theme", themes[0]); break;
        case themes[1]: localStorage.setItem("theme", themes[1]); break;
        case themes[2]: localStorage.setItem("theme", themes[2]); break;
        case themes[3]: localStorage.setItem("theme", themes[3]); break;
        case themes[4]: localStorage.setItem("theme", themes[4]); break;
        case themes[5]: localStorage.setItem("theme", themes[5]); break;
        default:        localStorage.setItem("theme", themes[6]); break;
    }

    const newTheme = localStorage.getItem("theme");
    document.body.classList.replace(`theme-${currentTheme}`,`theme-${newTheme}`);
    console.log(`theme: ${newTheme}`);
}
