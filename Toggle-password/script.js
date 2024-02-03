const password = document.getElementById('password');
const eyeImage = document.querySelector('.eyeClosed');

eyeImage.addEventListener('click', () => {
  if (password.type == "password") {
    password.type = "text";
    eyeImage.src = "eye-icons/eye-open.png"
  } else {
    password.type = "password";
    eyeImage.src = "eye-icons/eye-close.png";
  }

});