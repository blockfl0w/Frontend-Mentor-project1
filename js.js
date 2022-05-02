
const bttn = document.getElementById('test');
const bttn1 = document.getElementById('test1');
const bttn2 = document.getElementById('test2');
const bttn3 = document.getElementById('test3');
const bttn4 = document.getElementById('test4');
const subBttn = document.getElementById("subBttn");
const error =  document.getElementById("error");
const thx = document.getElementById("thxDiv");
const main = document.getElementById("mainDiv");
const txtRate = document.getElementById("txtRate");
let buttonPressed = false;
let rating = 0;

function styleButton(bttn){
    bttn.style.backgroundColor = "hsl(25, 97%, 53%)";
    bttn.style.color = "white";
}
bttn.addEventListener("click", function() {
    buttonPressed = true;
    rating = 1;
});
bttn1.addEventListener("click", function() {
    buttonPressed = true;
    rating = 2;
});
bttn2.addEventListener("click", function() {
    buttonPressed = true;
    rating = 3;
});
bttn3.addEventListener("click", function() {
    buttonPressed = true;
    rating = 4;
});
bttn4.addEventListener("click", function() {
    buttonPressed = true;
    rating = 5;
});

subBttn.addEventListener("click", function() {
    if(buttonPressed == true){
        buttonPressed = false;
        main.style.display = "none";
        thx.style.display = "grid";
        txtRate.innerHTML = "you selected " + rating + " out of 5"
    }
    else{
        error.style.display = "block";
        buttonPressed = false;
    }
});
