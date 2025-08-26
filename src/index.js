const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h"
    ,"i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let isActive = false
let includeNumbers = true
let includeSymbols = true
let allCharacters = []

var numberToggle = document.getElementById("number-toggle")
var symbolToggle = document.getElementById("symbol-toggle")


numberToggle.addEventListener("change", function(event) {
        includeNumbers =  event.target.checked
})

symbolToggle.addEventListener("change", function(event) {
        includeSymbols =  event.target.checked
})


function generatePasswords() { 

    let firstPassword = document.getElementById("first-password")
    let secondPassword = document.getElementById("second-password")


    if (isActive === true) 
    {
        firstPassword.textContent = " "
        secondPassword.textContent = " "
        allCharacters.length = 0

    }
    allCharacters.push(...characters)
    
    if(includeNumbers === true) {
        allCharacters.push(...numbers)
    }

    if(includeSymbols === true){
        allCharacters.push(...symbols)
    }
   
        let firstRandom 
        let secondRandom 


        for(let i = 0 ; i < 15 ; i ++)
        {
            firstRandom = Math.floor(Math.random() * allCharacters.length)
            secondRandom = Math.floor(Math.random() * allCharacters.length)
            
            firstPassword.textContent += allCharacters[firstRandom]
            secondPassword.textContent += allCharacters[secondRandom]
        }
        isActive = true

    
}




function copyPassword(elementId) 
{
    let passwordElement = document.getElementById(elementId)
    let passwordText = passwordElement.textContent.trim()
    let messageElId = elementId === 'first-password' ? 'first-message' : 'second-message'
    let messageEl = document.getElementById(messageElId)
    
    navigator.clipboard.writeText(passwordText)
        .then(() => {
            messageEl.textContent = "Passwpord copied!"
            setTimeout(() => {
                messageEl.textContent = "";
            },2000)
        })
        .catch(err => {
            console.error("Can not copied", err)
        })

}

window.generatePasswords = generatePasswords;
window.copyPassword = copyPassword;