//complete this code
class Rectangle {
	constructor(width, height) {
    if (width <= 0 || height <= 0) {
      throw new Error("Width and height must be positive integers");
    }
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
  }
}

class Square extends Animal {
	constructor(side) {
    if (side <= 0) {
      throw new Error("Side must be a positive integer");
    }
    // Call Rectangle constructor with same side for width and height
    super(side, side);
  }

  getPerimeter() {
    return this.width * 4;
  }

}

// Creating a Rectangle instance
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.getArea()); 

// Creating a Square instance
const square = new Square(7);
console.log(square.width);
console.log(square.height);
console.log(square.getArea());
console.log(square.getPerimeter());

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
