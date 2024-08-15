const lowercaseLetters  = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-={}[]\\|;':\",./<>?";

const lengthEl = document.getElementById("length");
const lowercaseEl = document.getElementById("Lowercse");
const uppercaseEl = document.getElementById("Uppercase");
const numbersEl = document.getElementById("Numbers");
const symbolsEl = document.getElementById("Symbols");
const generateBt = document.getElementById("generate");
const passwordEl = document.getElementById("password");

generateBt.addEventListener('click', function() {
     const length = lengthEl.value ;
     let characters = "";
     let password = "";
     


     if (lowercaseEl.checked){
         characters = characters+lowercaseLetters;
     }
     if (uppercaseEl.checked){
        characters = characters+uppercaseLetters;
    }
    if (numbersEl.checked){
        characters = characters+numbers;
    }
    if (symbolsEl.checked){
        characters = characters+symbols;
    }

    for(let i=0; i<length; i++){
        password +=characters.charAt(Math.floor(Math.random()*characters.length));
    }
    passwordEl.value = password;
});