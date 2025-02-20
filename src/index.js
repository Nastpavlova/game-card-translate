const cardsList = document.querySelector('.cards-list');
const cardTemplate = document.querySelector('#card-template').content;

//функция создания карточки
function createCard(card) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardText = cardElement.querySelector('.card-text');
    cardText.textContent = card.word;
    cardElement.addEventListener('click', rotateCard);
    return cardElement; 
}

//функция переворачивания карточки
function rotateCard(event) {
    const cardEl = event.currentTarget;

    //функция проверки
    if (checkSelectedTwoCards(cardEl)) {
        cardEl.classList.toggle('is-flipped');
    };  
}

//функция отображения карточек на странице
function displayCards(arraycard) {

    //применим сортировку массива карточек
    arraycard.sort(sortArr);

    //переберем каждую карточку, создадим её и вставим
    for (const card of arraycard) {
        const newCardElement = createCard(card);
        cardsList.append(newCardElement);
    }
}

//функция сортировки массива
function sortArr(a,b) {
    return Math.random() - 0.5;
}

//функция проверки на 2 перевернутые карточки
function checkSelectedTwoCards(cardElem) {
    return (document.querySelectorAll('.is-flipped').length<2 || cardElem.classList.contains('is-flipped')); 
}

//показать массив на странице
displayCards(englishCards);