const body = document.body;
const header = document.getElementsByTagName("header")[0];
const navigation = document.getElementsByTagName("nav")[0];
const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');
const toggleButtons = document.getElementsByClassName("toggle-button");
const navButtons = document.getElementsByClassName("main-nav__item");
const counterElements = document.getElementsByClassName("profile__counter");

let darkMode = false;

darkModeButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (darkMode === false) {
        darkModeButton.src = "assets/toggle-right.svg";
        darkMode = true;

        body.style.backgroundColor = "var(--color-dark)";
        body.style.color = "var(--bg-color-light)";
        header.style.backgroundColor = "var(--bg-color-dark)";
        navigation.style.backgroundColor = "var(--bg-color-dark)";
        for (let i = 0; i < toggleButtons.length; i++) {
            toggleButtons[i].classList.add("filter__black-to-white");
        }
        for (let i = 0; i < navButtons.length; i++) {
            navButtons[i].classList.add("filter__black-to-white");
        }
        for (let i = 0; i < counterElements.length; i++) {
            counterElements[i].style.backgroundColor = "var(--bg-color-dark)";
        }
    } else {
        darkModeButton.src = "assets/toggle-left.svg";
        darkMode = false;

        body.style.backgroundColor = "var(--bg-color-medium)";
        body.style.color = "var(--color-font)";
        header.style.backgroundColor = "var(--color-dark)";
        navigation.style.backgroundColor = "var(--bg-color-light)";
        for (let i = 0; i < toggleButtons.length; i++) {
            toggleButtons[i].classList.remove("filter__black-to-white");
        }
        for (let i = 0; i < navButtons.length; i++) {
            navButtons[i].classList.remove("filter__black-to-white");
        }
        for (let i = 0; i < counterElements.length; i++) {
            counterElements[i].style.backgroundColor = "var(--color-dark)";
        }
    }
});
