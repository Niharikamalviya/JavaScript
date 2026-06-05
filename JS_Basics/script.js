console.log('hello namaste duniya');

// let a = true;
// console.log(a);

// //const num = 12;
// let lastName = 'babbar';
// console.log(lastName);


// # object  create
// const rectangle = {
//     length: 1,
//     breath: 2,

//     draw: function () {
//         console.log('drawing function');
//     }
// }


//# factory function  -> Camel case -> first letter is small and other will be capital --> firstName

// function createRectangle(length, breath) {
//     const rectangle = {
//         length,
//         breath,

//         draw: function () {
//             console.log('drawing function');
//         }
//     };

//     return rectangle;
// }

// let rectangleObject1 = createRectangle(4, 5);
// let rectangle2 = createRectangle(2, 1);
// let rectabgle3 = createRectangle(3, 8);

// # constructor function -> pascal notation -> first letter of every word is capital -> NumberOfState
// this used show curret object

// objecct creation using constructor funtion
// new is a keyword which return empty objects
// function Rectangle(len, bre) {
//     this.length = len;
//     this.breath = bre;
//     this.draw = function () {
//         console.log('drawing');
//     }
// }
// let rectangleObject = new Rectangle(8, 9);

// # dynamic object 

function Rectangle(len, bre) {
    this.length = len;
    this.breath = bre;
    this.draw = function () {
        console.log('drawing');
    }
}
let rectangleObject = new Rectangle(8, 9);
rectangleObject.color = 'white';
console.log(rectangleObject);

delete rectangleObject.color;

// constructor property
// function are objects

// data type
// primitive type pass by value
// answer will be 10 not 11

let b = 10;
function inc(b) {
    b++;
}
inc(b);
console.log(b);

// refrenses pass by refrence

let a = { value: 10 };
function inc(a) {
    a.value++;
}
inc(a);
console.log(a)

// for -in  loop
// keys are reflected through key varibles
// values are reflected through rectangle[key]

let rectangle = {
    length: 2,
    breath: 4,
};

// for (let key in rectangle) {
//     console.log(key, rectangle[key]);
// }

// for -of loop

for (let key of Object.keys(rectangle)) {
    console.log(key);
}

if ('length' in rectangle) {
    console.log('present');
}
else {
    console.log('absent');
}

// object cloning by iteration

let src = {
    a: 20,
    b: 30,
    c: 40,

};

let dest = {};

for (let key in src) {
    dest[key] = src[key];

}

console.log(dest);

src.a++;
console.log(dest);

// object #2 by assing

// let src = {
//     a: 20,
//     b: 30,
//     c: 40,
// };

// let dest = Object.assign({}, src);
// console.log(dest);

// src.a++;
// console.log(dest);

// #3 object cloning

// let src = {
//     a: 20,
//     b: 30,
//     c: 40,
// };

// let dest = { ...src };
// console.log(dest)

// src.a++;
// console.log(dest);

// string in objects
let lastName = 'malviya';

let firstName = new String('niharika');

// template literal used back tick

let name = `
hello niharika

thank you for coming

regards
niharika`;
console.log(name);

let date = new Date()

let date3 = new Date(2005, 1, 3, 11)
console.log(date3);

// array creation  as primitive

let numbers = [1, 3, 6, 7];

numbers.length = 0;

console.log(numbers);

// insertion end begin middle

// array as objects index of methods not works here because its based on refrences 

let courses = [
    { no: 1, name: 'niharika' },
    { no: 2, name: 'rahul' }
];

console.log(courses);

// searcing inside object array

let course = courses.find(function (course) {
    return course.name === 'love';
})

console.log(course);

// other way to write the function method using arrow function

// let course = courses.find(course => course.name === 'love');

console.log(course);

// combine  primitive

let first = [1, 2, 3];
let second = [4, 5, 6];

// let combined = first.concat(second);
// console.log(combined);

// slice on primitive 

// let sliced = combined.slice(2, 6);

// console.log(sliced);

// (2,6) range of 2 to 6 in indexning 2 included and last element will be excluded

// spread operator 

let combined = [...first, 'a', ...second];
console.log(combined);

// copy 

let another = [...combined];

// join

let num = [12, 13, 14, 15, 16];
const joined = num.join(',');

console.log(joined);

// split 

let message = 'this is my first message';

let parts = message.split(' ');

console.log(parts);

// sort primitive

let letter = [42, 56, 34, 12, 44];
letter.sort();
console.log(letter);

// filtering in array

let array = [2, 4, -4, 0, -9];

let filtered = array.filter(value => value >= 0);
console.log(filtered)

// mapping arrays

let list = [3, 6, 2, 4, 1];

let mapping = list.map(function (value) {
    return 'student_no' + value;
})

console.log(mapping);

// mapping whith objects

let numerical = [1, -2, 3, 4, -6, 5];

let filterd = numerical.filter(value => value >= 0);
let items = filterd.map(function (num) {
    let obj = { value: num };
    return obj;
})

console.log(items);

