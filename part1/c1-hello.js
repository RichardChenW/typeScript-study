"use strict";
// 声明变量a,同时指定它的类型为 number
let a;
a = 10;
// a = "richard"; //! 此行代码会报错，不能赋值字符串
let b;
b = "richard";
let c;
c = { name: "james", sayhi: () => { console.log("你好"); } };
function sum(a, b) {
    return a + b;
}
;
let d;
let e;
let h;
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 1] = "male";
    Gender[Gender["female"] = 0] = "female";
})(Gender || (Gender = {}));
;
let i;
i = {
    name: "孙悟空",
    gender: Gender.male
};
console.log(i);
