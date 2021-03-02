// decorator just a function
 //decorator attached to class =>gives you a reference

function logged(constructorFn : Function) : any{
    console.log(constructorFn);
}

@logged
class classN {
    constructor()
    {
        console.log("hi");
    }
}

//Factory := decorator+parameters ex below :boolean
function logging(value:boolean) :void | any {
    return value ? logged : null;
}

// @ts-ignore
@logging(true)
class Carr{

}

/////
function printable(constructorFn : Function) {
    constructorFn.prototype.print   = function () {
        console.log(this);
    }        //add method print to prototype of class
}

@logging(true)
@printable
class Strudent{
    name="najib";
}
const s1 = new Strudent();
(<any>s1).print(); // any : typescript can't recognize


//Methods decorators
function editable(value:boolean) {
    return function (target:any, propName:string, descriptor: PropertyDescriptor) {
       //targert:any = static or private... Method
        descriptor.writable = value;           //make writable or not
    }
}
//Property decorator
function overwritable(value:boolean) : any{
    return function (target:any, propName:string) {
        //targert:any = static or private... Method
         const descriptor: PropertyDescriptor={
                writable : value           //make writable or not
    };
         return descriptor;

    }
}
class Project
{
    @overwritable(false)
    //make name not writable
    private name:string;

    constructor(name:string){
        this.name = name;
    }

    @editable(true)        //our descriptor of property ,it makes property editable(configure)
    calcBudget(){
        console.log(1000);
    }
}

const p22 = new Project("sup");
p22.calcBudget();
p22.calcBudget = function () {
    console.log(2000);
}
p22.calcBudget();


