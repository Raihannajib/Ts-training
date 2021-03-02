"use strict";
//javascript : dynamic type
//typescript : static types
var Name = "najib";
//but if
var nums; // is a : any type
// let nums : any
nums = 1;
nums = "ma";
var x = "hey";
x = { name: "hey" };
console.log(x);
/////////
//arrays
var hobbies = ["najib"];
//tuple simple array with two items
//respect the order
var tuple = ["num", 1];
//enum , behind scenes number assigns automatically to each element
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 0] = "red";
    Colors[Colors["green"] = 100] = "green";
    Colors[Colors["blue"] = 101] = "blue";
})(Colors || (Colors = {}));
var Green = Colors.blue;
console.log(Green);
//function type
function len(name) {
    return name.length;
}
var len2;
len2 = len;
console.log(len2("najib raihan"));
var user1 = { name: "ali", age: 20 };
var user2 = { name: "ali2", age: 22 };
var com2 = {
    data: [1, 2, 3, 4],
    output: function (bool) {
        var sum = 0;
        for (var i = 0; i < this.data.length; i++) {
            sum = sum + i;
        }
        return sum;
    }
};
console.log(com2);
/////// union type
var uniotype = 12;
uniotype = "27";
//// check type : typeof
var test = 12;
if (typeof (test) == "number") {
    console.log("is number");
}
/// replace undifined by null
var canBeNull = 12;
canBeNull = null;
var canThisBeany = null;
canBeNull = 12;
// function Greeter(greeting: string) {
//     // @ts-ignore
//     this.greeting = greeting;
// }
//
// Greeter.prototype.greet = function () {
//     return "hello"+this.greeting;
// };
//
// //@ts-ignore
// let greeter = new Greeter("world");
// let button = document.createElement('button');
// button.textContent="say hello";
// button.onclick = function () {
//     alert(greeter.greet());
// };
//
// document.body.appendChild(button);
