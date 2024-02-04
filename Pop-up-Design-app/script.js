let submit = document.querySelector('.submit-button');

let okButton = document.querySelector('.js-ok-button');

let popupMsg = document.querySelector('.popup-msg')

submit.addEventListener('click', () => {
  popupMsg.classList.add("open-popup");
})

okButton.addEventListener('click', () => {
  popupMsg.classList.remove("open-popup");
})