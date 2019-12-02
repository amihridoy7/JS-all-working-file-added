/*
console.log(1);
console.log(2);
*/

/*
let age = 27;
let year = 2019;

// log things to console
console.log(age, year);

age = 30;
console.log(age);

const points = 100;

console.log(points);

var score = 76;
console.log(score);
*/

/*
// Strings
console.log('Hello, World 123 saknlsa');

let email = 'mario@thenetninja.co.uk';
console.log(email);

// String concatenation

let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters 
console.log(fullName[2]);

// string length
console.log(fullName.length);

// String methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName); 

let index = email.indexOf('@');
console.log(index);
*/

/*
// Common string methods

let email = 'mario@thenetninja.co.uk';

// let result = email.lastIndexOf('n');

// let result = email.slice(2, 5) ;

// let result = email.substr(4, 10)

// let result = email.replace('m', 'w');

let result = email.replace('n', 'w');

console.log(result);
*/

// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi);

// math operators +, -, *, /, **, %

// console.log(10 / 2);
// let result = radius % 3;

// let result = pi * radius**2

// order of operation - B I D M A S

//let result = 5 * (10 - 3)**2;

// console.log(result);

//let likes = 10;

// likes = likes + 1;
// likes++;
// likes--;

// likes += 10;

// likes -= 5

// likes *= 2;

// likes /= 2;

// console.log(likes);

// NaN - not a number

// console.log(5 / 'hello');
// console.log(5 * 'Hello');

// let result = ' the blog has ' + likes + ' likes ';
// console.log(result);

/*
// template strings
const title = 'Best reads of 2019';
const author = 'Mario'
const likes = 30;

// concatenation way

// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);



// template string way

let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// creating html templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>
`;

console.log(html);
*/

/*
let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'kan';
// console.log(ninjas[1]);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

//console.log(ninjas.length);

// array methods

// let result = ninjas.join('-');
// let result = ninjas.indexOf('chun-li');
// let result = ninjas.concat(['ken', 'crystal'])
let result = ninjas.push('ken');
result = ninjas.pop();

console.log(result);
*/

/*
let age = null;

console.log(age, age + 3, `the age is ${age}`);
*/


/*
// booleans & comparisons
console.log(true, false, 'true', 'false');

// methods can return booleans

let email = 'luigi@thenetninja.co.uk';
let names = ['mario', 'luigi', 'toad'];

// let result = email.includes('!');
// let result = names.includes('bowser');

// console.log(result);

// Comparison operators

let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age != 25);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);
// console.log(age >= 25);

// let name = 'shaun';

// console.log(name == 'shaun');
// console.log(name == 'Shaun');
// console.log(name > 'crystal');
// console.log(name > 'Shaun');
// console.log(name > 'Crystal');

// loose comparison (different types can still be equal)

// console.log(age == 25);
// console.log( age == '25');

// console.log( age != 25);
// console.log( age != '25');

// strict comparison (different types cannot be equal)

console.log(age === 25);
console.log(age === '25');
console.log(age !==  25);
console.log(age !== '25');
*/


/*
// type conversion

let score = "100";

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);


// let result  = Number('Hello');
// let result = String(50);
// let result = Boolean(100);
// let result = Boolean(0);
let result = Boolean('');


console.log(result, typeof result);
*/

/*
// For loops

// for(let i = 0; i < 5; i++){
//     console.log('in loop:', i);
// }

// console.log('loop finished');

// const  names = ['shun', 'mario', 'luigi']

// for(let i = 0; i < names.length; i++) {
//     // console.log(names[i]);
//     let html = `<div>${names[i]}</div>`
//     console.log(html);
// }

// While loops

// for (let i = 0; i < 5; i++){
//     console.log('in loop:', i);
// }

// let i = 0;

// while ( i < 5){
//     console.log('in loop:', i);
//     i++;
// }
*/

/* 
//For loops

for (let i = 0; i < 5; i++){
    console.log('in loop:', i);
}

console.log('loop finished'); */

/* const names = ['shaun', 'mario', 'luigi'];

for (let i = 0; i < names.length; i++){
    // console.log(i);
    // console.log(names[i]);

    let html = `<div>${names[i]}</div>`;
    console.log(html);
} */



/* // While loops

const names = ['shaun', 'mario', 'luigi'];

// let i = 0;

// while (i < 5) {
//     console.log('in loop: ', i);
//     i++;
// }

// let i = 0;
// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

let i = 0;

while( i < names.length){
    console.log(names[i]);
    i++;
} */

// do while loops
/* 
let i = 5;

do {
    console.log ('val of i is:', i);
    i++;
} while( i < 5);  */



/* // While loops

const names = ['shaun', 'mario', 'luigi'];

// let i = 0;
// while (i < 5) {
//     console.log ('in loop', i);
//     i++
// }

let i = 0;
while(i < names.length){
    console.log(names[i]);
    i++;
}
 */

/* 



// Do while loops

let i = 5;

do {
    console.log('val of i is:', i);
    i++;
} while(i < 5); */

// else if Statements

// const password = 'p@ss';

// if (password.length >= 12){
//     console.log('that password is mighty strong');
// }else if (password.length >= 8){
//     console.log('that password is long enough!');
// } else {
//     console.log('password is not long enough');
// }


// // logical operators - OR || and AND &&

// const password = 'p@ss12';

// if (password.length >= 12 && password.includes('@')){
//     console.log('that password is mighty strong');
// }else if (password.length >= 8 || password.includes('@') && password.length > 5 ){
//     console.log('that password is strong enough!');
// } else {
//     console.log('password is not strong enough');
// }

// logical NOT (!)

// let user = false;

// if(!user){
//     console.log('you must be logged in to continue');
// }


// console.log(!true);
// console.log(!false);


// // break and continue

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for (let i = 0; i < scores.length; i++){

//     if(scores[i] === 0){
//         continue;
//     }

//     console.log('yor score: ', scores[i]);

//     if (scores[i] === 100){
//         console.log('congrats, you got the top score!');
//         break;
//     }
// }

/* // switch statements

const grade = '50';


switch(grade){
    case "50":
        console.log ('you got an A!');
        break;
    case 'B':
        console.log('you got an B!');
        break;
    case 'C':
        console.log('you got an C!');
        break;
    case 'D':
        console.log('you got an D!');
        break;
    case 'E':
        console.log('you got an E!');
        break;
    default:
        console.log('not a valid grade');
    
} */


// // using if statements
// if(grade === 'A'){

// } else if(grade === 'B'){

// } else if(grade === 'C'){

// } else if(grade === 'D'){

// } else if(grade === 'E'){ 
    
// }


// variables & block scope

const age = 30;


if (true){
    const age = 40;
    const name = 'shaun';
    console.log('inside 1st code block: ', age, name);

    if(true){
        const age = 50;
        console.log('inside 2nd code block: ', age);
    }
}

console.log('outside code block: ', age, name, test);