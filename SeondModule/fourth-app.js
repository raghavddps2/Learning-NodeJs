//So, in this module, our main intention is to clear out our difference between let and const and secondly to get a clear understanding
// about the arrow functions in javascript

/*
    1. Okay, so let is basically used in place of var in ECMA SCRIPT 6 or ES6.
    2. const is basically used to clear our intention of taking a particular element as a constnat. 
*/

let name = "raghav";
const lastName = 'Maheshwari'; //We cannot change it later

name = "Raghav"
console.log(name+lastName);


//Arrow functions.

//Okay, so lets discuss the function expression here and that will give us a more clarity about the same.
let name1 = 'Raghav';
let age = 30;
let hobbies = ['Playing','Dancing','crawling'];

function summarizeUser(name,age,hobbies){
    return "The name of the person is "+ name + " and the age of the person is " + age + " the hobbies of the person are: "+ hobbies;
}

console.log(summarizeUser(name1,age,hobbies));

//Okay, so the above approach did our task using something called as normal functions, now we will use something called 
// as anonymous functions or unnamed functions.

const funcName = function(name,age,hobbies){
    return "The name of the person is "+ name + " and the age of the person is " + age + " the hobbies of the person are: "+ hobbies;
}
//Now, we can call the above function using funcName as the name of the function and all the arguments as usual.

console.log(funcName('Raghav',10,['cool','pool','tool','dool']));

//Okay, so here to we are using the function keyword, but there has to be some reason,
// to use arrow functions apart from not using the arrow functions. 

const func = (name,age,hobbies) =>{
    return "The name of the person is "+ name + " and the age of the person is " + age + " the hobbies of the person are: "+ hobbies;
}

console.log(func('Rekha',20,['Raghav','Shivani','Shraddha']));

//There is an advantage that we use arrow functions apart from the usual easier syntax, the advantage is that this keyowrd (difference
//regarding this.)

const func2 = name => {
    console.log(name);
}

func2('Raghav');

const add = (a,b) => {
    return a+b;
}

console.log(add(2,3));
//When we have a single argument, we have no need to use any braces as well.
//So, if we just have a single statement, then we can even emit the curly braces, and that will be a line of code then.
const sub = (a,b) => (a-b);
console.log(sub(5,4));

const mul2 = a => a*2;   
//This is the simplest arrow function with just one argumnet and one return statement, and hence we do not use any braces.
console.log(mul2(10));

//If there are no params or arguments, then we have to specify the empty parenthesis.
const randNum = () => Math.random() * 100000; //No arguments, and only one statement is to be returned.
console.log(randNum());