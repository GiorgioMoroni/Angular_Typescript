"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transazione = exports.Proposta = exports.Oggetto = exports.Utente = void 0;
var Utente = /** @class */ (function () {
    function Utente(nominativo) {
        this.cod = Utente.idCounter++;
        this.nominativo = nominativo;
    }
    Utente.prototype.setUtente = function (varUtente) {
        this.nominativo = varUtente;
    };
    Utente.prototype.getUtente = function () {
        return this.nominativo;
    };
    Utente.prototype.getCodice = function () {
        return this.cod;
    };
    Utente.prototype.stampaUtenteEOggetti = function () {
        console.log("Utente: ".concat(this.cod, ", ").concat(this.nominativo));
        this.lista.forEach(function (element) {
            console.log(element.stampaOggetto());
        });
    };
    Utente.prototype.stampaUtente = function () {
        console.log("Utente: ".concat(this.cod, ", ").concat(this.nominativo));
    };
    Utente.prototype.addOggetto = function (objOgg) {
        if (!this.lista)
            this.lista = new Array();
        this.lista.push(objOgg);
        objOgg.setProprietario(this);
    };
    Utente.idCounter = 1;
    return Utente;
}());
exports.Utente = Utente;
var Oggetto = /** @class */ (function () {
    function Oggetto(nome, descrizione) {
        this.nome = nome;
        this.desc = descrizione;
    }
    Oggetto.prototype.setProprietario = function (varProp) {
        this.proprietario = varProp;
    };
    Oggetto.prototype.getProprietario = function () {
        return this.proprietario;
    };
    Oggetto.prototype.stampaOggetto = function () {
        return "Oggetto: ".concat(this.nome, ", ").concat(this.desc);
    };
    Oggetto.prototype.stampaOggettoEProrpietario = function () {
        console.log("Oggetto: ".concat(this.nome, ", ").concat(this.desc, ", di: ").concat(this.proprietario.getUtente()));
    };
    return Oggetto;
}());
exports.Oggetto = Oggetto;
var Proposta = /** @class */ (function () {
    function Proposta(da, a, oggettoDa, oggettoA) {
        this.propRiuscita = false;
        this.da = da;
        this.a = a;
        this.oggDa = oggettoDa;
        this.oggA = oggettoA;
    }
    Proposta.prototype.setPropRiuscita = function (varProp) {
        this.propRiuscita = varProp;
    };
    Proposta.prototype.getpropRiuscita = function () {
        return this.propRiuscita;
    };
    Proposta.prototype.stampaProposta = function () {
        return "Proposta: ".concat(this.da.stampaUtente(), " ").concat(this.oggDa.stampaOggetto(), ", ").concat(this.a.stampaUtente(), " ").concat(this.oggA.stampaOggetto());
    };
    return Proposta;
}());
exports.Proposta = Proposta;
var Transazione = /** @class */ (function () {
    function Transazione(proposta) {
        this.codice = Transazione.contatore++;
        this.prop = proposta;
    }
    Transazione.prototype.stampaTransazione = function () {
        if (this.prop.getpropRiuscita() == true)
            return "Transazione: ".concat(this.codice, ", ").concat(this.prop.stampaProposta());
    };
    Transazione.contatore = 1;
    return Transazione;
}());
exports.Transazione = Transazione;
