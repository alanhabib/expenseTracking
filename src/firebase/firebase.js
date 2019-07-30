import * as firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyC6r2zkGwsB0AICLAbY6hvSSW-t2-twEME",
	authDomain: "expense-fb1c9.firebaseapp.com",
	databaseURL: "https://expense-fb1c9.firebaseio.com",
	projectId: "expense-fb1c9",
	storageBucket: "",
	messagingSenderId: "122502083273",
	appId: "1:122502083273:web:61c19e3922054db5"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default};

// database.ref("expenses")
// 	.on("value", (snapshot) => {
// 		const expenses = [];
//
// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			})
// 		});
// 		console.log(expenses);
// 	});

// database.ref("expenses").on("child_removed", (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });
//
// database.ref("expenses").on("child_changed", (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });
//
// database.ref("expenses").on("child_added", (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });
//

// database.ref("expenses").push({
// 	description: "Rent",
// 	note: "wow",
// 	amount: 12020,
// 	createdAt: 12332232
// });
//
// database.ref("expenses").push({
// 	description: "Phone bill",
// 	note: "wow",
// 	amount: 120,
// 	createdAt: 232323
// });
//
// database.ref("expenses").push({
// 	description: "Coffe",
// 	note: "wow",
// 	amount: 33444,
// 	createdAt: 23232323
// });

// database.ref("notes").push({
// 	title: "Course topics",
// 	body: "react native, python, angular"
// });

// database.ref("notes/-LkolTvOrmv-Hp-ZVphg").remove();

// database.ref().on("value", (snapshot) => {
// 	const val = snapshot.val();
// 	console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// }, (e) => {
// 	console.log("ERROR FETCHING", e);
// });

// const onValueChange = database.ref().on("value", (snapshot) => {
// 	console.log(snapshot.val());
// }, (e) => {
// 	console.log("#ERROR WITH FETCHING", e);
// });
//
// setTimeout(() => {
// 	database.ref("age").set(33);
// }, 3500);
//
// setTimeout(() => {
// 	database.ref().off(onValueChange);
// }, 7500);
//
// setTimeout(() => {
// 	database.ref("age").set(44);
// }, 10500);

// database.ref()
// 	.once("value")
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch((e) => {
// 		console.log("#Error fetching data", e);
// 	});

// database.ref().set({
// 	name: "Alan",
// 	age: 31,
// 	stresslevel: 6,
// 	job: {
// 		title: "Manager",
// 		company: "Google"
// 	},
// 	location: {
// 		city: "Stockholm",
// 		country: "Sweden"
// 	}
// }).then(() => {
// 	console.log("Data is saved");
// }).catch((e) => {
// 	console.log("This failed, ", e);
// });
//
// database.ref().update({
// 	stresslevel: 9,
// 	"job/company": "Amazon",
// 	"location/city": "Seattle"
// }).then(() => {
// 	console.log("success");
// }).catch((e) => {
// 	console.log("failed", e);
// });

// database.ref()
// 	.remove()
// 	.then(() => {
// 		console.log("Success");
// 	}).catch((e) => {
// 	console.log("Denies, ", e);
// });