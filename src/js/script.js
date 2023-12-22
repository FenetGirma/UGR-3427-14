
// the javascript to the navigation

const burger=document.querySelector('#burger');
const menu=document.querySelector('#menu');
const menuholder=document.querySelector('#menuholder');


burger.addEventListener('click', ()=>{
    if (menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
        menu.classList.add('grid')
        menu.classList.add('grid-start')
    }else{
        menu.classList.add('hidden');
    }
})


// The javascript to the text
const dynamicText = document.querySelector("h4 span");
const words = ["UI/UX Designer.", "Web Developer.", "Software Engineer."];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");
    if (!isDeleting && charIndex < currentWord.length) {
        
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {

        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}
typeEffect();

//Send message to me from contact form
function redirectToEmail(event) {
    event.preventDefault(); 
  
    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    var subject = encodeURIComponent("Contact Me");
    var body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);
    var mailtoURL = "mailto:fenutigist@gmail.com?subject=" + subject + "&body=" + body;
  
    
    window.location.href = mailtoURL;
  }


