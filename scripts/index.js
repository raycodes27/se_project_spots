

const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");



editProfileBtn.addEventListener("click", function(){
    editProfileModal.classList.add("modal_is-opened");
    handleProfileFormSubmit();
});

editProfileCloseBtn.addEventListener("click", function(){
  editProfileModal.classList.remove("modal_is-opened");
});

const newPostBtn = document.querySelector(".profile__new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostModalCloseBtn = newPostModal.querySelector(".modal__close-btn");

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostModalCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

const profileFormElement = document.querySelector(".profile__column");

const profileNameElement = profileFormElement.querySelector(".profile__name");
const profileDescriptionElement = profileFormElement.querySelector(
  ".profile__description"
);

const nameInput = editProfileModal.querySelector("#profile-name-input");
const jobInput = editProfileModal.querySelector("#profile-description-input");

const modalSubmitBtn = editProfileModal.querySelector(".modal__submit-btn");
modalSubmitBtn.addEventListener("click", handleProfileFormSubmit);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  nameInput.value = profileNameElement.textContent;
  jobInput.value = profileDescriptionElement.textContent;

  editProfileModal.classList.remove("modal_is-opened");
}