// 使用 class 关键字来定义一个类
class Person {

    // 定义实例属性
    name:string
    age: number


    // 定义静态属性（类属性),方法同理
    static sex: string = '男'
    static readonly family:string = "chen"

    // 定义构造函数
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    
    // 定义实例方法
    sayHi(msg: string) {
        console.log(`你好，我叫${this.name}，今年${this.age}岁，${msg}`)
    }

    // 定义静态方法
    static sayHello() {
        console.log(`你好，我是静态方法，${this.sex}`)
    }
};

// let p = new Person('张三', 20);
// console.log(p);
// console.log(Person.sex);
Person.sayHello();


