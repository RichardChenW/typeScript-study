"use strict";
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        ;
        sayHi() {
            alert(`${this.name},我创建好了！`);
        }
        ;
    }
    class Dog extends Animal {
        constructor(name, age, color) {
            super(name, age);
            this.color = color;
        }
        ;
        msg() {
            console.log(`我是${this.name},今年${this.age}岁,我的毛色是${this.color}`);
        }
        ;
    }
    class Cat extends Animal {
        sayHi() {
            console.log("喵喵喵");
        }
    }
    let yoyo = new Dog("yoyo", 1, "黄白色");
    yoyo.sayHi();
    yoyo.msg();
    let mimi = new Cat("mimi", 2);
    mimi.sayHi();
})();
