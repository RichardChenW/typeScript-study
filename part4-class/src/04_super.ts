(function():void{

    class Animal {
        
        name:String;

        constructor(name:String){
            this.name = name;
        };

        sayHello(){
            console.log('动物在叫~');
        };

    };

    class Dog extends Animal{

        age:number;

        //如果在子类写了构造函数，在子类的构造函数必须进行父类的调用，因为会覆盖
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