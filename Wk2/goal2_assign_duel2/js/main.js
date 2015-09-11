/*
     Name: Keri Ritenour
     Date: 9/11/2015
     Assignment: Goal2: Assignment: Duel2
 */

//self-executing function
(function(){

    console.log("FIGHT!");

    //arrays with player name [0], damage[1], health[2]
    var player1 = ["Spiderman", 20, 100];
    var player2 = ["Batman", 20, 100];

    //starting round
    var round=0;

    //fight with random number that decrements
    function fight(){
        console.log("in the fight function");

        alert(player1[0]+":"+player1[2]+" *START* "+player2[0]+":"+player2[2]);

        for (var i=0; i<10; i++){
            //random formula is - Math.floor(Math.random() * (max - min) + min);

            var minDamage1=player1[1] * .5;
            var minDamage2=player2[1] * .5;
            var f1 = Math.floor(Math.random()*(player1[1]-minDamage1) +minDamage1);
            var f2 = Math.floor(Math.random()*(player2[1]-minDamage2) +minDamage2);

            //console.log(f1);
            //console.log(f2);

            //player inflicting damage
            player1[2]-=f1;
            player2[2]-=f2;

            console.log(player1[0]+":"+player1[2]+" "+player2[0]+":"+player2[2]);

            var results=winnerCheck();
            console.log(results);

            if(results==="no winner"){
                round++;
                alert(player1[0]+":"+player1[2]+" *ROUND "+round+" OVER* "+player2[0]+":"+player2[2]);
            }else{
                alert(results);
                break;
            }
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