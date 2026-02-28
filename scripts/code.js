function toggleDropdown() {
    const content = document.getElementById("themeDropdown");

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
/* function swapFrierenTheme() {
    const theme = document.getElementById("theme");
    theme.setAttribute("href", "/css/themes/.css");
    const width = element.offsetWidth;
} */