class Ruota{
    private diametro: Number;

    constructor(varDia: Number){
        this.diametro = varDia;
    }

    public stampaDet(){
        return `Ruota: ${this.diametro}`;
    }
}

class Auto{
    private marca: String;
    private ruote: Ruota[] = new Array();

    constructor(){}

    public setMarca(varMarca: String): void{
        this.marca = varMarca;
    }

    public getMarca(): String{
        return this.marca;
    }

    public addRuota(objRuota: Ruota){
        this.ruote.push(objRuota);
    }

    public stampaDettaglio(){
        console.log(`Automobile: ${this.marca}`);

        this.ruote.forEach(element => {
            console.log(element.stampaDet())
        });
    }

}

let au = new Auto();
au.setMarca("Audi");

au.addRuota( new Ruota(16) )
au.addRuota( new Ruota(16) )
au.addRuota( new Ruota(16) )
au.addRuota( new Ruota(16) )

au.stampaDettaglio();