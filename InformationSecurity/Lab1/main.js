let area = document.querySelectorAll("textarea");
let encryptB = document.querySelector("#EncryptB");
let decryptB = document.querySelector("#DecipherB") 
let offset =  0;//document.querySelector(".offsetText");

encryptB.addEventListener("click", ()=>{
    let inputText = area[0].value;
    let buffer = [];
    offset = parseInt(document.querySelector(".offsetText").value);
    for (let i = 0; i < inputText.length; i++) {
        buffer.push(inputText[i].charCodeAt(0));
        buffer[i] += offset;
    }
    console.log(typeof(offset), offset);
    area[1].value = String.fromCharCode(...buffer);
})

decryptB.addEventListener("click", ()=>{
    let inputText = area[1].value;
    let buffer = [];
    offset = document.querySelector(".offsetText").value;
    for (let i = 0; i < inputText.length; i++) {
        buffer.push(inputText[i].charCodeAt(0));
        buffer[i] -= offset;
    }

    area[0].value = String.fromCharCode(...buffer);
})