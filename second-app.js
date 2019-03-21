/*                  ------------------------------Snippet 1---------------------------------------------            */
var firstPerson = {
    name: 'raghav',
    age: 28,
    hobbies: ['palying','eating','sleeping']
}

var secondPerson = firstPerson;

console.log(secondPerson);
console.log(firstPerson);

firstPerson.name = 'RAGHAV'; //This tells that an object is basically a refernce and not a primitive.

console.log(secondPerson);
console.log(firstPerson);

/*                  ----------------------------------Snippet 2-----------------------------------------                      */
var name = 'Raghav';
var secondName = name;

console.log(name);
console.log(secondName);

name = 'RAGHAV'; //This is a primitive so value for secondName won;t be changed later.
console.log(name);
console.log(secondName);

/*                  ----------------------------------Snippet 3-----------------------------------------                      */

var secondPerson = Object.assign({},firstPerson);
console.log(secondPerson);

firstPerson.name = 'ROHIT'; //This won't influence anything because we used the assign method on the object refernec available.
console.log(secondPerson);

/*                  ----------------------------------Snippet 4-----------------------------------------                      */
firstPerson.hobbies.push('Repeating...'); //This will be the same refernce, because the object creation is not so strict.
console.log(secondPerson); 
//This will give hobbies in both of them.
console.log(firstPerson);

//To avoid this we can use something like loadash.
// Lodash is a JavaScript library which provides utility functions for common programming tasks using the functional programming paradigm.

/*                  ----------------------------------Snippet 4-----------------------------------------                      */
var myHobbies = firstPerson.hobbies;  //This is not a primitive value, that's a refernece agaiain, this is clear by the myHobbies variable.
console.log(myHobbies);

firstPerson.hobbies.push('Freaking!');

console.log(myHobbies);

//We can do the actual value (primitive ) using the slice method available in arrays.

var myHobbies2 = firstPerson.hobbies.slice(); //Pass no arguments, so entire array
console.log(myHobbies2);

firstPerson.hobbies.push('Whatbro!');
console.log(myHobbies2); //This won't show what bro, unlike the previous one, cause we have used splice.
console.log(firstPerson.hobbies);