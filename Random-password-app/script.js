const inputPassword = document.querySelector('.password');
const length = 12;


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@#$%^&*__[]?/<>|";

const allTypes = upperCase + lowerCase + number + symbols;

function generatePassword(){

  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)]
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
  password += number[Math.floor(Math.random() * number.length)]
  password += symbols[Math.floor(Math.random() * symbols.length)]

  while (length > password.length) {
    password += allTypes[Math.floor(Math.random() * allTypes.length)];
  }
  inputPassword.value = password;
};

function copyInput() {
  // Get the input element
  const input = document.querySelector('.password');

  // Select all the text in the input element
  input.select();

  // Copy the selected text to the clipboard
  document.execCommand('copy');

  // Alert the user that the text has been copied
  alert('Text copied to clipboard!');
}

// Add an event listener to the button so that the copyInput() function is called when the button is clicked
document.querySelector('.copy').addEventListener('click', copyInput);



const generatePasswordbutton = document.querySelector('.js-button').addEventListener('click', () => {generatePassword()});