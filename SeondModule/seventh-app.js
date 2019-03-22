//Object and arrrays are reference type, so one thing is to be noted is that, we are using const for arrays, and we are modifying them later
//This is because they are not primitives, instead they are refernece types.

const hobbies = ['Eat','Sleep','Code'];
hobbies.push('repeat');
console.log(hobbies);


//refernece types only store the address of the memory where that array is stored and the address does not change by adding the new element.
//So, this works undoubtedly.
//We are only editing the thing that the constant thing is pointing at.

const arr = ['Raghav','Maheshwari','Chacha','Love you!'];
arr[2] = 'Raju Chacha';
//We can edit the const there as we are just editing the thing arr is pointing at (reference types!);
console.log(arr);

const val = 10;
val = 20; //This will give an error as the val is a primitive type and not a constant.
console.log(val); 