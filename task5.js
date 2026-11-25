
class Square {
    constructor(side) {
        this._side = side;
    }

    getSide() {
        return this._side;
    }

    setSide(value) {
        if (typeof value === "number" && value > 0) {
            this._side = value;
        }
    }

    getPerimeter() {
        return this._side * 4;
    }
}

class Cube extends Square {
    getPerimeter() {
        return this._side * 12;
    }
}

let square = new Square(5);
let cube = new Cube(5);

console.log("Square perimeter:", square.getPerimeter());
console.log("Cube perimeter:", cube.getPerimeter());
