const QrGenerate=()=>{
    let inputBox = document.querySelector('.inputBox')
    let qrImg = document.querySelector('.qr')
    let download = document.querySelector('#download-qr')


    qrImg.style.display = 'block';
    let randomQuote = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputBox.value}`

    if(inputBox.value.length === 0 ){
        alert('please enter text or url')
        

    }else{
        qrImg.src = randomQuote;
        qrImg.setAttribute('title', inputBox.value)
    }

}