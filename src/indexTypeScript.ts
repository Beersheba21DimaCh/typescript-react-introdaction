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

// let id = "id";
// person1[id] = 222;
// console.log((person1 as any)[id]);
// interface Employee extends Person {
//     salary: number;
// }
// let empl: Employee = {id: 123, name: "roma", salary: 1000, company: "Intel" }
// interface Employee {
//     company: string;
// }
/**
 * Using type. структура данных
 */
type Person = {
    id: number;
    name: string | null;
    getName?: () => string;
    toString: () => string;
}
type Employee = Person & {
    salary: number;
}
let person1: Person = {id: 110, name: "vova", getName(){return this.name},
 toString(){
    return this.id;
}};
let empl: Employee = {id: 99, name: "roma", salary: 1000, toString(){
    return this.id;
} }
type EmployeeCompany = Employee & {
    company: string;
}

/**
 * type comporator
 */
type Comparator<T> = (a:T, b:T) => number;
function comparator_func<T>(a:T,b:T): number{
    if(a < b) {
        return -1;
    } else if(a > b){
        return 1;
    } else {
        return 0;
    }
}
const comparatorStr: Comparator<Person> = comparator_func;
// console.log(comparatorStr(person1, empl));

const comparatorNumber: Comparator<number> = comparator_func;
// console.log(comparatorNumber(100, 90));

/**
 * Object
 */
interface IComparator<T> {
    compareTo(a:T, b:T):number;
}
class ComparatorPerson implements IComparator<Person>{
    compareTo(a: Person, b: Person): number {       
        return a.id - b.id ? a.id - b.id : a.name.localeCompare(b.name);
    }
}

/**
 * 
 */

type Point = {
    x: number;
    y: number;
}


interface Shape {
    draw():void;
}
class Line implements Shape {
    constructor(private readonly p1: Point, private p2: Point){
    }
    draw(): void {
        console.log(`this is the line from point (${JSON.stringify(this.p1)})`);
        console.log(`this is the line from point (${JSON.stringify(this.p2)})`);

    }
    getLengthX() {
        return this.p1.x - this.p2.y;
    }
}

class Square implements Shape {
    constructor(public _p: Point, public _width:number){};
    draw():void {
        console.log(`this is the square with poin (${JSON.stringify(this._p)}, width ${this._width})`);     
    }   
}
const shapes = new Array<Shape>();
shapes.push(new Line({x:3,y:4},{x:5, y:10}), new Square({x:5, y:15}, 20));
shapes.forEach(s => {
    s.draw();
    if(s instanceof Line) {
        let length = (s as Line).getLengthX();
        console.log("length", length);
    }
    
});
const map:Map<string, number> = new Map([["123", 324]]);
const keys: string[] = Array.from(map.keys());


