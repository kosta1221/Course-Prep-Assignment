function isEmpty(obj) {
	for (let key in obj) {
		// if the loop has started, there is a property
		return false;
	}
	return true;
}

alert("look in console");
const emptyObject = {};
const object = { firstName: "eee", lastName: "aaa" };
console.log("emptyObject:");
console.log(emptyObject);
console.log("object:");
console.log(object);
console.log("is emptyObject empty? " + isEmpty(emptyObject));
console.log("is object empty? " + isEmpty(object));
