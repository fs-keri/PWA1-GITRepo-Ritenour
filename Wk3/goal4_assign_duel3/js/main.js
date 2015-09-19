/*
     Name: Keri Ritenour
     Date: 9/18/2015
     Assignment: Goal4: Assignment: Duel3
 */

//self-executing function
(function(){

    console.log("FIGHT!");

    //arrays with player name [0], damage[1], health[2]
    //var player1 = ["Spiderman", 20, 100];
    //var player2 = ["Batman", 20, 100];

    //create objects for fighters using keys
    var player1 = {name:"Spiderman", damage:20, health:100};
    var player2 = {name:"Batman", damage:20, health:100};

    //create an array for fighters
    var players = [player1, player2];

    //starting round
    var round=0;

    //fight with random number that decrements
    function fight() {
        //console.log("in the fight function");

        //alert(player1[0]+":"+player1[2]+" *START* "+player2[0]+":"+player2[2]);

        //for (var i=0; i<10; i++){
        round++;
        //random formula is - Math.floor(Math.random() * (max - min) + min);
        var minDamage1 = players[0].damage * .5;
        var minDamage2 = players[1].damage * .5;
        var f1 = Math.floor(Math.random() * (players[0].damage - minDamage1) + minDamage1);
        var f2 = Math.floor(Math.random() * (players[1].damage - minDamage2) + minDamage2);

        //console.log(f1);
        //console.log(f2);

        //player inflicting damage
        players[0] -= f1;
        players[1] -= f2;

        //console.log(player1[0]+":"+player1[2]+" "+player2[0]+":"+player2[2]);

        //create variables to get elements from html for player 1
        var player1 = document.getElementById("kabal");
        player1.innerHTML = players[0].name + ":" + players[0].health;

        //create variables to get elements from html for player 1
        var player2 = document.getElementById("kratos");
        player2.innerHTML = players[1].name + ":" + players[1].health;

        //replace inner html to display round number
        roundCnt = document.getElementById("round_number");
        roundCnt.innerHTML = "Round: " + round;

        //store results
        results = winnerCheck(players[0], players[1]);


        if (results !== "no winner") {
            player1.innerHTML = results;
            player2.innerHTML = results;
        };
    };

    //check to see if win, no-win, die
    function winnerCheck(){
        console.log("in winnerCheck FN");
        var result="no winner";

        if(player1[2]<1 && player2[2]<1) {
            result = "You Both Die";
        }else if(player1[2]<1){
            result=player2[0]+" WINS!!!"
        }else if(player2[2]<1) {
            result = player1[0] + " WINS!!!"
        }

        return result;

    };


    /* The program starts here */
    console.log("program starts");
    fight();

})();