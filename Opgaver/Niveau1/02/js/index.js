/* const insertnewvalue = document.querySelector("#result");
function beregnForhold(a, b){
insertnewvalue.textContent = a / b;
}

beregnForhold(4, 3) */

const insertnewvalue = document.querySelector("#result");
function beregnForhold2(a, b){
if(b !== 0){
    insertnewvalue.textContent = a / b;
} else {
    insertnewvalue.textContent = "null"
}
}

beregnForhold2(4, 3)