console.log("hello world");

// let lastname = "KD";
// let firstname = new String("love");

// let massage = "this is my first massage";

// let word = massage.split(" ");

// console.log(word);

// string methods----------------------
// all string methods are premetive data types and they are immutable

// let str = "hello world";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.length);
// console.log(str.indexOf("o"));
// console.log(str.lastIndexOf("o"));
// console.log(str.slice(0, 5));
// console.log(str.replace("world", "javascript"));

// template literals-----------------
// let massage1 = `hello  my name is kedar
// i am learning javascript
// and i am enjoying it`;

// console.log(massage1);

// let name = "KD";
// let age = 25;

// let message =
// `My name is ${name} and
//   I am ${age} years old.`;

// console.log(message);

// Date and Time-----------------
// let date = new Date();
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getTime());

// Arrays-----------------
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// // inserting elements in an array
// // add numbers numbers or element using console
// numbers.push(6); // adds an element at the end of the array
// numbers.unshift(0); // adds an element at the beginning of the array
// numbers.splice(3, 0, 2.5); // adds an element at a specific index (index, number of elements to remove, element to add)

// // searching for an element in an array
// console.log(numbers.indexOf(3)); // returns the index of the first occurrence of the element
// console.log(numbers.includes(4)); // returns true if the element is found in the array, otherwise false

//// removing elements from an array
// numbers.pop(); // removes the last element from the array
// numbers.shift(); // removes the first element from the array
// numbers.splice(3, 1); // removes an element at a specific index (index, number of elements to remove)

// callback functions-----------------
// defination: a callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
// let courses = [
//   { no: 1, name: "Love"},
//   { no: 2, name: "JavaScript" },
//   { no: 3, name: "Python" }
// ];

// console.log(courses);

// let course = courses.find(function(course) {
//   return course.name === "JavaScript";
// });

// console.log(course);

// // arrow function-----------------
// // defination: an arrow function is a shorter syntax for writing function expressions. It does not have its own this, arguments, super, or new.target keywords.

// let course1 = courses.find(course => course.name === "Python");

// console.log(course1);

// remmovig elements from an array-----------------
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// end of the array
// numbers.pop();

// beginning of the array
// numbers.shift();

// middle of the array
// numbers.splice(2, 1);

// console.log(numbers);

// Emptying an array-----------------
// let numbers = [1, 2, 3, 4, 5];
// numbers.length = 0; // this is the best way to empty an array
// // numbers.splice(0, numbers.length); // this is also a way to empty an array
// console.log(numbers);

// Emptying an array using a while loop------------------
// let numbers = [1, 2, 3, 4, 5];
// while (numbers.length > 0) {
//   numbers.pop();
// }
// console.log(numbers);

// Combining and slicing arrays-----------------
// let first = [1, 2, 3];
// let second = [4, 5, 6];

// let combined = first.concat(second); // this is the best way to combine two arrays
// console.log(combined);

// let mark = [10, 40, 30, 45, 95, 80, 70, 60, 50, 20];
// // let sliced = mark.slice(2, 5); // this is the best way to slice an array
// // let sliced = mark.slice(2); // this will slice the array from index 2 to the end of the array
// console.log(sliced);

// iterating an array-----------------
// let numbers = [1, 2, 3, 4, 5];
// for(let value of numbers) {
//   console.log(value);
// }

// for each method-----------------
// numbers.forEach(function(number) {
//   console.log(number);
// });

// arrow function in for each method-----------------
// numbers.forEach(number => console.log(number));

// joining an array-----------------
// let numbers = [1, 2, 3, 4, 5];
// let joined = numbers.join(","); // this is the best way to join an array
// console.log(joined);

// let massage = "this is my first massage";

// let word = massage.split(" ");

// console.log(word);


// sorting an array-----------------
// let numbers = [5, 2, 9, 1, 5, 6];
// numbers.sort(); // this will sort the array in ascending order
// console.log(numbers);

// numbers.reverse(); // this will reverse the array
// console.log(numbers);


// filtering an array-----------------
// let numbers = [1, 2, 3, 4, 5];
// let filtered = numbers.filter(function(number) {
//   return number > 3;
// });
// console.log(filtered);


// arrow function in filter method-----------------
// let filtered = numbers.filter(number => number > 3);
// console.log(filtered);



// mapping an array-----------------
// let numbers = [1, 2, 3, 4, 5];
// let mapped = numbers.map(function(number) {
//   return number * 2;
// });
// console.log(mapped);



