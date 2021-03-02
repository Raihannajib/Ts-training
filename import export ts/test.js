"use strict";
//import my file ts that have namesapce square
//Namespaces
// /// <reference path="script4.ts"/>
// import sq = Square;
// let target = sq.diaSquare(2);
// console.log(target);
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//using Modules
var sq = __importStar(require("./Sq/sq"));
console.log(sq.diaSquare2(2));
