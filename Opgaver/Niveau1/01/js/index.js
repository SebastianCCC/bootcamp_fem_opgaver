const mybutton = document.querySelector("#my-button"); //is calling the #form1 id to define witch form is being used 
document.querySelector("#my-button").addEventListener("click", changecolor); //will define the #form1 submit button

function changecolor(){
    $(mybutton).toggleClass('new_color');
}