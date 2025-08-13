
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
