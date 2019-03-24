//1. A function which prints str after n seconds.

function printTimeout(str, n) {
	setTimeout(function () {
		return(str);
	}, n);
	console.log(str);
}
printTimeout('hello', 10);


//2.A function which returns sum of all numbers from 1 to n using recursion.

function sumAll(n) {
	if (n == 1) return 1;
	return n + sumAll(n - 1);
}
console.log(sumAll(2));
console.log(sumAll(4));


//3.A function which takes str and time in seconds as arguments, then every second it should count down from time to 0 and print current time to console when time equals to 0 it prints str

function bombTimer(str, time) {
	let counter = time;
	let countDown = setInterval(function () {
		console.log(counter);
		counter--
		if (counter === 0) {
			console.log(str);
			clearInterval(countDown);
		}
	}, 1000);
}
bombTimer('Boooom', 3);

	
//4.A function which returns factorial of number using recursion.

function factorial(n) {
	if (n < 0) return;
	if (n === 0) return 1;
	return n * factorial(n - 1);
}
console.log(factorial(3)); 
console.log(factorial(5)); 

//5.Implement function from task №3 (bombTimer) using recursion and setTimeout.

function booomTimeout(str) {
	console.log(str);
}
setTimeout(booomTimeout, 5000, 'Boooooom');


//6.A function which takes an array of numbers and maxNumber, the function returns new array with numbers not higher than maxNumber.

function filterNumbers(arr, maxNumber) {
	let newArr = [];
	for (let n = 0; n < arr.length; n++) {
		if (arr[n] <= maxNumber) {
			newArr.push(arr[n]);
		}
	}
	console.log(newArr);
}
filterNumbers([1, 4, 8, 1, 20], 5)

	
//7.A function that returns object with min and max numbers from array of numbers.

function minMax(arr) {

	console.log(Math.max.apply(null, arr), Math.min.apply(null, arr));
}
minMax([1, 4, 8, 2, 20])


//8.A function that returns average of numbers in array.

function average(arr) {
	return arr.reduce((a, b) => a + b) / arr.length;
}
console.log(average([1, 4, 2]));

//9.A function which concats all first-nested arrays in one array (use reduce)

function concatFirstNestedArrays(arr) {
	let arrays = arr;
	console.log(arrays.reduce(function (arrayOne, arrayTwo) {
		return arrayOne.concat(arrayTwo);
	}, ));
}
concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]])


//10.A function accepts array of users and returns object of users where key is user id and value user data.

const user_s = [
	{
		id: 1,
		name: 'John',
		birthday: '1999-2-12'
	},
	{
		id: 2,
		name: 'Bill',
		birthday: '1999-1-19'
	},
	{
		id: 3,
		name: 'Carol',
		birthday: '1999-3-11'
	},
	{
		id: 4,
		name: 'Luce',
		birthday: '1999-2-22'
	}
];

function usersToObject(users) {
	let obj = {};
	users.forEach(function (user) {
		obj[user.id] = user;
	});
	console.log(obj);
}
usersToObject(user_s)


//11. A function returns array of users that have birthdays in a specific month.

const users = [
	{
		name: 'John',
		birthday: '1999-2-12'
	},
	{
		name: 'Bill',
		birthday: '1999-1-19'
	},
	{
		name: 'Carol',
		birthday: '1999-4-11'
	},
	{
		name: 'Luce',
		birthday: '1999-2-22'
	}
];
function filterUsersByMonth(users, month) {
	let m = users.filter(user => new Date(user.birthday).getMonth() === month);
	console.log(m);
}

filterUsersByMonth(users, 0)

//12. A function returns name and age of users separated by comma that are older than 18 

const usersOld = [
	{
		name: 'John',
		birthday: '1999-6-12'
	},
	{
		name: 'Bill',
		birthday: '2005-5-19'
	},
	{
		name: 'Carol',
		birthday: '2003-10-11'
	},
	{
		name: 'Luce',
		birthday: '2000-11-22'
	}
];
function getAdultNames(usersOld) {
	let result = '';

	let dif = usersOld.filter(function (user) {
		return getAge(user) > 18;
	});
	function getAge(user) {
		let today = new Date();
		return Math.ceil(Math.abs(today.getTime() - new Date(user.birthday).getTime()) / (1000 * 3600 * 24 * 365));
	}
	dif.forEach(user => result += user.name + ', ' + getAge(user) + '; ');

	console.log(result);
}
getAdultNames(usersOld);