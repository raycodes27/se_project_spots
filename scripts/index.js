
const initialCards = [
    {
        name: 'Val Thorens' ,
        link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg' ,
        altText: 'Val Thorens photo'
    }, 

    {
        name: 'Restaurant terrace' ,
        link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg' ,
        altText: 'Restaurant terrace photo'
    }, 

    {
        name: 'An outdoor cafe',
        link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg' , 
        altText: 'A photo of an outdoor cafe'
    }, 

    {
        name: 'A very long bridge, over the forest and through the trees' ,
        link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg' ,
        altText: 'A long bridge over the forrest photo'
    },  

    {
        name: 'Tunnel with morning light' ,
        link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg' ,
        altText: 'Tunnel with morning light photo'
    }, 

    {
        name: 'Mountain house' ,
        link: 'https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg' ,
        altText: 'A house at a mountain photo'
    } 

];

const profileEditButton = document.querySelector(".profile__edit-btn");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const editProfileModal = document.querySelector("#edit-profile-modal");
const closeModalButton = editProfileModal.querySelector(".modal__close-btn");
const editModalNameInput = editProfileModal.querySelector("#profile-name-input");
const editModalDescriptionInput = editProfileModal.querySelector("#profile-description-input");

const profileFormElement = document.forms["profile-form"];

const cardsTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");




function openModal(){
    editModalNameInput.value = profileName.textContent;
    editModalDescriptionInput.value = profileDescription.textContent;
    editProfileModal.classList.add("modal_opened");
}

function closeModal(){
    editProfileModal.classList.remove("modal_opened");   
}

function handleProfileFormSubmit(evt){
    evt.preventDefault();
    profileName.textContent = editModalNameInput.value;
    profileDescription.textContent = editModalDescriptionInput.value;
    closeModal();
}

function getCardElement(data){
    const cardElement = cardsTemplate.content
    .querySelector(".card")
    .cloneNode(true);

    const cardNameElement = cardElement.querySelector(".card__title");
    cardNameElement.textContent = data.name;
    
    const cardImageElement = cardElement.querySelector(".card__image");
    cardImageElement.src = data.link;
    
    cardImageElement.alt = data.altText;

    return cardElement;
}


profileEditButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);


profileFormElement.addEventListener("submit", handleProfileFormSubmit);


for(let i = 0; i < initialCards.length; i++) {
    const cardElement = getCardElement(initialCards[i]);
    cardsList.append(cardElement);
}

