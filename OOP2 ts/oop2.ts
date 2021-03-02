class Student
{
    static V : number = 12 ;
    constructor(private _fullName :string , private _CNE : number)
    {
        this._fullName=_fullName;
        this._CNE=_CNE;
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(value: string) {
        this._fullName = value;
    }

    get CNE(): number {
        return this._CNE;
    }

    set CNE(value: number) {
        this._CNE = value;
    }

    public toString() : string
    {
        return `Name : ${this._fullName} | Cne : ${this._CNE}`;
    }
}

const S1 = new Student("najib",12459975);
console.log(S1.toString());
S1.CNE = 12345;//we create setter

///Inheritance

class gi1 extends Student
{

    constructor( private direction : string,name: string,cne : number)
    {
        super(name,cne);
        this.direction = direction;
    }

    toString(): string {
        return super.toString()+` | direction : ${this.direction}`;
    }

}

let najib = new gi1("bi","najib",15130356);
console.log(najib.toString());


///// Abstract class
//just for inherted from it
abstract class Greeting {
    abstract sayHello() : void;
}

class Gre extends Greeting{
    sayHello():void {
        console.log("hello");
    };

}


/////private constructors
class onlyOne
{
    private static instance : onlyOne ;
    private constructor(public readonly name : string){}; //readonly : just a getter
    static getInstace(){
        if(!onlyOne.instance){
            onlyOne.instance = new onlyOne('the only one');
        }
        return onlyOne.instance;
    }

}

//let wrong = new onlyOne('dwed');
let right = onlyOne.getInstace();
console.log(right.name);

//////////////////////
class Car
{
    private name : string;
    private  acceleration : number = 0;
    constructor(name : string)
    {
        this.name = name;
    }
    get Name(){
        return this.name;
    }
    set Name(name : string)
    {
        this.name = name;
    }

    set Acceleration(speed : number){
        this.acceleration += speed;
    }

    get Acceleration()
    {
        return this.acceleration;
    }

    honk()
    {
        console.log('Toooooooooot');
    }

}
////////////////////////
