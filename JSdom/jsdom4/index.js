// console.log('Hello, JSdom4!');

// setTimeout(function () {
//   console.log("third");
// },3000);

// function sync() {
//   console.log("first");
// }
// sync();
// console.log("second");
// ---------------------------------------------------------------
// let merapromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("i am inside promise");
//   }, 5000);

//   //   resolve("2233");
//   reject(1998);
// });
// console.log("pehla");

// merapromise.then((value) => {
//   console.log(value);
// });

// merapromise.catch((error) => {
//   console.log(error);
// });

// -----------------------------------------------
// let wada1 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("setTimeout1 started");
//   }, 2000);
//   resolve(true);
// });

// let output = wada1.then(() => {
//   let wada2 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log("setTimeout2 started");
//     }, 5000);

//     resolve("wada2 is resolved");
//   });
//   return wada2;
// });
// output.then((value) => console.log(value));

// ---------------------------------------------
// async function Example
// async function abcd() {return 7;}
// abcd();

// ----------------------------------------------

// async function utility() {
//   let maharashtraMausam = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve("maharashtra mausam is good");
//     }, 1000);
//   });

//   let DelhiMausam = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve("Delhi mausam is good");
//     }, 3000);
//   });

//   let mh = maharashtraMausam;
//   let dh = DelhiMausam;

//   return [mh, dh];
// }

// what is fetch API
// async function utility() {
//   let content = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   let output = await content.json();
//   console.log(output);
// }
// utility();

// // -----------------------------------
// async function helper(params) {
//   let options = {
//     method: "POST",
//     body: JSON.stringify({
//       title: "foo",
//       body: "bar",
//       userId: 1,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   };

//   let content = await fetch(
//     "https://jsonplaceholder.typicode.com/posts",
//     options,
//   );
//   let response = content.json;
//   return response;
// }

// async function utility() {
//   let ans = await helper();
//   console.log(helper);
// }
// utility();



function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();