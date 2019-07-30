const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject("something went wrong")
		// resolve("this is my resolved data");
	}, 5500);
});

console.log("#DEBUG BEOFRE #");

promise.then((data) => {
	console.log(data);
}).catch((error) => {
	console.log("Error: ", error);
});

console.log("#DEBUG BEFORE #");