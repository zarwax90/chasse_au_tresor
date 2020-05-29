class Object {
    constructor(nom, action, mb, xy) {
        this.nom = nom;
        this.action = action;
        this.mb = mb
        this.xy = xy;
    }
    getxy() {
        return this.xy;
    }
}

let boat = new Object("bateau", "5 coups restants", "malus", objets[0]);
let tresors = new Object("tresor", "win the game", "bonus", objets[1]);