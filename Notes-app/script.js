const notesContainer = document.querySelector('.notes-container');

const jsButton = document.querySelector('.js-button');

jsButton.addEventListener('click', () => {
  let inputBox = document.createElement("p");
  let inputImg = document.createElement("img");
  inputBox.className = "js-input";
  inputBox.setAttribute("contenteditable", "true");
  inputImg.src = "notes-app-img/images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(inputImg);
})