function skjulElementViaCssSelector(cssselector){
const mybutton = document.querySelector(cssselector); 
mybutton.style.display = "none";
}

skjulElementViaCssSelector(".toggle_hidden")