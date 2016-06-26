'use strict';

function Jalla () {
    this.text = "Jalla jalla jalla";
}

Jalla.prototype.jalla = function () {
    console.log(this.text);
}

exports = module.exports = Jalla;