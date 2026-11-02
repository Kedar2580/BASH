// const { createElement } = require("react");

// console.log("Hello from jsdom2");

//  function click() {
//   console.log("I Have Clicked on the Document !");
// };

// document.addEventListener("click", click);

// document.removeEventListener("click", click);

// phases of events
// 1. Capturing Phase
// 2. Target Phase
// 3. Bubbling Phase

// const content = document.querySelector("#wrapper");
// content.addEventListener("click", function (event) {
//   console.log(event);
// });

// let links = document.querySelectorAll('a');
// let thirdLink = links[2];

// thirdLink.addEventListener('click', function (event) {
//   event.preventDefault();
//   console.log('Maza aya', 'Aaacha laga');
// });

let myDiv = document.createElement("div");

function paraStatus(event) {
  console.log("I have clicked on para" + event.target.textContent);
}
myDiv.addEventListener("click", paraStatus);

for (let i = 1; i < 100; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "this is paragraph " + i;

  myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);
