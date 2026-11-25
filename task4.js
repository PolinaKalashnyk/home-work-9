
class GeometricFigure {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    getCenter() {
        return `(${this.#x}, ${this.#y})`;
    }

    setCenter(x, y) {
        this.#x = x;
        this.#y = y;
    }
}

class Rectangle extends GeometricFigure {
    #diagonal;

    constructor(x, y, width, height) {
        super(x, y);

        this.width = width;
        this.height = height;

        this.#diagonal = Math.sqrt(width * width + height * height);
    }

    info() {
        console.log("Rectangle:");
        console.log("Center:", this.getCenter());
        console.log("Width:", this.width);
        console.log("Height:", this.height);
        console.log("Diagonal:", this.#diagonal);
    }
}

class Circle extends GeometricFigure {
    #radius;

    constructor(x, y, radius) {
        super(x, y);

        this.#radius = radius;
    }

    info() {
        console.log("Circle:");
        console.log("Center:", this.getCenter());
        console.log("Radius:", this.#radius);
    }
}

let rectangle = new Rectangle(5, 10, 4, 3);
let circle = new Circle(2, 4, 7);

rectangle.info();
console.log("----------------");

circle.info();
