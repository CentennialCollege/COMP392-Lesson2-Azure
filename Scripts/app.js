var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.speaks = function () {
        console.log(this.name + " says hello");
    };
    return Person;
})();

var person = new Person("Tom");
person.speaks();
