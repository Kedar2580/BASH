// // adding 100 para

// const t1 = performance.now();
// for (let i = 1; i < 100; i++) {
//   let p = document.createElement("p");
//   p.textContent = "This is a paragraph." + i;
//   document.body.appendChild(p);
// }
// const t2 = performance.now();
// console.log("Time taken: " + (t2 - t1) + " milliseconds.");



// // optimizing bit
// let myDiv = document.createElement("div");
// for (i = 1; i < 100; i++) {
//   let p = document.createElement("p");
//   p.textContent = "This is a paragraph." + i;
//   myDiv.appendChild(p);
// }
// document.body.appendChild(myDiv);


// let fragment = document.createDocumentFragment();

// for (let i = 1; i < 100; i++) {
//   let p = document.createElement("p");
//   p.textContent = "This is a paragraph." + i;
//   fragment.appendChild(p);
// }
// document.body.appendChild(fragment);


// function addpara() {
//     let para = document.createElement("p");
//     para.textContent = "This is a paragraph.";
//     document.body.appendChild(para);
// }

// function appendnewmassage() {
//     let para = document.createElement("p");
//     para.textContent = "This is a new message.";
//     document.body.appendChild(para);
// }

// addpara();  
// appendnewmassage();


