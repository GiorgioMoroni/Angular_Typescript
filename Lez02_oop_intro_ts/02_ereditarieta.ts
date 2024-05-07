class Automobile{

    marca: String;
    modello: String;

    constructor(varMarca: String, varModello: String){
        this.marca = varMarca;
        this.modello = varModello;
    }

    stampaDettaglio() : void{
        console.log(`Automobile: ${this.marca} ${this.modello}`);
    }

}

class Autoelettrica extends Automobile{
    autonomia: number;

    constructor(varMarca: String, varModello: String, varAutonomia: number){
        super(varMarca, varModello);
        this.autonomia = varAutonomia;
    }

    stampaDettaglio() : void{
        console.log(`Automobile Elettrica: ${this.marca} ${this.modello} ${this.autonomia}`);
    }
}

let autoUno = new Automobile("LEXUS", "Da corsa");
autoUno.stampaDettaglio();


let autoDue = new Autoelettrica("Tesla", "Auto guida autonoma", 400);
autoDue.stampaDettaglio();