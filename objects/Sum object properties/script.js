let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

let sum = 0;
for (const prop in salaries) {
	sum += salaries[prop];
}

alert("look in console");
console.log("The salaries are: ");
console.log(salaries);
console.log("The sum of salaries is: " + sum);
