const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let isActive = false

function generatePasswords() { 

    let firstPassword = document.getElementById("first-password")
    let secondPassword = document.getElementById("second-password")


    if (isActive === true) 
    {
        firstPassword.textContent = " "
        secondPassword.textContent = " "
    }
        let firstRandom 
        let secondRandom 


        for(let i = 0 ; i < 15 ; i ++)
        {
            firstRandom = Math.floor(Math.random() * characters.length)
            secondRandom = Math.floor(Math.random() * characters.length)
            
            firstPassword.textContent += characters[firstRandom]
            secondPassword.textContent += characters[secondRandom]
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