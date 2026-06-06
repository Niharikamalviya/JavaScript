
//  events
// monitorEvent();

// document.addEventListener('click', function () {
//     console.log('i click on document');
// });

// let content = document.querySelector('h1');

// content.addEventListener('click', function () {
//     content.style.background = 'red';
// });

// event listeneer for h1 heading tag 

// let content = document.querySelector('h1');

// content.addEventListener('click', function () {
//     content.style.background = "green";
// }
// );

// content.removeEventListener('click', function () {
//     console.log('i have clicked on the heading')
// });


let content = document.querySelector('h1');
content.addEventListener('click', function (event) {
    console.log(event);
})


// default action to prevent
let links = document.querySelectorAll('a');
let thirdLink = links[2];

thirdLink.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('maza aaya ')
});

// uses of phase 
let myDiv = document.createElement('div');

function paraStatus(event) {
    console.log('para' + event.target.textContent);
}
myDiv.addEventListener('click', paraStatus);


for (let i = 1; i <= 100; i++) {
    let newElement = document.createElement('p');
    newElement.textContent = 'this is para' + i;

    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);

// sibling tag problem solved by namenode

// if(event.target.nodeName === 'SPAN');
