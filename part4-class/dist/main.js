"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi(msg) {
        console.log(`你好，我叫${this.name}，今年${this.age}岁，${msg}`);
    }
    static sayHello() {
        console.log(`你好，我是静态方法，${this.sex}`);
    }
}
Person.sex = '男';
Person.family = "chen";
;
Person.sayHello();
