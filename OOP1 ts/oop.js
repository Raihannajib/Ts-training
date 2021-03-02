"use strict";
var account = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var me = {
    name: "Max",
    banckAcount: account,
    hobbies: ["sports", "Cooking"]
};
me.banckAcount.deposit(30000);
console.log(me);
/// Arrow funtcion
var multiply = function (n1, n2) { return n1 * n2; };
console.log(multiply(5, 3));
var hello = function (friend) { return console.log("hello " + friend); };
hello("najib");
var decrementation = function (num) {
    while (num > 0) {
        num--;
    }
    console.log(num);
};
decrementation(10);
//spread : fetch array to sigle elements
var num = [1, 2, 89];
console.log(num);
console.log.apply(console, num);
console.log(Math.max.apply(Math, num));
//rest put all args in one array::combine
function rest() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
///Destructing arrays into individual variables during assignment
var Array1 = ["najib", "ali"];
var name1 = Array1[0], name2 = Array1[1];
console.log(name1, name2);
//destruct object
var userData = { name: "najib", age: 22 };
var n1 = userData.name, a1 = userData.age;
console.log(n1, a1);
//template literal
var greeting = "hello world \n                            i'am  " + userData.name;
console.log(greeting);
var f1 = function (value) { return value * 2; };
var f2 = function (name) {
    if (name == undefined) {
        name = "max";
    }
    console.log("hello " + name);
};
console.log(f1(2));
console.log(f2("Anna"));
var numbers = [1, 2, 3, 4];
console.log(Math.min.apply(Math, numbers));
var newArray = [12, 13];
newArray.push.apply(newArray, numbers);
console.log(newArray);
