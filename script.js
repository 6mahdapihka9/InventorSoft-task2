let opened = false;

function openBurger() {
    let burgerMenu = document.getElementById("social-media");
    if (opened) {
        burgerMenu.style.width = "0px";
        burgerMenu.style.visibility = "hidden";
        opened = !opened;
    } else {
        burgerMenu.style.width = "200px";
        burgerMenu.style.visibility = "visible";
        opened = !opened;
    }
}
