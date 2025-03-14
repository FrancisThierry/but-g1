// Écrivez une fonction qui prend un entier représentant une année et qui retourne un booléen qui indique si
// l'année est bissextile ou non. Pour rappel, une année bissextile est une année :
// divisible par 4 et qui n'est pas une année séculaire (divisible par 100)
// ou alors qui est divisible par 400.

export function bisextile(annee: number): boolean {
    if (annee % 4 == 0 && !isSeculaire(annee)) return true;
    if (annee % 400 == 0) return true;
    return false;
}

export function isSeculaire(annee: number): boolean {
    return annee % 100 == 0;
}


// Écrivez une fonction paramétrée par deux nombres représentant un mois et une année qui renvoie la valeur
// corrigée du mois selon l'algorithme de Delambre (cf tableau ci-dessus).

function delambre(date: string): number {
    const mois = parseInt(date.slice(2, 4), 10);
    const annee = parseInt(date.slice(4), 10);
    if (mois == 2 && bisextile(annee)) return 0;
    return 0;
}   


// Formule de Delambre
// Lʼalgorithme de calcul dans le cadre du calendrier grégorien de la valeur du jour due à Delambre est :
// $$(k + q + cd + M + j + 2 + 5\times ab) % 7$$
// où
// $ab$ est la partie séculaire de lʼannée (les deux premiers chiffres),
// $cd$ est la partie annuelle de lʼannée (les deux derniers chiffres),
// $j$ est le quantième du mois (le numéro du jour dans le mois),
// $k$ est la partie entière du quart de la partie annuelle,
// $q$ est la partie entière du quart de la partie séculaire,
// $M$ est la valeur corrigée du mois selon le tableau ci-dessous (entre parenthèse, la correction pour
// les années bissextiles) :
// Mois Jan Fev Mar Avr

function delambreValue(date: string): number {

    // Mois Jan Fev Mar Avr Mai Jui Jui Aou Sep Oct Nov Dec
    // $M$  4 (3) 0 (6) 0 3 5 1 3 6 2 4 0 2

    const moisClassqiue = [4, 0, 0, 3, 5, 1, 3, 6, 2, 4, 0, 2];
    const moisBissextile = [3, 6, 0, 3, 5, 1, 3, 6, 2, 4, 0, 2];

    const j = parseInt(date.slice(0, 2), 10);
    const mois = parseInt(date.slice(2, 4), 10);
    const annee = parseInt(date.slice(4), 10);
    const ab = Math.floor(annee / 100);
    const cd = annee % 100;
    const k = Math.floor(cd / 4);
    const q = Math.floor(ab / 4);
    const M = bisextile(annee) ? moisBissextile[mois - 1] : moisClassqiue[mois - 1];
    return (k + q + cd + M + j + 2 + 5 * ab) % 7;
}


export function valeurCorrigeMois(mois: number, annee: number): number {
    const moisClassique = [4, 0, 0, 3, 5, 1, 3, 6, 2, 4, 0, 2];
    const moisBissextile = [3, 6, 0, 3, 5, 1, 3, 6, 2, 4, 0, 2];
    return bisextile(annee) ? moisBissextile[mois - 1] : moisClassique[mois - 1];
}

// Définissez une fonction paramétrée par trois entiers représentant une date supposée valide qui renvoie le
// numéro
export function numJourSemaine(jour: number, mois: number, annee: number): number {
    const ab = Math.floor(annee / 100);
    const cd = annee % 100;
    const k = Math.floor(cd / 4);
    const q = Math.floor(ab / 4);
    const M = valeurCorrigeMois(mois, annee);
    return (k + q + cd + M + jour + 2 + 5 * ab) % 7;
}

// Écrivez une fonction qui prend un entier (que l'on suppose compris entre 0 et 6) et qui retourne une chaîne
// de caractères contenant le nom du jour correspondant.
export function nomJourSemaine(jour: number): string {
    const jours = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
    return jours[jour];
}


// Définissez une fonction paramétrée par trois entiers (jour, mois, année) qui indique si la date est valide.
export function isDateValide(jour: number, mois: number, annee: number): boolean {
    if (mois < 1 || mois > 12) return false;
    if (jour < 1 || jour > 31) return false;
    if (mois == 2 && jour > 29) return false;
    if (mois == 4 || mois == 6 || mois == 9 || mois == 11) {
        if (jour > 30) return false;
    }
    return true;
}
