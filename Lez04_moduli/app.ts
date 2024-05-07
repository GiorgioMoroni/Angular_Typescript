import {saluta, somma} from './funzioni_utilita'
import {Persona} from './Persona'

console.log(saluta("Giovanni"));

console.log(somma(4, 6));

let gio = new Persona("Giovanni Pace");
console.log(gio.stampaDettaglio());

let val = new Persona("Valeria Verdi", "Via le mani dal naso", "Boh");
console.log(val.stampaDettaglio());