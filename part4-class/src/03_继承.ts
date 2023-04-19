(function(){

    //  定义一个公共
    class Animal {
            
        name:String;
        age:Number;

        constructor(name:String,age:Number){
            this.name = name;
            this.age = age;
        };

        sayHi():void{
            alert(`${this.name},我创建好了！`);
        };
        
    }

    // 定义一个狗类,继承自Animal
    /*
    * 1. 使用extends关键字之后，继承所有父类的属性和方法
    * 2. 通过继承可以将多个类中共有代码写在一个父类lei'中，然后让其他类去继承这个类
    */
    class Dog extends Animal {
        
        color:String;
        constructor(name:String,age:Number,color:String){
            super(name,age);
            this.color = color;
        };
        msg(): void{
            console.log(`我是${this.name},今年${this.age}岁,我的毛色是${this.color}`)
        };
    }


    class Cat extends Animal {
        sayHi(): void {
            console.log("喵喵喵");
        }
    }

    let yoyo = new Dog("yoyo",1,"黄白色");
    yoyo.sayHi();
    yoyo.msg();
    let mimi = new Cat("mimi",2);
    mimi.sayHi();

})();