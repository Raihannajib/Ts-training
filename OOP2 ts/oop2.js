"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(_fullName, _CNE) {
        this._fullName = _fullName;
        this._CNE = _CNE;
        this._fullName = _fullName;
        this._CNE = _CNE;
    }
    Object.defineProperty(Student.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "CNE", {
        get: function () {
            return this._CNE;
        },
        set: function (value) {
            this._CNE = value;
        },
        enumerable: true,
        configurable: true
    });
    Student.prototype.toString = function () {
        return "Name : " + this._fullName + " | Cne : " + this._CNE;
    };
    Student.V = 12;
    return Student;
}());
var S1 = new Student("najib", 12459975);
console.log(S1.toString());
S1.CNE = 12345; //we create setter
///Inheritance
var gi1 = /** @class */ (function (_super) {
    __extends(gi1, _super);
    function gi1(direction, name, cne) {
        var _this = _super.call(this, name, cne) || this;
        _this.direction = direction;
        _this.direction = direction;
        return _this;
    }
    gi1.prototype.toString = function () {
        return _super.prototype.toString.call(this) + (" | direction : " + this.direction);
    };
    return gi1;
}(Student));
var najib = new gi1("bi", "najib", 15130356);
console.log(najib.toString());
///// Abstract class
//just for inherted from it
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    return Greeting;
}());
var Gre = /** @class */ (function (_super) {
    __extends(Gre, _super);
    function Gre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gre.prototype.sayHello = function () {
        console.log("hello");
    };
    ;
    return Gre;
}(Greeting));
/////private constructors
var onlyOne = /** @class */ (function () {
    function onlyOne(name) {
        this.name = name;
    }
    ; //readonly : just a getter
    onlyOne.getInstace = function () {
        if (!onlyOne.instance) {
            onlyOne.instance = new onlyOne('the only one');
        }
        return onlyOne.instance;
    };
    return onlyOne;
}());
//let wrong = new onlyOne('dwed');
var right = onlyOne.getInstace();
console.log(right.name);
//////////////////////
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Object.defineProperty(Car.prototype, "Name", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "Acceleration", {
        get: function () {
            return this.acceleration;
        },
        set: function (speed) {
            this.acceleration += speed;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.honk = function () {
        console.log('Toooooooooot');
    };
    return Car;
}());
////////////////////////
