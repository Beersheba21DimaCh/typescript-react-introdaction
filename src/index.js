var num = 20;
for (var i = 0; i < 3; i++) {
    // setTimeout(() => console.log(i), 500);
}
var str = "abc";
var myBoolean;
var num1 = +str;
var comparator;
myBoolean = !!"abcd";
comparator = function (a, b, c) {
    if (a === void 0) { a = 10; }
    if (b === void 0) { b = 20; }
    if (c === void 0) { c = 50; }
    return a + b;
};
var c = comparator(30) + "str";
// console.log(c);
var a1;
a1 = 10;
a1 = "sre";
var a2;
a2 = 234;
a2 = true;
a2 = { d: 25, c: "add" };
// console.log(a2);
a1 = a2;
// console.log(a1.d);
a1 = str;
myBoolean = a1;
str = "12";
console.log(comparator(str, 20));
