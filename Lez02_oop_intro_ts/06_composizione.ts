class Componente{
    private descrizione: String;

    constructor(varDesc: String){
        this.descrizione = varDesc
    }
}

class AutoM{

    private motore: Componente[];
    private marca: String;

    constructor(){

    }

    public setMarca(varMarca: String) : void{
        this.marca = varMarca;
    }
    public getMarca() : String{
        return this.marca
    }

    public addComponente(objCom: Componente) : void{
        if(!this.motore)
            this.motore = new Array();

        this.motore.push(objCom);
    }
}

