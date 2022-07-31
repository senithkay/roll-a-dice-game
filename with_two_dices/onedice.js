//element selectors
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let random_number1;
let random_number2;

let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");



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


let player1 = document.querySelector(".player1");
let player2 = document.querySelector(".player2");




//profile pictures
let dp1 = document.querySelector(".dp1");
let dp2 = document.querySelector(".dp2");

//player 1 profile picture selection
let p1p1 = document.querySelector("#p1p1");
let p1p2 = document.querySelector("#p1p2");
let p1p3 = document.querySelector("#p1p3");
let p1p4 = document.querySelector("#p1p4");


let pic_selector1 = document.querySelector(".pic-selector1");
let ppic1 = document.querySelector(".ppic1");

p1p1.addEventListener("click", function(){
    ppic1.setAttribute("src", "m1.jpeg")
    pic_selector1.style.display = "none";
});


p1p2.addEventListener("click", function(){
    ppic1.setAttribute("src", "m2.jpeg")
    pic_selector1.style.display = "none";
});

p1p3.addEventListener("click", function(){
    ppic1.setAttribute("src", "f1.jpeg")
    pic_selector1.style.display = "none";
});

p1p4.addEventListener("click", function(){
    ppic1.setAttribute("src", "f2.jpeg")
    pic_selector1.style.display = "none";
});



//player 2 profile picture selection

let p2p1 = document.querySelector("#p2p1");
let p2p2 = document.querySelector("#p2p2");
let p2p3 = document.querySelector("#p2p3");
let p2p4 = document.querySelector("#p2p4");


let pic_selector2 = document.querySelector(".pic-selector2");
let ppic2 = document.querySelector(".ppic2");

p2p1.addEventListener("click", function(){
    ppic2.setAttribute("src", "m1.jpeg")
    cover.style.display = "none";
    pic_selector2.style.display = "none";
    document.getElementById("bdice1").style.animationName = "rotator";
});


p2p2.addEventListener("click", function(){
    ppic2.setAttribute("src", "m2.jpeg")
    cover.style.display = "none";
    pic_selector2.style.display = "none";
    document.getElementById("bdice1").style.animationName = "rotator";
});

p2p3.addEventListener("click", function(){
    ppic2.setAttribute("src", "f1.jpeg")
    cover.style.display = "none";
    pic_selector2.style.display = "none";
    document.getElementById("bdice1").style.animationName = "rotator";
});

p2p4.addEventListener("click", function(){
    ppic2.setAttribute("src", "f2.jpeg")
    cover.style.display = "none";
    pic_selector2.style.display = "none";
    document.getElementById("bdice1").style.animationName = "rotator";
});






//main menu(form) functions
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
    
},{once: true})


//player one roll button
btn1.addEventListener("click", function(){
    random_number1 = Math.floor(Math.random() * 5 + 1);
    player_res1 += random_number1;
    dice1.setAttribute("src", "dice_" + random_number1+ ".png");


    random_number2 = Math.floor(Math.random() * 5 + 1);
    dice2.setAttribute("src", "dice_" + random_number2+ ".png");
    player_res1 += random_number2;

    if(random_number1==random_number2 && random_number1==1)
        player_res1 = 0;
    
    
    if(random_number1!=random_number2 || random_number1==1 ){
        btn1.setAttribute("disabled", "");
        btn1.style.backgroundImage = "linear-gradient(to right, #ADADAD, #B8B8B8)";

        btn2.removeAttribute("disabled");
        btn2.style.backgroundImage = "linear-gradient(to right, #E86118, #F2A614)";

        player1.style.backgroundColor = "white";
        player2.style.backgroundColor = "#E86118";

        document.getElementById("bdice1").style.animationName = "";
        document.getElementById("bdice2").style.animationName = "rotator";

        document.getElementById("p1n").style.color = "#E86118";
        t1.style.color = "#E86118";
        document.getElementById("p2n").style.color = "white";
        t2.style.color = "white";
        dp2.style.border = "4px #E86118 solid";
        dp1.style.border = "0px";
        dp2.style.width = "130px";
        dp2.style.height = "130px";
        dp1.style.width = "100px";
        dp1.style.height = "100px";
        dp2.style.animationName = "dp";
        dp1.style.animationName = "";
    }

    t1.innerHTML = "Total: " + player_res1;

    if(player_res1>=100){
        cover.style.display = "flex";
        result.style.display = "flex";
        winner.innerHTML = "Great! "+ p1_name +" Won.";
    }
});


//player two roll button
btn2.addEventListener("click", function(){
    random_number1 = Math.floor(Math.random() * 5 + 1);
    dice1.setAttribute("src", "dice_" + random_number1+ ".png");
    player_res2+= random_number1;

    random_number2 = Math.floor(Math.random() * 5 + 1);
    dice2.setAttribute("src", "dice_" + random_number2+ ".png");
    player_res2+= random_number2;

    if(random_number1==random_number2 && random_number1==1)
        player_res2 = 0;
    
    
    
    if(random_number1!=random_number2 || random_number1==1 ){
        btn2.setAttribute("disabled", "");
        btn2.style.backgroundImage = "linear-gradient(to right, #ADADAD, #B8B8B8)";

        btn1.removeAttribute("disabled");
        btn1.style.backgroundImage = "linear-gradient(to right, #E86118, #F2A614)";


        player2.style.backgroundColor = "white";
        player1.style.backgroundColor = "#E86118";

        document.getElementById("p2n").style.color = "#E86118";
        t2.style.color = "#E86118";
        document.getElementById("p1n").style.color = "white";
        t1.style.color = "white";

        document.getElementById("bdice2").style.animationName = "";
        document.getElementById("bdice1").style.animationName = "rotator";

        dp1.style.border = "4px #E86118 solid";
        dp2.style.border = "0px";
        dp1.style.width = "130px";
        dp1.style.height = "130px";
        dp2.style.width = "100px";
        dp2.style.height = "100px";
        dp1.style.animationName = "dp";
        dp2.style.animationName = "";

    }

    t2.innerHTML = player_res2 + " :Total";

    if(player_res2>=100){
        cover.style.display = "flex";
        result.style.display = "flex";
        winner.innerHTML = "Great! "+ p2_name +" Won.";
    }

});



//play again button
play_again.addEventListener("click", function(){
    player_res1= 0;
    player_res2 = 0;

    t1.innerHTML = "Total: " + player_res1;
    t2.innerHTML = "Total: " + player_res2;

    cover.style.display = "none";
    result.style.display = "none";
})