"use strict";
// decorator just a function
//decorator attached to class =>gives you a reference
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logged(constructorFn) {
    console.log(constructorFn);
}
var classN = /** @class */ (function () {
    function classN() {
        console.log("hi");
    }
    classN = __decorate([
        logged
    ], classN);
    return classN;
}());
//Factory := decorator+parameters ex below :boolean
function logging(value) {
    return value ? logged : null;
}
// @ts-ignore
var Carr = /** @class */ (function () {
    function Carr() {
    }
    Carr = __decorate([
        logging(true)
    ], Carr);
    return Carr;
}());
/////
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    }; //add method print to prototype of class
}
var Strudent = /** @class */ (function () {
    function Strudent() {
        this.name = "najib";
    }
    Strudent = __decorate([
        logging(true),
        printable
    ], Strudent);
    return Strudent;
}());
var s1 = new Strudent();
s1.print(); // any : typescript can't recognize
//Methods decorators
function editable(value) {
    return function (target, propName, descriptor) {
        //targert:any = static or private... Method
        descriptor.writable = value; //make writable or not
    };
}
//Property decorator
function overwritable(value) {
    return function (target, propName) {
        //targert:any = static or private... Method
        var descriptor = {
            writable: value //make writable or not
        };
        return descriptor;
    };
}
var Project = /** @class */ (function () {
    function Project(name) {
        this.name = name;
    }
    Project.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(false)
    ], Project.prototype, "name", void 0);
    __decorate([
        editable(true) //our descriptor of property ,it makes property editable(configure)
    ], Project.prototype, "calcBudget", null);
    return Project;
}());
var p22 = new Project("sup");
p22.calcBudget();
p22.calcBudget = function () {
    console.log(2000);
};
p22.calcBudget();
