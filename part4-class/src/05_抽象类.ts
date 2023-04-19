(function():void{


    /*
    *  以 abstract 开头的类是抽象类
    *  抽象类和其他类区别不大，只是不能创建对象
    */
    abstract class Animal {
        
        name:String;

        constructor(name:String){
            this.name = name;
        };

        sayHello(){
            console.log('动物在叫~');
        };

        // abstract sayHi():void;

    };

    class Dog extends Animal{

        age:number;

        constructor(name:string,age:number){
            super(name);
            this.age = age
        };
        
        sayHello(): void {
            super.sayHello();
            console.log(`我是dog${this.name}`)
        };

        sayFather(){
            console.log(super.name);
        }
    }

    let yoyo = new Dog("有有",10);
    yoyo.sayHello();
    yoyo.sayFather();

})();