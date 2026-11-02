console.log("Let's Start!");

//objects creation-------------------
// let rectangle = {
//   length: 5,
//   breadth: 3,

//   draw: function () {
//     console.log("Drawing a rectangle...");
//   },
// };

// let rectangle1 = {
//   length: 3,
//   breadth: 34,

//   draw: function () {
//     console.log("Drawing a rectangle...");
//   }

// };

// let rectangle2 = {
//   length: 51,
//   breadth: 39,

//   draw: function () {
//     console.log("Drawing a rectangle...");
//   }

// };

//Factory function------------------- use camelCase for function name

// firstlywecreatean function and then we return an object from that function and then we can create multiple objects using that function
// function createRectangle(length, breadth) {
//   return (rectangle = {
//     length,
//     breadth,

//     draw() {
//       console.log("Drawing a rectangle...");
//     },
//   });
// }

// // then we call the function using object
// let rectangle1 = createRectangle(5, 3);
// let rectangle2 = createRectangle(10, 6);
// let rectangle3 = createRectangle(7, 4);

// // Constructor function------------------- use pascal case for function name
// // constructor function is propertiesor methodfor initialization and defining
// function Rectangle(length, breadth) {
//     this.length = length;
//     this.breadth = breadth;
//     this.draw = function () {
//         console.log("Drawing a rectangle...");
//     }

// }

// // object creation using constructor function
// let rectangleobject = new Rectangle(5, 3);

//  // Dynamic nature of objects-------------------
// rectangleobject.color = "red"; // we can add new property to the object
// console.log(rectangleobject);

// delete rectangleobject.color; // we can delete property from the object
// console.log(rectangleobject);

// //fiunctions are objects-------------------
// function myFunction() {
//   console.log("This is my function.");
// }

// myFunction.description = "This function does something.";
// console.log(myFunction.description); // Output: This function does something.

// Types in JavaScript-------------------
// Primitive types: number, string, boolean, null, undefined, symbol
// let num = 42; // number
// let str = "Hello"; // string
// let bool = true; // boolean
// let nul = null; // null
// let undef; // undefined
// let sym = Symbol("sym"); // symbol

// // Reference types: objects, arrays, functions
// let obj = { name: "Alice", age: 30 }; // object
// let arr = [1, 2, 3]; // array
// function greet() {
//   console.log("Hello!");
// } // function

// let a=10;
// letb= a; // here we are copying the value of a to b
// console.log(++a);
// console.log(--a); // here b will not change because it is a primitive type and it is stored in stack memory

// ----------premitive are copied by there values
// ----------reference are copied by there reference/Address

// let a=10
// function inc(a){
//     a++;
//     inc(a);
// }
// console.log(a); // here a will be 11 because it is a primitive type and it is stored in stack memory

// let a = { value: 10 };
// function inc(a) {
//   a.value++;
// }
// inc(a);
// console.log(a.value); // here a will be 11 because it is a primitive type and it is stored in stack memory

// iterating through objects-------------------
// for-in loop
// let rectangle = {
//   length: 5,
//   breadth: 3
// };

// // for-in loop
// for (let key in rectangle) {
//   console.log(key, rectangle[key]);
// }

// for -of loop
// for (let key of Object.entries(rectangle)) {
//   console.log(key); // here we will get an error because for-of loop is used for iterating through arrays and strings but not for objects
// }

// if('height' in rectangle){
//     console.log("Present");
// }
// else{
//     console.log("Absent");
// }

// // objet cloning-------------------
// let src = {
//   a: 10,
//   b: 20,
//   c: 30,
// };

// let dest = {};

// for (let key in src) {
//   dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(src);

// // bject cloning2-------------------
// let src = {
//   a: 10,
//   b: 20,
//   c: 30,
// };

// let src2={value:24}
// let dest = Object.assign({}, src, src2); // here we are creating a new object and copying the properties of src to dest
// console.log(dest);

// src.a++;
// console.log(src);

// // object cloning3-------------------
// let src = {
//   a: 10,
//   b: 20,
//   c: 30,
// };

// let dest = { ...src }; // here we are creating a new object and copying the properties of src to dest
// console.log(dest);

// src.a++;
// console.log(src);

// for (let i = 1; i < 5; i++) {
//   console.log(i);
// }

// let k=0;
// while (k<10) {
//     console.log(k);
//     k++;
// }

// let j = 1;
// do {
//   console.log(j);
//   j++;
// } while (j < 20);


