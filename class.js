class Object {
    constructor( /*nom, action,*/ x, y) {
        //this.nom = nom;
        //this.action = action;
        this.x = x;
        this.y = y;
    }
}

let bateau = new Object(Math.floor(Math.random() * 8), Math.floor(Math.random() * 8))