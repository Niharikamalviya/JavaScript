//  adding 100 para
// const t1 = performance.now();
// for (let i = 1; i <= 100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is para' + i;

//     document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log("this took" + (t2 - t1) + "ms");

//  optimising a bit

// const t3 = performance.now();

// let myDiv = document.createElement('div');

// for (let i = 1; i <= 100; i++) {
//     let element = document.createElement('p');
//     element.textContent = 'this is para' + i;

//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);

// const t4 = performance.now();
// console.log("this took" + (t4 - t3) + "ms");


// best practic using fragment for inhancing performances


// let fragment = document.createDocumentFragment();
// for (let i = 1; i <= 100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'this is para' + i;

//     fragment.appendChild(newElement);
// }

// document.body.appendChild(fragment); // 1 reflow , 1 repaint


// syncronization nature / single line run
// js does not execute multiple lines /function at the same time

// function addPara() {
//     let para = document.createElement('p');
//     para.textContent = 'Js is single';
//     document.body.appendChild(para);
// }
// function appendNewMessage() {
//     let para = document.createElement('p');
//     para.textContent = 'kya haal chal';
//     document.body.appendChild(para);

// }

// addPara();
// appendNewMessage();


// used to set time out 
setTimeout(function () {
    console.log('hello everyone');
}, 5000);