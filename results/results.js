let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let random_number1;
let random_number2;

let dice1p1 = document.getElementById("dice1p1");
let dice2p1 = document.getElementById("dice2p1");

let dice1p2 = document.getElementById("dice1p2");
let dice2p2 = document.getElementById("dice2p2");


let player_res1 = 0;
let player_res2 = 0;

let t1 = document.getElementById("total1");
let t2 = document.getElementById("total2");

let cover = document.querySelector(".cover");
let result = document.querySelector(".result");
let winner = document.querySelector("#winner");

btn2.setAttribute("disabled", "");
btn2.style.backgroundImage = "linear-gradient(to right, #ADADAD, #B8B8B8)";

let main_start = document.getElementById("btn");
let p1_name;
let p2_name;

let play_again = document.getElementById("play-again");

play_again.addEventListener("click", function(){
    player_res1= 0;
    player_res2 = 0;

    t1.innerHTML = "Total: " + player_res1;
    t2.innerHTML = "Total: " + player_res2;

    cover.style.display = "none";
    result.style.display = "none";
})


main_start.addEventListener("click", function(){
    p1_name = document.getElementById("p1name").value;
    p2_name = document.getElementById("p2name").value;
    if(p1_name=="" || p2_name==""){
        p1_name = "Player 1";
        p2_name = "Player 2";
        alert("Player names are assigned as Player 1 and player 2");
    }
    document.getElementById("p1n").innerHTML = p1_name;
    document.getElementById("p2n").innerHTML = p2_name;
    document.querySelector(".main-menu").style.display = "none";
    cover.style.display = "none";
},{once: true})

btn1.addEventListener("click", function(){
    random_number1 = Math.floor(Math.random() * 5 + 1);
    player_res1 += random_number1;
    dice1p1.setAttribute("src", "../images/dice_" + random_number1+ ".png");

    random_number2 = Math.floor(Math.random() * 5 + 1);
    dice2p1.setAttribute("src", "../images/dice_" + random_number2+ ".png");
    player_res1 += random_number2;

    if(random_number1==random_number2 && random_number1==1)
        player_res1 = 0;
    
    t1.innerHTML = "Total: " + player_res1;
    if(random_number1!=random_number2 || random_number1!=1 ){
        btn1.setAttribute("disabled", "");
        btn1.style.backgroundImage = "linear-gradient(to right, #ADADAD, #B8B8B8)";

        btn2.removeAttribute("disabled");
        btn2.style.backgroundImage = "linear-gradient(to right, #E86118, #F2A614)";
    }

    if(player_res1>=50){
        cover.style.display = "flex";
        result.style.display = "flex";
        winner.innerHTML = "Great! "+ p1_name +" Won.";
    }
});


btn2.addEventListener("click", function(){
    random_number1 = Math.floor(Math.random() * 5 + 1);
    dice1p2.setAttribute("src", "../images/dice_" + random_number1+ ".png");
    player_res2+= random_number1;

    random_number2 = Math.floor(Math.random() * 5 + 1);
    dice2p2.setAttribute("src", "../images/dice_" + random_number2+ ".png");
    player_res2+= random_number2;

    if(random_number1==random_number2 && random_number1==1)
        player_res2 = 0;
    
    t2.innerHTML = "Total: " + player_res2;
    
    if(random_number1!=random_number2 || random_number1==1 ){
        btn2.setAttribute("disabled", "");
        btn2.style.backgroundImage = "linear-gradient(to right, #ADADAD, #B8B8B8)";

        btn1.removeAttribute("disabled");
        btn1.style.backgroundImage = "linear-gradient(to right, #E86118, #F2A614)";
    }

    if(player_res2>=50){
        cover.style.display = "flex";
        result.style.display = "flex";
        winner.innerHTML = "Great! "+ p2_name +" Won.";
    }
});

