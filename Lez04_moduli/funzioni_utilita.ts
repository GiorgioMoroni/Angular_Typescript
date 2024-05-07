function CalcolaDataOggi() : Date{
    return new Date();
}

export function saluta(varNome: String) : String{
    return `Ciao ${varNome} ${CalcolaDataOggi()}`;
}

export const somma = (numUno: number, numDue: number): number => {
    return numUno + numDue;
}