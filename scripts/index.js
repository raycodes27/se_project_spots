const initialCards = [
  {
    name: "Val Thorens",
    link: "https://images.unsplash.com/photo-1565050270436-3acfa41c1ba0?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Restaurant terrace",
    link: "https://images.unsplash.com/photo-1753086420778-205464e685c1?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

editProfileBtn.addEventListener("click", function(){
    nameInput.value = profileNameElement.textContent;
    jobInput.value = profileDescriptionElement.textContent;

    editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function(){
  editProfileModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostModalCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});


profileFormElement.addEventListener("submit", handleProfileFormSubmit);

function handleProfileFormSubmit(e) {
  e.preventDefault();

  profileNameElement.textContent = nameInput.value;
  profileDescriptionElement.textContent = jobInput.value;

  editProfileModal.classList.remove("modal_is-opened");
};

addCardFormElement.addEventListener("submit", handleAddCardSubmit);

function handleAddCardSubmit(e){
  e.preventDefault();

  console.log(linkInput.value);
  console.log(captionInput.value);

  newPostModal.classList.remove("modal_is-opened");
}

initialCards.forEach(function(element){
  console.log(element.name);
});