// const somma = (numUno: number, numDue: number): number => {
//     return numUno + numDue;
// }

// let uno : Number = 5;
// let due : number = 6;

// console.log(uno);
// console.log(due);

//---------------------------------------------------------------------------

// const saluta = (varNome: String, varCognome: String, varTitolo?: String) => {
//     if(varTitolo)
//         console.log(`Ciao ${varTitolo} ${varNome} ${varCognome}`)
//     else
//         console.log(`Ciao ${varNome} ${varCognome}`)
// }

// saluta("Giovanni", "Pace");

//-----------------------------------------------------------------------------

const saluta = (varNome: String, varCognome: String, varTitolo?: String) => {
    console.log(`Ciao ${varTitolo} ${varNome} ${varCognome}`)
    
}

saluta("Giovanni", "Pace");
saluta("Valeria", "Verdi", "Sig.ra");