let qrinput = document.querySelector('.qr-input');
let imgBox = document.querySelector('.imgBox');
let qrImage = document.querySelector('.qrImage');


function generateQR() {

  if (qrinput.value.length > 0){
      qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrinput.value;
    
      imgBox.classList.add('show-img');
  } else{
    qrinput.classList.add('error');
    setTimeout(() => {
      qrinput.classList.add('error');
    }, 1000);
  }

}

document.querySelector('.qr-button').addEventListener('click', () => { generateQR() });


