// 声明变量a,同时指定它的类型为 number
let a:number;

a = 10;
// a = "richard"; //! 此行代码会报错，不能赋值字符串

let b:unknown;
b = "richard";

let c:boolean = true;

function sum(a:number,b:number):number{
    return a + b;
}

console.log(sum(1,2));
// console.log(sum(1,"2"));