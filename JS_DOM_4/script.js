// syncronise function 


// setTimeout(function () {
//     console.log('third');
// }, 3000);

// function sync() {
//     console.log('first')
// };

// sync();

// console.log('second');

// promise function 
// let myPromise1 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('i am inside promise');
//     }, 3000);

//     // resolve(1998);
//     reject(new Error('bhaisahab Error aa ye hai'))
// });

// myPromise1.then((value) => { console.log(value) });

// myPromise1.catch((error) => { console.log("recieved an error") });
// console.log('pehla');

// myPromise1.then((value) => { console.log(value) }, (error) => { console.log("recieved an error") });
// console.log('pehla');


// await function 
// async function utility() {
//     let delhiMausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Dehli me bhot garmi hai");
//         }, 5000);
//     });
//     let hydraMausam = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("hydreabad is cool");
//         }, 6000);

//     });
//     let dM = await delhiMausam;
//     let hM = hydraMausam;

//     return [dM, hM];
// }


// fetch API

// let obj = {
//     headling: "head"
// };
// async function utility() {
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output = await content.json();
//     console.log(output);
// }

// utility();


// post Method using fetch APIs

// async function helper() {

//     let option = {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),

//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     };
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', option)
//     let response = content.json();
//     return response;
// }

// async function utility() {
//     let ans = helper;
//     console.log(ans);

// }

// closures 

function init() {
    var name = "mozilla";
    function displayName() {
        console.log(name);
    }
    displayName();
}
init();
