"use strict";
// generic function
function Echo(data) {
    return data;
}
console.log(Echo("najib raihan").length);
//built in generics
var test1 = [1, 23];
//we cant push other type just numbers
test1.push(2);
function show(args) {
    args.forEach(function (element) { return console.log(element); });
}
show(["najib", "ali"]);
//generic type
var echo2 = Echo;
console.log(echo2("you can"));
//generic class
//constraint
//class genericEx<T extends number | string>
var genericEx = /** @class */ (function () {
    function genericEx() {
    }
    genericEx.prototype.calculate = function () {
        return +this.aVal * +this.bVal; // casting aVal and bVal to number by adding symbol '+'
    };
    return genericEx;
}());
var ex = new genericEx();
ex.aVal = 2;
ex.bVal = 6;
console.log(ex.calculate());
///////////////////
var Map = /** @class */ (function () {
    function Map() {
        //key is string | value is T
        this.map = {};
    }
    Map.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    Map.prototype.getItem = function (key) {
        return this.map[key];
    };
    Map.prototype.clearMap = function () {
        this.map = {};
    };
    Map.prototype.showMap = function () {
        for (var key in this.map) {
            console.log(key + " " + this.map[key]);
        }
    };
    return Map;
}());
var map = new Map();
map.setItem("word", 100);
map.setItem("word2", 1002);
console.log(map.getItem("word"));
map.showMap();
map.clearMap();
