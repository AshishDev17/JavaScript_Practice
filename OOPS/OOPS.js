
/*
  CLASS: It is a template that defines what characterstics an object should have.
  INSTANTIATION: It is the process of creating an object instance from a class is called instantiation.

*/

/*
  ENCAPSULATION: Storing properties and functions inside an object so that we can structure and access them

  ABSTRACTION: Ceating a simple model of a more complex thing that represents its more important aspects in a way that is easy to work with for programming
*/

//Define a Mammal Parent class
function Mammal(name){
    this.name = name;
    this.offspring = [];
}

Mammal.prototype.sayHello = function(){
    return "My name is " + this.name + "!";
};

Mammal.prototype.haveBaby = function(){
    var child = Object.create(Mammal.prototype);
    child.name = "Baby " + this.name;

    this.offspring.push(child);

    return child;
};

/*
  INHERITANCE: New class can be created based on other class, which is a Parent Class, and new class is known as Child Class. Child class inherits the data and code features of its Parent Class. Inheritance helps to reuse functinality common to all classes, rather than having to duplicate it. We can then define specialized features in Child Class as defined.

  POLMORPHISM: We can also define the same feature separately in different classes, as each definition of that feature is in different namespace. This ability of implementing same feature separately in different classes is know as Polymorphism.
*/

//Define a Cat Child Class of Person Class
function Cat(name, color){
    Mammal.call(this, name);
    this.color = color;
}

Cat.prototype = Object.create(Mammal.prototype);

Cat.prototype.constructor = Cat;

Cat.prototype.haveBaby = function(color){
    var child = new Cat('Baby ' + this.name, color);
    this.offspring.push(child);
    return child;
}
