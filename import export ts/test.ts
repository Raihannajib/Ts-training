//import my file ts that have namesapce square
//Namespaces
// /// <reference path="script4.ts"/>
// import sq = Square;
// let target = sq.diaSquare(2);
// console.log(target);

//using Modules
import * as sq from "./Sq/sq";
console.log(sq.diaSquare2(2));