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

function swapDarkMode() {
    const theme = document.getElementById("theme");
    theme.setAttribute("href", "./css/themes/darkmode.css");
    const width = element.offsetWidth;
}
function swapLightMode() {
    const theme = document.getElementById("theme");
    theme.setAttribute("href", "./css/themes/lightmode.css");
    const width = element.offsetWidth;
}
function swapFrierenTheme() {
    const theme = document.getElementById("theme");
    theme.setAttribute("href", "/css/themes/frieren.css");
    const width = element.offsetWidth;
} 

window.onload = randomNekoStamp;