    // alert('hello')


function Initialisation() {
    //On cache le bouton "Rejouer"
    document.getElementById("replay").style.visibility = "hidden";
    
}
//On définit les players
    const players = ['Red', 'Blue'];
    //Et le player qui commence
    let player = players[0];


function play(zone) { //Recupère le nom de la zone cliquée via "zone"
    //Si le player et egale au player 'X'
    if (player == players[0]) {
        if (document.getElementById(zone).className.indexOf('filled') >= 0) {
            //On affiche une alerte
            alert("You can't do that...");
        } else {
            //Sinon on definit le background de la case avec l'image Croix
            document.getElementById(zone).style.backgroundColor = "red";
            //Et on lui ajoute la class "filled" pour ne plus pouvoir la changer
            document.getElementById(zone).className += " filled";
            document.getElementById(zone).textContent = "  ";
            //On passe la main au player 'RONDS'
            player = players[1];
        }
    }
    else if (player === players[1]) { //Si le player et egale au player 'O'
        //Si la case et dejà pleine (class filled)
        if (document.getElementById(zone).className.indexOf('filled') >= 0) {
            //On affiche un alerte
            alert("This case is already filled");
        } else {
            //Sinon on definit le background de la case avec l'image Rond
            document.getElementById(zone).style.backgroundColor = "blue";
            //Et on lui ajoute la class "filled" pour ne plus pouvoir la changer
            document.getElementById(zone).className += " filled";
            document.getElementById(zone).textContent = " ";
            //On passe la main au player 'CROIX'
            player = players[0];
        }
    }
    ;
    //On fait un check :)
    checking();
}
;
function checking() {
    //Definition des getelement pour racourcir le if()
    one = document.getElementById('Cell0').textContent;
    two = document.getElementById('Cell1').textContent
    three = document.getElementById('Cell2').textContent;
    four = document.getElementById('Cell3').textContent;
    five = document.getElementById('Cell4').textContent;
    six = document.getElementById('Cell5').textContent;
    seven = document.getElementById('Cell6').textContent;
    eight = document.getElementById('Cell7').textContent;
    nine = document.getElementById('Cell8').textContent;
    //Si 1=2=3 OU 4=5=6 OU 7=8=9 etc....
    if (one === two && one === three ||
        four === five && four === six ||
        seven === eight && seven === nine ||
        one === five && one === nine ||
        three === five && three === seven ||
        one === four && one === seven ||
        two === five && two === eight ||
        three === six && three === nine) {
        if (player === players[0]) {
            alert('Player Blue WIN');
        } else if (player === players[1]) {
            alert('Player Red WIN');
        }
        //Rend visible le bouton rejouer
        document.getElementById("replay").style.visibility = "visible";
        document.getElementById("replay").onclick = function() {
            location.reload();
        }
    }
}