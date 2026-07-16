const bookmarkButton = document.querySelector('[data-js="card__btn-bookmark"]');
const bookmarkButtonImg = document.querySelector(
    '[data-js="card__btn-bookmark--img"]',
);
const birdName = document.querySelector('[data-js="card__bird-name"]');
const toggleAnswerButton = document.querySelector(
    '[data-js="card__btn-solution"]',
);

let answerVisible = false;

bookmarkButton.addEventListener("click", (event) => {
    event.preventDefault();
    bookmarkButton.classList.toggle("card__btn-bookmark--check");
    bookmarkButtonImg.classList.toggle("card__btn-bookmark--img-filtered");
});

toggleAnswerButton.addEventListener("click", (event) => {
    if (answerVisible === false) {
        toggleAnswerButton.textContent = "Hide answer";
        answerVisible = true;
        birdName.classList.remove("card__bird-name--hidden");
    } else {
        toggleAnswerButton.textContent = "Show answer";
        answerVisible = false;
        birdName.classList.add("card__bird-name--hidden");
    }
});
