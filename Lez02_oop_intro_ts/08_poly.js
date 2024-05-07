var Gatto = /** @class */ (function () {
    function Gatto() {
    }
    Gatto.prototype.versoEmesso = function () {
        console.log("Miao");
    };
    return Gatto;
}());
var Cane = /** @class */ (function () {
    function Cane() {
    }
    Cane.prototype.versoEmesso = function () {
        console.log("Bau");
    };
    return Cane;
}());
var Coccodrillo = /** @class */ (function () {
    function Coccodrillo() {
    }
    Coccodrillo.prototype.versoEmesso = function () {
        console.log("Boh");
    };
    return Coccodrillo;
}());
// let prova : Animale;        //Gatto | Cane
// prova = new Gatto();
function emettiVerso(objAni) {
    objAni.versoEmesso();
}
emettiVerso(new Gatto);
emettiVerso(new Cane);
emettiVerso(new Coccodrillo);
