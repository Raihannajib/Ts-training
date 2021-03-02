type bankAccount = { money: number , deposit : (value : number)=>void };
type myself = {name : string , banckAcount : bankAccount,hobbies: string[]};

let account : bankAccount = {
    money:2000,
    deposit: function (value:number) {
        this.money += value;
    }
};

let me : myself = {
    name :"Max",
    banckAcount : account,
    hobbies:["sports" , "Cooking"]
};

me.banckAcount.deposit(30000);
console.log(me);

/// Arrow funtcion
const multiply = (n1 : number , n2 : number) => n1*n2;
console.log(multiply(5,3));

const hello = friend => console.log("hello "+friend);
hello("najib");

const decrementation = (num : number):void=>{
    while (num>0){
        num--;
    }
    console.log(num);
};
decrementation(10);

//spread : fetch array to sigle elements
const num=[1,2,89];
console.log(num);
console.log(...num);
console.log(Math.max(...num));

//rest put all args in one array::combine
function rest(...args:number[]){
    return args;
}

///Destructing arrays into individual variables during assignment
const Array1 : string[]  = ["najib","ali"];
const [name1 , name2] = Array1;
console.log(name1,name2);
//destruct object
const userData = {name:"najib",age:22};
const {name : n1 , age : a1} = userData;
console.log(n1,a1);


//template literal
const greeting : string = `hello world 
                            i'am  ${userData.name}`;
console.log(greeting);

const f1 = (value:number)=> value*2;
const f2 = (name:string)=>{
    if (name == undefined) { name="max";}
    console.log(`hello ${name}`);
};

console.log(f1(2));
console.log(f2("Anna"));
let numbers : number[] = [1,2,3,4];
console.log(Math.min(...numbers));

let newArray: number[] = [12,13];
newArray.push(...numbers);
console.log(newArray);