// const person = {
// 	name: "Alan",
// 	age: "31",
// 	location: {
// 		city: "Stockholm"
// 	}
// };
//
// const {name, age: newAge} = person;
// console.log(`${name} is ${newAge}.`);
//

const address = [
	"1299 s Junipr Street",
	"Stockholm",
	"Sverige",
	"14327"
];
const [, city, state] = address;
console.log(`You are in ${city} ${state}`);