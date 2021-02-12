function multiplyNumeric(menu) {
	for (const prop in menu) {
		if (typeof prop === "number") {
			menu[prop] *= 2;
		}
	}
}
