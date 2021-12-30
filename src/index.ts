const num: number = 20;
for (let i = 0; i < 3; i++) {
    // setTimeout(() => console.log(i), 500);
}
let str = "abc";
let myBoolean : boolean;
const num1:number = +str;
let comparator : (a:number, b?:number) => number|void;
myBoolean = !!"abcd";
comparator = function(a =10, b:number = 20, c = 50){
    return a + b;
}
let c = comparator(30) + "str";
// console.log(c);
let a1: any;
a1 = 10;
a1 = "sre";
let a2: unknown;
a2 = 234;
a2 = true;
a2 = {d:25, c:"add"};
// console.log(a2);
a1 = a2;
// console.log(a1.d);
a1 = str;
myBoolean = a1;
str = "12";
console.log(comparator(str as any, 20));



