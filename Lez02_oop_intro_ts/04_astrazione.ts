abstract class Animale{
    hasPelo: boolean = false;

    abstract versoEmesso(): void;

    dormi(): void{
        console.log("zzzzZZZZ");
    }
}

class Gatto extends Animale{

    versoEmesso(): void {
        console.log("Miao");
    }
}

let bu = new Gatto();
bu.versoEmesso();
bu.dormi();

