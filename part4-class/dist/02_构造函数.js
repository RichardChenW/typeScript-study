"use strict";
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log("Dog constructor");
        this.bark();
    }
    ;
    bark() {
        alert("汪汪汪,我创建好了！");
    }
    ;
}
const dog1 = new Dog("Rex", 3);
