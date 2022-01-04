// const num: number = 20;
// for (let i = 0; i < 3; i++) {
//     // setTimeout(() => console.log(i), 500);
// }
// let str = "abc";
// let myBoolean : boolean;
// const num1:number = +str;
// let comparator : (a:number, b?:number) => number|void;
// myBoolean = !!"abcd";
// comparator = function(a =10, b:number = 20, c = 50){
//     return a + b;
// }
// let c = comparator(30) + "str";
// // console.log(c);
// let a1: any;
// a1 = 10;
// a1 = "sre";
// let a2: unknown;
// a2 = 234;
// a2 = true;
// a2 = {d:25, c:"add"};
// // console.log(a2);
// a1 = a2;
// // console.log(a1.d);
// a1 = str;
// myBoolean = a1;
// str = "12";
// console.log(comparator(str as any, 20));
// let a10;
// a10 = 100;
// a10 = "100";
// interface Person {
//     id: number;
//     name: string | null;
//     getName?: () => string;
// }
// let person1: Person = {id: 123, name: "vova", getName(){return this.name}};
var person1 = { id: 110, name: "vova", getName: function () { return this.name; }, toString: function () {
        return this.id;
    } };
var empl = { id: 99, name: "roma", salary: 1000, toString: function () {
        return this.id;
    } };
function comparator_func(a, b) {
    if (a < b) {
        return -1;
    }
    else if (a > b) {
        return 1;
    }
    else {
        return 0;
    }
}
var comparatorStr = comparator_func;
// console.log(comparatorStr(person1, empl));
var comparatorNumber = comparator_func;
var ComparatorPerson = /** @class */ (function () {
    function ComparatorPerson() {
    }
    ComparatorPerson.prototype.compareTo = function (a, b) {
        return a.id - b.id ? a.id - b.id : a.name.localeCompare(b.name);
    };
    return ComparatorPerson;
}());
var Line = /** @class */ (function () {
    function Line(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    }
    Line.prototype.draw = function () {
        console.log("this is the line from point (".concat(JSON.stringify(this.p1), ")"));
        console.log("this is the line from point (".concat(JSON.stringify(this.p2), ")"));
    };
    Line.prototype.getLengthX = function () {
        return this.p1.x - this.p2.y;
    };
    return Line;
}());
var Square = /** @class */ (function () {
    function Square(_p, _width) {
        this._p = _p;
        this._width = _width;
    }
    ;
    Square.prototype.draw = function () {
        console.log("this is the square with poin (".concat(JSON.stringify(this._p), ", width ").concat(this._width, ")"));
    };
    return Square;
}());
var shapes = new Array();
shapes.push(new Line({ x: 3, y: 4 }, { x: 5, y: 10 }), new Square({ x: 5, y: 15 }, 20));
shapes.forEach(function (s) {
    s.draw();
    if (s instanceof Line) {
        var length_1 = s.getLengthX();
        console.log("length", length_1);
    }
});
var map = new Map([["123", 324]]);
var keys = Array.from(map.keys());
