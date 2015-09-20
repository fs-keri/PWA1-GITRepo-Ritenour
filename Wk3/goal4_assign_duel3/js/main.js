/*
     Name: Keri Ritenour
     Date: 9/18/2015
     Assignment: Goal4: Assignment: Duel3
 */

//self-executing function
(function(){

    console.log("FIGHT!");

    //create array with players and assign objects for fighters using keys
    var players =[
    player1 = {name:"Spiderman", damage:20, health:100},
    player2 = {name:"Batman", damage:20, health:100};

    var players = [player1, player2];

    //define variable for fight button
    var blueButton = document.getElementById("fight_btn");

    blueButton.addEventListener("click", fight);

    //query html for player assignment
    var player1 = document.querySelector("#kabal p");
    kratos.innerHTML = players[0].name + ":" + players[0].health;
    var player2 = document.querySelector("#kratos p");
    kabal.innerHTML = players[1].name + ":" + players[1].health;

    //starting round
    var round = 1;
    var roundNum = document.querySelector("#round_number");

    //fight with random number that decrements
    function fight() {
        if (round < 10)
        //random formula is - Math.floor(Math.random() * (max - min) + min);
        var minDamage1 = players[0].damage * .5;
        var minDamage2 = players[1].damage * .5;
        var f1 = Math.floor(Math.random() * (players[0].damage - minDamage1) + minDamage1);
        var f2 = Math.floor(Math.random() * (players[1].damage - minDamage2) + minDamage2);


        //player inflicting damage
        players[0].health -= f1;
        players[1].health -= f2;


        //create variables to get elements from html for player 1
        player1.innerHTML = players[0].name + ":" + players[0].health;

        //create variables to get elements from html for player 1
        player2.innerHTML = players[1].name + ":" + players[1].health;


        //store results
        results = winnerCheck();

    };

    //check to see if win, no-win, die
    function winnerCheck(player1,player2){
        //console.log("in winnerCheck FN");
        var result="no winner";

        if(players[0].health <1 && players[1].health<1) {
            result = "You Both Die";
        }else if(players[0].health<1){
            result=players[1].health+" WINS!!!";
        }else if(players[1].health<1){
            result = players[0].health + " WINS!!!";
        }

        return result;

    };

    var result = winnerCheck();
    /* The program starts here */



    fightButton.onclick = function(e){
        fight();
        e.preventDefault();
        return false;
    }

})();