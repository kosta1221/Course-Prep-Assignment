/* The solution starts here */
function multiplyNumeric(menu) {
	for (const prop in menu) {
		if (typeof menu[prop] === "number") {
			menu[prop] *= 2;
		}
	}
}
/* The solution ends here */

let menu = {
	width: 200,
	height: 300,
	title: "My menu",
};

alert("look in console");

multiplyNumeric(menu);

console.log("The modified menu is:");
console.log(menu);
