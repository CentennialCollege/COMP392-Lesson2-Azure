class Person {
    name:string;
    constructor(name:string) {
        this.name = name;
    }
    
    speaks() {
        console.log(this.name + " says hello");
    }
}

var person = new Person("Tom");
person.speaks();