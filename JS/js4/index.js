console.log("KYA HAaal");

//// function declaration-----------------------
// function run() {
//   console.log("Function is running");
// }
// // calling the function /invoking the function
// run();

// // Named function assignment-----------------------
// let stand = function walk() {
//   console.log("walk is running");
// };
// stand();

// // Anonymous function assignment-----------------------
// let stand2 = function () {
//   console.log("walk is running");
// };
// stand2();

// let jump = stand;
// jump();

// let x=1;
// x='A';
// console.log(x);

// // function sum(a, b)-----------------------
// function sum1(a, b) {
//   return a + b;
// }
// let ans1 = sum1(3, 5);
// console.log(ans1);

// // arguments object-----------------------
// function sum() {
//   let total = 0;
//   for (let value of arguments) {
//     total = total + value;
//   }
//   return total;
// }

// let ans = sum(3, 5, 3, 4, 5, 7, 3, 4, 5, 6, 7, 8);
// console.log(ans);

// // rest operator /parameter-----------------------
// function sum(num, value, num1, ...args) {
//   console.log(args);
// }
// sum(3, 5, 3, 4, 5, 7, 3, 4, 5, 6, 7, 8);

// // default parameter-----------------------
// function inetrest(p, r, y) {
//   return (p * r * y) / 100;
// }

// console.log(inetrest(1000, 10, 5));

// // GRTTER SETTER-----------------------
// Getter = function that get the value of a property
// Setter = function that set the value of a property

// let person = {
//   fname: "John",
//   lname: "Doe",

//   get fullName() {
//     return `${person.fname} ${person.lname}`;
//   },

//   set fullName(value) {
//     if (typeof value !== "string") {
//       throw new Error("Value is not a string");
//     }
//     let values = value.split(" ");
//     this.fname = values[0];
//     this.lname = values[1];
//   },
// };

// try {
//   person.fullName = true;
// } catch (e) {
//   alert(e);
// }

// console.log(person);

// console.log(person.fullName);

// {
//     let a = 10;
//     console.log(a);
// }

// function walk() {
//     var a=10;
// }
// console.log(a);

// for (var i = 0; i < 10; i++)
//     {

// }
// console.log(i);

// if (true) {
//     var a = 10;
// }
// console.log(a);

// function a() {
//     const ab = 10;
// }
// const ab = 20;
// function b() {
//     const a = 20;
// }

// Reducing an array
let arr = [1, 2, 3, 4];
// let total = 0;

// for (let value of arr) {
//   total = total + value;
//   console.log(total);
// }

let totalsum = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,);
{
  console.log("Total sum is: ");
  console.log(totalsum);
}
