/* Start of solution */

function Calculator() {
	this.read() = function () {
		this.a = +prompt("what is a?", 0);
		this.b = +prompt("what is b?", 0);
	};

	this.sum() = function () {
		return this.a + this.b;
	};

	this.mul() = function () {
		return this.a * this.b;
	};
}

/* End of solution */

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
