let calculator = {
	read() {
		this.a = +prompt("what is a?", 0);
		this.b = +prompt("what is b?", 0);
	},

	sum() {
		return this.a + this.b;
	},

	mul() {
		return this.a * this.b;
	},
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
