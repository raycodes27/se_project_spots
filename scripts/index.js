const initialCards = [
  {
    name: "Val Thorens",
    link: "https://images.unsplash.com/photo-1565050270436-3acfa41c1ba0?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Restaurant terrace",
    link: "https://images.unsplash.com/photo-1692866267930-a501e6c2e2cd?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "An outdoor coffee",
    link: "https://images.unsplash.com/photo-1570028189911-cc378c486893?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "A very long bridge, over the forest",
    link: "https://images.unsplash.com/photo-1535483321429-2d8dd5734ccc?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tunnel with morning light",
    link: "https://images.unsplash.com/photo-1673146690261-780ada4a8b30?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mountain house",
    link: "https://images.unsplash.com/photo-1613525041465-88225ec0122a?q=80&w=2412&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

const newPostModal = document.querySelector("#new-post-modal");
const newPostBtn = document.querySelector(".profile__new-post-btn");
const newPostModalCloseBtn = newPostModal.querySelector(".modal__close-btn");

const galleryModal = document.querySelector("#gallery-modal");
const galleryModalCloseBtn = galleryModal.querySelector(
  ".modal__close-btn_type_image-preview"
);
const galleryModalImage = galleryModal.querySelector(".modal__gallery-img");
const galleryModalTitle = galleryModal.querySelector(".modal__img-title");

galleryModalCloseBtn.addEventListener("click", function () {
  closeModal(galleryModal);
});

galleryModal.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    closeModal(galleryModal);
  }
});

const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description"
);

const profileFormElement = editProfileModal.querySelector(".modal__form");
const nameInput = editProfileModal.querySelector("#profile-name-input");
const jobInput = editProfileModal.querySelector("#profile-description-input");

const addCardFormElement = newPostModal.querySelector(".modal__form");
const captionInput = newPostModal.querySelector("#profile-caption-input");
const linkInput = newPostModal.querySelector("#profile-link-input");

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

const cardsList = document.querySelector(".cards__list");

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardDelBtn = cardElement.querySelector(".card__del-btn");
  cardDelBtn.addEventListener("click", () => {
    cardElement.remove();
  });

  const cardLikeBtn = cardElement.querySelector(".card__like-btn");
  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-btn_active");
  });

  const cardTitleElement = cardElement.querySelector(".card__title");
  const cardImageElement = cardElement.querySelector(".card__image");
  cardImageElement.src = data.link;
  cardImageElement.alt = data.name;
  cardTitleElement.textContent = data.name;

  cardImageElement.addEventListener("click", () => {
    openModal(galleryModal);
    galleryModalImage.src = data.link;
    galleryModalImage.alt = data.name;
    galleryModalTitle.textContent = data.name;
  });

  return cardElement;
}

editProfileBtn.addEventListener("click", function () {
  nameInput.value = profileNameElement.textContent;
  jobInput.value = profileDescriptionElement.textContent;

  openModal(editProfileModal);
});

editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostModalCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

function handleProfileFormSubmit(e) {
  e.preventDefault();

  profileNameElement.textContent = nameInput.value;
  profileDescriptionElement.textContent = jobInput.value;

  closeModal(editProfileModal);
}

addCardFormElement.addEventListener("submit", handleAddCardSubmit);

function handleAddCardSubmit(e) {
  e.preventDefault();

  const inputValues = {
    name: captionInput.value,
    link: linkInput.value,
  };

  const cardElement = getCardElement(inputValues);
  cardsList.prepend(cardElement);

  closeModal(newPostModal);
  e.target.reset();
}

initialCards.forEach(function (item) {
  const cardElement = getCardElement(item);
  cardsList.append(cardElement);
});
