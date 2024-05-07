"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.somma = exports.saluta = void 0;
function CalcolaDataOggi() {
    return new Date();
}
function saluta(varNome) {
    return "Ciao ".concat(varNome, " ").concat(CalcolaDataOggi());
}
exports.saluta = saluta;
var somma = function (numUno, numDue) {
    return numUno + numDue;
};
exports.somma = somma;
