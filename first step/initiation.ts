//javascript : dynamic type
//typescript : static types
let Name = "najib";

//but if

let nums;  // is a : any type
// let nums : any
nums=1;
nums="ma";
let x : any = "hey" ;
x = {name:"hey"};
console.log(x);
/////////
//arrays
let hobbies : string[] = ["najib"];

//tuple simple array with two items
//respect the order
let tuple : [string,number] = ["num",1];

//enum , behind scenes number assigns automatically to each element
enum Colors{
    red,
    green=100, //continue from 100
    blue
}
let Green : Colors = Colors.blue;
console.log(Green);

//function type
function len(name : string):number {
    return name.length;
}
let len2 : (name:string) => number;
len2 = len;
console.log(len2("najib raihan"));

/////////////objects
// use type alias like typedef
type userData = {name:string , age : number};
let user1 : userData = {name:"ali",age:20};
let user2 :userData = {name:"ali2",age:22};

///////// complex={}

type complexe = {data:number[] , output: (bool : boolean) => number};
let com2 : complexe = {
    data: [1,2,3,4],
    output: function (bool:boolean):number {
        let sum = 0;
        for (let i=0;i<this.data.length;i++)
        {
            sum=sum + i;
        }
        return sum;
    }
};
console.log(com2);

/////// union type
let uniotype : number | string = 12;
uniotype = "27";

//// check type : typeof
let test = 12;
if (typeof(test) == "number"){
    console.log("is number");
}

/// replace undifined by null
let canBeNull : number | null = 12;
canBeNull = null;
let canThisBeany :any = null;
canBeNull= 12;

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
