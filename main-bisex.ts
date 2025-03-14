import { bisextile, isDateValide, nomJourSemaine, numJourSemaine, valeurCorrigeMois } from "./TD-Bisex.ts";



// Écrivez un programme qui demande à un utilisateur une date sous forme de trois entiers et qui affiche le
// nom du jour correspondant. Si l'utilisateur entre une date incorrecte, le programme doit afficher un
// message d'erreur.
// Deviner le nombre
// Il sʼagit de programmer un jeu qui :
// fait choisir à lʼordinateur un nombre mystère compris entre 1 et 100 en utilisant un générateur
// pseudo-aléatoire ;
// demande à un utilisateur d'entrer un nombre ;
// compare la réponse de lʼutilisateur avec le nombre mystère :
// si la réponse est égale au nombre mystère, affiche "gagné" ;
// si la réponse est strictement inférieure au nombre mystère, affiche "plus" ;
// si la réponse est strictement supérieure au nombre mystère, affiche "moins" ;
// recommence jusquʼà ce que lʼutilisateur ait trouvé le nombre mystère ou ait fait 7 tentatives;

// Function to get the day of the week for a given date
function getDayOfWeek() {
    const day = parseInt(prompt("Entrez le jour: ") || "");
    const month = parseInt(prompt("Entrez le mois: ") || "");
    const year = parseInt(prompt("Entrez l'année: ")|| "");

    if (isDateValide(day, month, year)) {
        const dayOfWeek = numJourSemaine(day, month, year);
        console.log(`Le jour de la semaine est: ${dayOfWeek}`);
    } else {
        console.log("Date incorrecte");
    }
}

// Function to play the guessing game
function guessingGame() {
    const mysteryNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let guessed = false;

    while (attempts < 7 && !guessed) {
        const userGuess = parseInt(prompt("Entrez un nombre entre 1 et 100: ") || "");
        attempts++;

        if (userGuess === mysteryNumber) {
            console.log("gagné");
            guessed = true;
        } else if (userGuess < mysteryNumber) {
            console.log("plus");
        } else {
            console.log("moins");
        }
    }

    if (!guessed) {
        console.log(`Désolé, le nombre mystère était ${mysteryNumber}`);
    }
}

// Main function to run the programs
function main() {
    getDayOfWeek();
    guessingGame();
}

main();