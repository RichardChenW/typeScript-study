// 声明变量a,同时指定它的类型为 number
let a:number;

a = 10;
// a = "richard"; //! 此行代码会报错，不能赋值字符串

let b:unknown;

b = "richard";

let c:{name:string,[propName:string]:any};

c = {name:"james",sayhi:()=>{console.log("你好")}};

function sum(a:number,b:number):number{
    return a+b;
};

let d:(a:number,b:number)=>number;
let e:string[];

let h:[string,number,boolean];

enum Gender{
    male = 1,
    female = 0
};

let i:{name:string,gender:Gender};

i = {
    name:"孙悟空",
    gender:Gender.male
}

console.log(i);
