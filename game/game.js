let dice1 = document.querySelector("#dice1");
let random_number;

dice1.addEventListener("click", function(){
    random_number = Math.floor(Math.random() * 5 + 1);
    dice1.setAttribute("src", "../images/dice_" + random_number+ ".png");
});