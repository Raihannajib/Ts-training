// generic function
function Echo<T>(data:T) : T{
    return data;
}
console.log(Echo("najib raihan").length);

//built in generics
const test1 : Array<number> = [1,23];
//we cant push other type just numbers
test1.push(2);

function show<T>(args: T[]) {
    args.forEach((element)=>console.log(element));
}
show<string>(["najib","ali"]);

//generic type
let echo2 : <T>(data:T) => T = Echo;
console.log(echo2("you can"));

//generic class
//constraint
//class genericEx<T extends number | string>
class genericEx<T > {
    // @ts-ignore
    aVal : T ;
    // @ts-ignore
    bVal : T;

    calculate():number{
        return +this.aVal*+this.bVal;  // casting aVal and bVal to number by adding symbol '+'
    }
}
const ex = new genericEx<number>();
ex.aVal = 2;
ex.bVal=6;
console.log(ex.calculate());

///////////////////
class Map<T>{
    //key is string | value is T
    private map : {[key:string] : T} = {};
    setItem (key:string , item :T){
      this.map[key]=item;
    }
    getItem(key:string) :T {
        return this.map[key];
    }
    clearMap(){
        this.map={};
    }
    showMap(){
        for (let key in this.map ){
            console.log(key+" "+this.map[key]);
        }
    }
}

const map = new Map<number>();
map.setItem("word",100);
map.setItem("word2",1002);
console.log(map.getItem("word"));
map.showMap();
map.clearMap();

