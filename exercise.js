class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    // PERIMETER is = 2(width + height)
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
    // AREA is = width * height
    calculateArea() {
        return this.width * this.height;
    }
}

const rect1 = new Rectangle(200, 100)

console.log(rect1,
    "THIS IS THE PERIMETER: ", rect1.calculatePerimeter(),
    "THIS IS THE AREA: ", rect1.calculateArea());

class Square extends Rectangle {
    constructor(side){
        super(side,side)
    }
};


const sq1 = new Square(20)

console.log(sq1.calculateArea());

// INTERVIEW QUESTIONS

// OOP : Object Oriented Programming

// class: template to build an object. We can create new objects based on a class

// Inheritance: We create a new class and we use extends to inherit the values or methods of the original one (superior). We add new properties. 
// Way to create a new class that extens an existing one inheriting the properties of the superior class and adding new ones

// abstraction: Showing only the essentials in the documentation. So, we know how to make it work (how to use it) but not how the actual code works because we don't see it (we don't need it).

// Polymorphism: A method from the parent class has another functionality (it's modified in the inheriting classes)

// Encapsulation : Grouping data and methods that manipulate the data in the same place. 



