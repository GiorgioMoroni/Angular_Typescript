class Conto{
    private saldo: number;

    constructor(saldoIniziale: number){
        this.saldo = saldoIniziale;
    }

    deposita(importo: number) : boolean{
        if(importo > 0){
            this.saldo += importo;
            return true;
        }
        return false;
    }

    preleva(importo: number) : boolean{
        if(importo > 0 && importo <= this.saldo){
            this.saldo -= importo;
            return true;
        }
        return false;
    }

    getSaldo() : number{
        return this.saldo;
    }
}

let mioConto = new Conto(1000);
if(mioConto.preleva(500))
    console.log("OK");

console.log(mioConto.getSaldo());

