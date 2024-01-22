# OOP
OOP stands for Object Oriented Programming. It is a programming paradigm that uses objects and their interactions to design applications and computer programs. It is based on the concept of objects rather than just functions and procedures.

## OOP in JavaScript
JavaScript is a multi-paradigm language. It supports multiple programming paradigms, including object-oriented (OOP). 

## Classes
A class is a blueprint for creating objects with pre-defined properties and methods. 

```javascript	
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person1 = new Person('John', 33); // Create a new object based on the Person class
person1.sayHello(); // Hello, my name is John
```

## Inheritance

Inheritance is a mechanism that allows you to eliminate redundant code by organizing objects into a class hierarchy. 

```javascript

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    sayGrade() {
        console.log(`My grade is ${this.grade}`);
    }
}
```

A student now has access to the sayHello() method from the Person class and the new sayGrade() method from the Student class.

The grade is a new property that is only available to the Student class.

The super keyword is used to access and call functions on an object's parent. In this case, it is used to call the constructor of the Person class to add the name and age properties to the Student class.
