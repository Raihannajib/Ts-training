interface Personne {
    name : string,
    age? : number  //optional
    [keyName : string] : any;
    greet (last:string):void;
}

/////interface with pbject
const p : Personne = {
    name:"najib",
    keyvalue : [22,"najib"],
    greet(p1 : string) {
    console.log(` say : Hello`+this.name);
}
};

p.greet("najib");

///// interface with classes
class person implements Personne
{
    name : string ="";
    lastname : string="";
    greet(last: string): void {
        console.log("hello"+this.lastname)
    }

}
let p2 = new person();
p2.lastname = "najib";
p2.greet("");


//function types
interface dofu {
    (num : number) : number;
}

let dofu2 : dofu;
dofu2 = function (v : number) {
    return v*2;
};

console.log(dofu2(2));

//interface inheritance
interface Personnederive extends Personne{
    direction : string;
}

// object with derived class
const p5Object : Personnederive = {    //object propreties = parent class + dirved class
    direction:"bi",
    name:"najib",
    greet(last: string): void {
        console.log('hello');
    }
};

console.log(p5Object);