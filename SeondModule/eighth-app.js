var arr = ['Eat','Sleep','Code','Repeat'];
var arr1 = arr.slice();
console.log(arr1);


var arr2 = [arr];
console.log(arr2); //So, this one actually not creates an array, it basically creates the original array as an element inside the array.
//We did not want this nested arrray.

///Now, we can use something called as the spread operator.
var arr3 = [...arr]; //So, what this is doing is basically, copying the elements inside the array, to the new array.
console.log(arr3); //And this is really a cool concept
//The square brackets around the operator, will add the elements into a new array

var obj1 = {
    name: 'Raghav',
    age: 10,
    hobbies: ['Playing','cooking','booking']
}

// var obj2 = [...obj1]; //This will give an error, as you are copying an object into an array. //Instead the next line will work.
var obj2 = {...obj1};
console.log(obj2);

//Okay, so all the discussion above was about the spread operator, we will now discuss about the rest operator.
//So, wha rest operator does is basiccally it converts the arguments we provide to an array.

//Condiser we have 4 arguments and we wanna create an array, the old school method we will be using is:
var arr2 = (arg1,arg2,arg3,arg4) => {
    return [arg1,arg2,arg3,arg4];
}

console.log(arr2(1,2,3,4)); //This will output the array with these values.
//Now, consider that we have 4 values instead of three, so we will beusing something calles as a rest operator.
var arr2 = (...args) => {
    return args;
}
console.log(arr2(1,2,3,4,5)); //This will output tthe entire array, how many ever values we pass, because we have used the REST operator.