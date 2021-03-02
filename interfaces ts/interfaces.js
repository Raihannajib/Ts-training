"use strict";
/////interface with pbject
var p = {
    name: "najib",
    keyvalue: [22, "najib"],
    greet: function (p1) {
        console.log(" say : Hello" + this.name);
    }
};
p.greet("najib");
///// interface with classes
var person = /** @class */ (function () {
    function person() {
        this.name = "";
        this.lastname = "";
    }
    person.prototype.greet = function (last) {
        console.log("hello" + this.lastname);
    };
    return person;
}());
var p2 = new person();
p2.lastname = "najib";
p2.greet("");
var dofu2;
dofu2 = function (v) {
    return v * 2;
};
console.log(dofu2(2));
// object with derived class
var p5Object = {
    direction: "bi",
    name: "najib",
    greet: function (last) {
        console.log('hello');
    }
};
console.log(p5Object);
