"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        ;
        sayHello() {
            console.log('动物在叫~');
        }
        ;
    }
    ;
    class Dog extends Animal {
        constructor(name, age) {
            super(name);
            this.age = age;
        }
        ;
        sayHello() {
            super.sayHello();
            console.log(`我是dog${this.name}`);
        }
        ;
        sayFather() {
            console.log(super.name);
        }
    }
    let yoyo = new Dog("有有", 10);
    yoyo.sayHello();
    yoyo.sayFather();
})();
