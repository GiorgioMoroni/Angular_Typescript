var Conto = /** @class */ (function () {
    function Conto(saldoIniziale) {
        this.saldo = saldoIniziale;
    }
    Conto.prototype.deposita = function (importo) {
        if (importo > 0) {
            this.saldo += importo;
            return true;
        }
        return false;
    };
    Conto.prototype.preleva = function (importo) {
        if (importo > 0 && importo <= this.saldo) {
            this.saldo -= importo;
            return true;
        }
        return false;
    };
    Conto.prototype.getSaldo = function () {
        return this.saldo;
    };
    return Conto;
}());
var mioConto = new Conto(1000);
if (mioConto.preleva(500))
    console.log("OK");
console.log(mioConto.getSaldo());
