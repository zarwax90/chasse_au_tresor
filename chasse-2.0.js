/*	Auteur			: Alexis PETIT
	Date de créat. 	: 18/03/2020
	Description		:
*/

//Initialise la variable coups
let coups = 0;
let coupsMalus = 5

//Position des objets
objets = genObjets();
let tresor = objets[0]
let bateau = objets[1]

//Variable du malus, mets une limite de coups si = à 1
let malus = 0

//Génére une position aléatoire pour chaque objet 
function genObjets() {
    let tableauObjets = []
    let tresor = Math.floor(Math.random() * 8) + "-" + Math.floor(Math.random() * 8);
    tableauObjets.push(tresor)
    for (let i = 0; i < 1; i++) {
        let bateau = Math.floor(Math.random() * 8) + "-" + Math.floor(Math.random() * 8);
        if (tableauObjets.indexOf(bateau) == -1) {
            tableauObjets.push(bateau)
        } else {
            i--
        }
    }
    return tableauObjets
}


function clickCase(idCase) {

    //ajoute 1 au nombre de coups
    if (malus == 0) {
        coups = coups + 1;
    } else {
        coups = coups + 1;
        coupsMalus = coupsMalus - 1;
    }

    if (coupsMalus < 0) {
        alert("Comment veux-tu avancer alors que l'on a coulé ?!");
    } else {
        //Trésor découvert
        //change le nom de la class de la case, affiche un message et affiche le trésor
        if (tresor == idCase) {
            document.getElementById(idCase).className = "bon";
            if (malus == 0) {
                alert("Soit c'est du génie, soit c'est de la folie ! Tu as trouvé ton trésor en " + coups + " coup(s) l'ami !");
            } else {
                //coupsMalus = coupsMalus + 1
                alert("Ouf on a eu chaud l'ami, notre bateau aurait tenu " + coupsMalus + " coup(s) de plus ! Félicitations tu as trouvé le trésor en " + coups + " coup(s) !");
            }
            //change le nom de la class de la case et affiche le bateau
        } else if (bateau == idCase) {
            document.getElementById(idCase).className = "bateau";
            malus = 1
            alert("Aïe on a été attaqué !! Notre bateau ne tiendra pas plus de 5 essaie alors dêpechons nous !");

            //Sur la bonne ligne, change le nom de la class de la case
        } else if (tresor[2] == idCase[2]) {
            document.getElementById(idCase).className = "ligne";

            //Sur la bonne colonne, change le nom de la class de la case
        } else if (tresor[0] == idCase[0]) {
            document.getElementById(idCase).className = "colonne";


            //Mauvaise case, change le nom de la class de la case
        } else {
            document.getElementById(idCase).className = "mauvais";
        }
    }

    //Affiche le nombre de coups
    if (malus == 0) {
        compte.innerHTML = " : " + coups;
    } else {
        compte.innerHTML = " restant(s) : " + coupsMalus;
    }
}

//Fonction générant un tableau de 8 lignes et 8 colonnes 
function initTab() {

    //Génération du tableau 
    grille = '<table class="carte">'

    //Boucle créant 8 lignes
    for (let x = 0; x < 8; x++) {
        grille = grille + '<tr>'

        //Boucle créant 8 colonnes 
        for (let y = 0; y < 8; y++) {
            let idCase = String(y) + "-" + String(x);
            grille = grille + '<td id="' + idCase + '" onclick="clickCase(this.id);"></td>';
        }
    }

    //affichage du tableau
    emplacementTable.innerHTML = grille;
}