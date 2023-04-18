class Dog {

    name:String;
    age:Number;

    constructor(name:String,age:Number){
        this.name = name;
        this.age = age;
        console.log("Dog constructor")
        this.bark();
    };

    bark(){
        alert("汪汪汪,我创建好了！");
    };

}

const dog1 = new Dog("Rex",3);
