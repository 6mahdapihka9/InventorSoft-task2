let opened = false;

function openBurger() {
    let socialMedia = document.getElementById("social-media");
    let burgerMenu = document.getElementById("burgerMenu");

    if (opened) {
        socialMedia.classList.remove("social-media-opened");
        burgerMenu.classList.remove("burgerMenu-opened");
    } else {
        socialMedia.classList.add("social-media-opened");
        burgerMenu.classList.add("burgerMenu-opened");
    }
    opened = !opened;
}
