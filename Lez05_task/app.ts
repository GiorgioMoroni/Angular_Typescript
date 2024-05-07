import {Utente, Oggetto, Proposta, Transazione} from './Utente'

let gio = new Utente("Giovanni");


let ogg1 = new Oggetto("Ps5", "Console");
let ogg2 = new Oggetto("Xbox", "Console");
let ogg3 = new Oggetto("Switch", "Console");

gio.addOggetto(ogg1);
gio.addOggetto(ogg2);
gio.addOggetto(ogg3);

// gio.stampaUtente();
// gio.stampaUtenteEOggetti();

// console.log(ogg1.stampaOggetto());

ogg1.stampaOggettoEProrpietario();



