const mainContainer = document.querySelector(".main-container");
const qrCodeBtn = document.querySelector("#qr-button");
const qrCodeInput = document.querySelector("#qr-input");
const qrCodeImg = document.querySelector("#qr-code img");

function generateQRCode(){
    if(!qrCodeInput) return;

    qrCodeBtn.innerText = 'Gerando QR Code...';

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInput.value}`

    qrCodeImg.addEventListener("load", ()=>{
        mainContainer.classList.add("active");
        qrCodeBtn.innerText = "Código criado!";
    });
        

    console.log(qrCodeInput.value);
}
qrCodeBtn.addEventListener("click",() => {
    generateQRCode();
})

qrCodeInput.addEventListener("keydown", (e) => {
    if(e.key === 'Enter'){
        generateQRCode();
    }
})

qrCodeInput.addEventListener("keyup", () =>{
    if(!qrCodeInput.value){
        mainContainer.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR Code"
    }
})
