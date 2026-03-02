let accessibilityToggleVar = 0;

function toggleDropdown(id) {
    const content = document.getElementById(id);

    if (content.classList.contains('show')) {
        content.classList.remove('show');
    } else {
        content.classList.remove('show');
        content.querySelectorAll('button').forEach(btn => {
            btn.style.transition = 'none';
            btn.style.transform = 'translateY(-40px)';
        });

        content.offsetHeight;

        content.querySelectorAll('button').forEach(btn => {
            btn.style.transition = '';
            btn.style.transform = '';
        });

        content.classList.add('show');
    }
}

function randomNekoStamp() {
    const image = document.getElementById("nekowebStamp");

    chosen = Math.floor(Math.random() * 10) + 1;
    switch (chosen) {
        case 1: image.setAttribute("src", "https://nekoweb.org/assets/buttons/button1.gif"); break;
        case 2: image.setAttribute("src", "https://nekoweb.org/assets/buttons/button2.gif"); break;
        case 3: image.setAttribute("src", "https://nekoweb.org/assets/buttons/button3.gif"); break;
        case 4: image.setAttribute("src", "https://nekoweb.org/assets/buttons/button4.gif"); break;
        case 5: image.setAttribute("src", "https://nekoweb.org/assets/buttons/button5.gif"); break;
        case 6: image.setAttribute("src", "https://nekoweb.org/assets/buttons/button6.gif"); break;
        case 7: image.setAttribute("src", "https://nekoweb.org/assets/buttons/button7.gif"); break;
        case 8: image.setAttribute("src", "https://nekoweb.org/assets/buttons/button8.gif"); break;
        case 9: image.setAttribute("src", "https://nekoweb.org/assets/buttons/button9.gif"); break;
        case 10: image.setAttribute("src", "https://nekoweb.org/assets/buttons/button10.png"); break;
        case 11: image.setAttribute("src", "https://nekoweb.org/assets/buttons/button11.gif"); break;
    }
}   

// from https://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function themeCookie() {
    let themeCookie = getCookie("theme");
    let themebox = document.getElementById("themeBox");
    if (themeCookie == "darkmode") {
        swapDarkMode();
        themebox.remove();
    } else if (themeCookie == "lightmode") {
        swapLightMode();
        themebox.remove();
    } else if (themeCookie == "frieren") {
        swapFrierenTheme();
        themebox.remove();
    }
}

function swapDarkMode() {
    const theme = document.getElementById("theme");
    let themebox = document.getElementById("themeBox");
    theme.href = "./css/themes/darkmode.css";
    document.cookie = "theme=darkmode";
    themebox.remove();
}
function swapLightMode() {
    const theme = document.getElementById("theme");
    let themebox = document.getElementById("themeBox");
    theme.href = "./css/themes/lightmode.css";
    document.cookie = "theme=lightmode";
    themebox.remove();
}
function swapFrierenTheme() {
    const theme = document.getElementById("theme");
    let themebox = document.getElementById("themeBox");
    theme.href = "/css/themes/frieren.css";
    document.cookie = "theme=frieren";
    if(accessibilityToggleVar === 1) {
        accessibilityToggle();
    }
    themebox.remove();
} 

function github() {
    window.open("https://github.com/juli4nne", "_blank");
}
function accessibilityToggle() {
    const accessible = document.getElementById("accessibility");
    if(accessibilityToggleVar === 0) {
        accessible.setAttribute("href", "/css/accessible.css");
        accessibilityToggleVar = 1;
    } else {
        accessible.setAttribute("href", "");
        accessibilityToggleVar = 0;
    }
    const width = element.offsetWidth;
} 

window.addEventListener('load', () => {
    randomNekoStamp();
    document.body.style.display = 'block';
});