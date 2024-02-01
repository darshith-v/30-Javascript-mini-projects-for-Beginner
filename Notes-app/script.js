const notesContainer = document.querySelector('.notes-container');

const jsButton = document.querySelector('.js-button');

let notes = document.querySelector('.js-input');

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

jsButton.addEventListener('click', () => {
  let inputBox = document.createElement("p");
  let inputImg = document.createElement("img");
  inputBox.className = "js-input";
  inputBox.setAttribute("contenteditable", "true");
  inputImg.src = "notes-app-img/images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(inputImg);
});

notesContainer.addEventListener("click", function(e) {
  if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
    updateStorage();
  } else if(e.target.tagName === "P"){
    notes = document.querySelectorAll('.js-input');
    notes.forEach(nt => {
      nt.onkeyup = function () {
        updateStorage();
      }
    })
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});