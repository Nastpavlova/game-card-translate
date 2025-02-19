const cardsList = document.querySelector('.cards-list');
const cardTemplate = document.querySelector('#card-template').content;
console.log(cardTemplate);





// const value = Math.round(Math.random() * (18 - 1) + 1);
// console.log(value)

function createCard(card) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    console.log(cardElement);
    const cardText = cardElement.querySelector('.card-text');
    cardText.textContent = card.englishWord;
    return cardElement;
}

//функция отображения карточек на странице
function displayCards(arraycard) {
    for (const card of arraycard) {

        const newCardElement = createCard(card);
        cardsList.append(newCardElement);
    }
}

displayCards(englishCards);