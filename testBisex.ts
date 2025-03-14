import { bisextile, isDateValide, nomJourSemaine, numJourSemaine, valeurCorrigeMois } from "./TD-Bisex.ts";

const testAnnee = 2020;
console.log("test de la fonction avec " + testAnnee + " attendu " + true);
console.log(bisextile(testAnnee));
console.log((bisextile(testAnnee)==true)? "test reussi": "test echoué");

const testAnnee2 = 2021;
console.log("test de la fonction avec " + testAnnee2 + " attendu " + false);
console.log(bisextile(testAnnee2));
console.log((bisextile(testAnnee2)==false)? "test reussi": "test echoué");

const testmois = 2;
const testAnnee3 = 2020;

console.log("test de la fonction valeurCorrigeMois avec " + testmois + " et " + testAnnee3 + " attendu " + 6);
console.log(valeurCorrigeMois(testmois,testAnnee3));
console.log((valeurCorrigeMois(testmois,testAnnee3)==6)? "test reussi": "test echoué");


const testmois2 = 1;
const testAnnee4 = 2021;    
console.log("test de la fonction valeurCorrigeMois avec " + testmois2 + " et " + testAnnee4 + " attendu " + 4);
console.log(valeurCorrigeMois(testmois2,testAnnee4));
console.log((valeurCorrigeMois(testmois2,testAnnee4)==4)? "test reussi": "test echoué");

const testNumeroJour:number = 1;
const testMois:number = 1;
const testAnnee5:number = 2021;
console.log("test de la fonction numJourSemaine avec " + testNumeroJour + " " + testMois + " et " + testAnnee5 + " attendu " + 5);
console.log(numJourSemaine(testNumeroJour,testMois,testAnnee5));
console.log((numJourSemaine(testNumeroJour,testMois,testAnnee5)==5)? "test reussi": "test echoué");


const testNumeroJour2:number = 1;
console.log("test de la fonction nomJourSemaine avec " + testNumeroJour2 + " attendu lundi");
console.log(nomJourSemaine(testNumeroJour2));
console.log((nomJourSemaine(testNumeroJour2)=="lundi")? "test reussi": "test echoué");

const testNumeroJour3:number = 0;
console.log("test de la fonction nomJourSemaine avec " + testNumeroJour3 + " attendu dimanche");
console.log(nomJourSemaine(testNumeroJour3));
console.log((nomJourSemaine(testNumeroJour3)=="dimanche")? "test reussi": "test echoué");

const testJour:number = 1;
const testMois3:number = 1;
const testAnnee6:number = 2021;
console.log("test de la fonction isDateValide avec " + testJour + " " + testMois3 + " et " + testAnnee6 + " attendu true");
console.log(isDateValide(testJour,testMois3,testAnnee6));   
console.log((isDateValide(testJour,testMois3,testAnnee6)==true)? "test reussi": "test echoué");