interface myInter{
    name:string;
    sayHello():void;
};

class Person1 implements myInter{

    name:string;

    constructor(name:string){
        this.name = name
    }
    ;
    sayHello(): void {
        console.log("sayHello")
    }
    ;
    sayHi():void{
        console.log("你好啊");
    }
    ;
}