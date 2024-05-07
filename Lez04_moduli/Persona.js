"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Indirizzo = /** @class */ (function () {
    function Indirizzo(via, citta) {
        this.via = via;
        this.citta = citta;
    }
    Indirizzo.prototype.stampaIndirizzo = function () {
        return "Indirizzo: ".concat(this.via, " ").concat(this.citta);
    };
    return Indirizzo;
}());
var Persona = /** @class */ (function () {
    function Persona(nominativo, via, citta) {
        if (via === void 0) { via = "N.D."; }
        if (citta === void 0) { citta = "N.D."; }
        this.nominativo = nominativo;
        this.ind = new Indirizzo(via, citta);
    }
    Persona.prototype.stampaDettaglio = function () {
        return this.metodoPersonalizzato();
    };
    Persona.prototype.metodoPersonalizzato = function () {
        var _a;
        return "Ciao: ".concat(this.nominativo, " ").concat((_a = this.ind) === null || _a === void 0 ? void 0 : _a.stampaIndirizzo());
    };
    return Persona;
}());
exports.Persona = Persona;
