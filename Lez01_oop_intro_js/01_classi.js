class Automobile{

    constructor(varMarca, varModello){
        this.marca = varMarca;
        this.modello = varModello;
    }

    stampaDettaglio(){
        console.log(`Automobile: ${this.marca} ${this.modello}`);
    }
}

let autoUno = new Automobile("BMW", "Da corsa");
autoUno.stampaDettaglio();

autoUno.marca = "LEXUS";
autoUno.stampaDettaglio();