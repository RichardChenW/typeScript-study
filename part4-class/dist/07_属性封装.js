"use strict";
(function () {
    class Person {
        constructor(name, _age) {
            this.name = name;
            this._age = _age;
        }
        ;
        get age() {
            return this._age;
        }
        ;
        set age(value) {
            this._age = value;
        }
        ;
    }
    let p = new Person("孙悟空", 18);
    console.log(p.age);
})();
