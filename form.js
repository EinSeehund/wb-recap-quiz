const mainContainer = document.querySelector('[data-js="main-container"]');
const newBirdForm = document.querySelector('[data-js="new-bird-form"]');
const submitButton = document.querySelector('[data-js="submit-button"]');
const charactersLeft = document.querySelector('[data-js="character-count"]');
const inputName = document.querySelector('[data-js="input-name"]');
const inputImgUrl = document.querySelector('[data-js="input-img-url"]');
const inputLevel = document.querySelector('[data-js="input-level"]');
const inputCommonness = document.querySelector('[data-js="input-commonness"]');
const inputBirdType = document.querySelector('[data-js="input-bird-type"]');

let characterCount = 0;

newBirdForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // CREATING ELEMENTS FOR NEW CARD
    const newCard = document.createElement("div");
    const bookmarkButton = document.createElement("button");
    const bookmarkIcon = document.createElement("img");
    const image = document.createElement("img");
    const thisIsText = document.createElement("p");
    const birdName = document.createElement("h2");
    const visibilityButton = document.createElement("button");
    const tagWrapper = document.createElement("div");

    // APPLYING CLASSES, ADDING TEXT AND HTML
    newCard.classList.add("card");
    bookmarkButton.classList.add("card__btn-bookmark");
    bookmarkIcon.src = "assets/feather.png";
    bookmarkIcon.classList.add("card__btn-bookmark--img");
    bookmarkButton.append(bookmarkIcon);
    image.classList.add("card__img");
    image.src = `${inputImgUrl.value}`;
    thisIsText.textContent = "This is a(n)";
    birdName.classList.add("card__bird-name", "card__bird-name--hidden");
    birdName.textContent = `${inputName.value}`;
    visibilityButton.classList.add("card__btn-solution");
    visibilityButton.textContent = "Show solution";
    tagWrapper.classList.add("card__tag-wrapper");
    tagWrapper.innerHTML = `
            <p class="card__tag">lvl ${inputLevel.value}</p>
            <p class="card__tag">${inputCommonness.value}</p>
            <p class="card__tag">${inputBirdType.value}</p>
    `;

    // ADDING VISUAL FEEDBACK TO BOOKMARK BUTTON
    bookmarkButton.addEventListener("click", (event) => {
        event.preventDefault();
        bookmarkButton.classList.toggle("card__btn-bookmark--check");
        bookmarkIcon.classList.toggle("card__btn-bookmark--img-filtered");
    });

    // ADDING FUNCTIONALITY TO VISIBILITY BUTTON
    let answerVisible = false;
    visibilityButton.addEventListener("click", (event) => {
        event.preventDefault();
        if (answerVisible === false) {
            visibilityButton.textContent = "Hide answer";
            answerVisible = true;
            birdName.classList.remove("card__bird-name--hidden");
        } else {
            visibilityButton.textContent = "Show answer";
            answerVisible = false;
            birdName.classList.add("card__bird-name--hidden");
        }
    });

    // APPENDING ALL ELEMENTS TO NEW CARD
    newCard.append(bookmarkButton);
    newCard.append(image);
    newCard.append(thisIsText);
    newCard.append(birdName);
    newCard.append(visibilityButton);
    newCard.append(tagWrapper);

    mainContainer.append(newCard);
});

inputName.addEventListener("input", (event) => {
    event.preventDefault();
    characterCount = inputName.value.length;
    charactersLeft.textContent = characterCount;
});
