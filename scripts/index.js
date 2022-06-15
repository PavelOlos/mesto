const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

function openPopup(event) {
    event.preventDefault()
    popup.classList.add('popup__open');
}

function closePopup(event) {
    popup.classList.remove('popup__open');
}

// Находим форму в DOM
let formElement = document.querySelector('.popup__profile-edit');
// Находим поля формы в DOM
let nameInput = popup.querySelector('.popup__name');
let jobInput = popup.querySelector('.popup__job');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let nameInput = popup.querySelector('.popup__name');
    let jobInput = popup.querySelector('.popup__job');

    // Выберите элементы, куда должны быть вставлены значения полей
    let name = document.querySelector('.profile__title');
    let job = document.querySelector('.profile__subtitle');
    
    // Вставьте новые значения с помощью textContent
    name.textContent = nameInput.value; 
    job.textContent = jobInput.value;

    popup.classList.remove('popup__open');
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 