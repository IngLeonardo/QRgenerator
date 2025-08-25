let inputText = document.getElementById("inputText");
let buttonQR = document.getElementById("buttonQR");
let qrCode = document.getElementById("qrcode");
let divQrCode = document.querySelector(".qrCode")


buttonQR.addEventListener('click', () =>{ 
    qrCode.innerHTML = "";
    let code = new QRCode(qrCode, {
        text: inputText.value,
        colorDark : "#137c7c",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

});

