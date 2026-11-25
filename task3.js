
class Adder {
    #firstNumber = 0;
    #secondNumber = 0;

    result = 0;

    calc() {
        this.result = this.#firstNumber + this.#secondNumber;
    }

    firstNumber(value) {
        if (value === undefined) {
            return this.#firstNumber;
        } else if (typeof value === "number") {
            this.#firstNumber = value;
            this.calc();
        } else {
            console.log("Error! Enter a number.");
        }
    }

    secondNumber(value) {
        if (value === undefined) {
            return this.#secondNumber;
        } else if (typeof value === "number") {
            this.#secondNumber = value;
            this.calc();
        } else {
            console.log("Error! Enter a number.");
        }
    }
}

let sum = new Adder();

sum.firstNumber(10);
sum.secondNumber(20);

console.log(sum.result);

sum.firstNumber(50);
console.log(sum.result);

sum.secondNumber(30);
console.log(sum.result);

sum.firstNumber("Hello");
console.log(sum.result);
