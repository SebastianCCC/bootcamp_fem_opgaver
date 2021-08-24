const buttons = document.querySelectorAll("#buttons button");

for(let i=0; i<buttons.length; i++){
 buttons[i].addEventListener("click", changecolor);
}

function changecolor(){
    for(let i=0; i<buttons.length; i++){
        buttons[i].style.background = "#eee";
    }
    this.style.background = "#7f7";
}