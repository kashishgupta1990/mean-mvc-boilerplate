"use strict";

//Import Enums
var EventName = require("../src/enum/EventName");

exports.getUserInfo = function () {
    var emitter = this;
    emitter.emit(EventName.DONE, {name: 'Kashish Gupta', age: 24, gender: 'male'});
}.toEmitter();
