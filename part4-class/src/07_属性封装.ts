(function(){

    // 定义一个表示人的类
    class Person{

        /* TS 可以在属性前添加属性的修饰符
            public 修饰的属性可以在任意访问（修改）默认值
            private 私有属性，只能在类的内部访问
            -- 通过在类中添加方法使得私有属性可以被外部方法访问
        */
        
        public name:string;
        private _age:number;

        constructor(name:string,_age:number){
            this.name = name;
            this._age = _age;
        }
        ;

        get age(){
            return this._age
        }
        ;
        set age(value:number){
            this._age = value
        }
        ;
    }

    let p = new Person("孙悟空",18);

    console.log(p.age);
})();