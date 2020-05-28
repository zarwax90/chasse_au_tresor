/*	Auteur			: Alexis PETIT
	Date de créat. 	: 18/03/2020
	Description		:
*/

//Initialise la variable coups
let coups = 0

//Position des objets
let tresor = Math.floor(Math.random() * 8) + "-" + Math.floor(Math.random() * 8)

function clickCase(idTresor) {

    //ajoute 1 au nombre de coups
    coups = coups + 1

    //Trésor découvert
    //change le nom de la class de la case et affiche un message  
    if (tresor == idTresor) {
        document.getElementById(idTresor).className = "bon";
        alert("Soit c'est du génie, soit c'est de la folie ! Tu as trouvé ton trésor en " + coups + " coup(s) l'ami !");

        //Sur la bonne ligne, change le nom de la class de la case
    } else if (tresor[2] == idTresor[2]) {
        document.getElementById(idTresor).className = "ligne";

        //Sur la bonne colonne, change le nom de la class de la case
    } else if (tresor[0] == idTresor[0]) {
        document.getElementById(idTresor).className = "colonne";

        //Mauvaise case, change le nom de la class de la case
    } else {
        document.getElementById(idTresor).className = "mauvais";
    }

    //Affiche le nombre de coups
    compte.innerHTML = coups
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
            let idTresor = String(y) + "-" + String(x);
            grille = grille + '<td id="' + idTresor + '" onclick="clickCase(this.id);"></td>';
        }
    }

    //affichage du tableau
    emplacementTable.innerHTML = grille
}