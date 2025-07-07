const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = document.getElementById("pass-one")
let passTwo = document.getElementById("pass-two")

function generatePassword() {
    let password = ""
    let passwordLength = 15
    let i = 0
    while (i < passwordLength) {
        let randomIndex = Math.floor(Math.random() * passwordLength)
        password += characters[randomIndex]
        i++
    }
    return password
}


function putPasswords() {
    passOne.textContent = generatePassword()
    passTwo.textContent = generatePassword()
}

function copyToClipboardOne() {
    navigator.clipboard.writeText(passOne.textContent)
    alert("Copied to clipboard: " + passOne.textContent)
}

function copyToClipboardTwo() {
    navigator.clipboard.writeText(passTwo.textContent)
    alert("Copied to clipboard: " + passTwo.textContent)
}




