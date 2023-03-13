// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.



//Email section
let verifiedEmailList = [
    'giuseppeluca@gmail.com',
    'cleliafradella@gmail.com',
    'marcoacciarri@gmail.com',
    'samuelpanicucci@gmail.com'
]


let emailBox = document.getElementById('email');

const emailSubmit = document.getElementById('emailSubmit');


// Email verification
emailSubmit.addEventListener('click', function () {

    let emailValue = emailBox.value;
    let emailValid = false;

    for (i = 0; i < verifiedEmailList.length; i++) {
        if (emailValue === verifiedEmailList[i]) {
            emailValid = true;
        }
    }


    if (emailValid === true) {

        document.getElementById('verified-email').innerHTML = `
        <h4 class="text-success">Email verificata!</h4>
        `

    } else {

        document.getElementById('verified-email').innerHTML = `
        <h4 class="text-danger">Email non verificata!</h4>`

    }

})



// dice game section



const diceSubmit = document.getElementById('diceSubmit');


diceSubmit.addEventListener('click', function () {

    let userDice = rndNumber(1, 6);
    let computerDice = rndNumber(1, 6);

    document.getElementById('user-dice').innerHTML += `<h3 class="text-white">${userDice}</h3>`
    document.getElementById('computer-dice').innerHTML += `<h3 class="text-white">${computerDice}</h3>`

    if (userDice > computerDice) {
        document.getElementById('winner').innerHTML = `<h3 class="text-success">Hai vinto!!</h3>`
    } else if (userDice === computerDice){
        document.getElementById('winner').innerHTML = `<h3>Hai pareggiato</h3>`
    }
    else {
        document.getElementById('winner').innerHTML = `<h3 class="text-danger">Hai perso..</h3>`
    }


})








