class Utente {
    private static idCounter = 1;
    private cod : number;
    private nominativo: String;
    private lista: Oggetto[];
    

    constructor(nominativo: String) {
        this.cod = Utente.idCounter++;
        this.nominativo = nominativo;
    }

    public setUtente(varUtente: String) : void{
        this.nominativo = varUtente;
    }
    public getUtente() : String{
        return this.nominativo;
    }

    public getCodice() : number{
        return this.cod;
    }

    public stampaUtenteEOggetti(){
        console.log(`Utente: ${this.cod}, ${this.nominativo}`);

        this.lista.forEach(element => {
            console.log(element.stampaOggetto());
        });
        
    }

    public stampaUtente(){
        console.log(`Utente: ${this.cod}, ${this.nominativo}`);
        
    }

    public addOggetto(objOgg: Oggetto) : void{
        if(!this.lista)
            this.lista = new Array();

        this.lista.push(objOgg);
        objOgg.setProprietario(this);
    }
}

class Oggetto {
    
    private nome: String;
    private desc: String;
    private proprietario: Utente;

    constructor(nome: String, descrizione: String ) {
        this.nome = nome;
        this.desc = descrizione;
    }

    public setProprietario(varProp: Utente) : void{
        this.proprietario = varProp;
    }
    public getProprietario() : Utente{
        return this.proprietario;
    }

    public stampaOggetto(){
        return `Oggetto: ${this.nome}, ${this.desc}`;
    }

    public stampaOggettoEProrpietario(){
        console.log(`Oggetto: ${this.nome}, ${this.desc}, di: ${this.proprietario.getUtente()}`);
    }

}
  
class Proposta {
    private da: Utente;
    private a: Utente;
    private oggDa: Oggetto;
    private oggA: Oggetto;
    private propRiuscita: boolean = false;

    constructor(da: Utente, a: Utente, oggettoDa: Oggetto, oggettoA: Oggetto) {
        this.da = da;
        this.a = a;
        this.oggDa = oggettoDa;
        this.oggA = oggettoA;

    }

    public setPropRiuscita(varProp: boolean) : void{
        this.propRiuscita = varProp;
    }
    public getpropRiuscita() : boolean{
        return this.propRiuscita;
    }

    stampaProposta(){
        return `Proposta: ${this.da.stampaUtente()} ${this.oggDa.stampaOggetto()}, ${this.a.stampaUtente()} ${this.oggA.stampaOggetto()}`;
    }

    
}
  
class Transazione {
    private static contatore = 1;
    private codice: number;
    private prop: Proposta;

    constructor(proposta: Proposta) {
        this.codice = Transazione.contatore++;
        this.prop = proposta;
        
    }

    stampaTransazione(){
        if(this.prop.getpropRiuscita() == true)
            return `Transazione: ${this.codice}, ${this.prop.stampaProposta()}`;
        
    }
}

export {Utente, Oggetto, Proposta, Transazione}