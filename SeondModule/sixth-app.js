//So, Array is another important data structure in javascrip are arrays.
//We can have any data we normally use, strings, numbers, objecvts,booleand or doubles.

var hobbies = ['Sleeping','Eating','Coding'];
//So, to iterate over this loop we can have the for loop as
// for(let hobby of hobbies){
//     console.log(hobby);
// }
//This wiill print all the hobies to the console.
//We can have vatrious other methods on the arrays, the common function we will be using is something like map, or forEach and so on..

 //This allows you to retrun a new array by adding something as a function and then return something. (Talking about map.)
 console.log(hobbies.map(hobby => `Hobbies: ${hobby}`));
 console.log(hobbies); //One thing that is to be noted is that, this wont change the array we have originally, so we basically use the map function to
 //map all the values we have with a specific function.


