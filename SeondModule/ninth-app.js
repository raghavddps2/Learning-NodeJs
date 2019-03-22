 //Here, in this we are gonna talk about destructuring! 

 var Object1 = {
     name: 'Raghav',
     age: 10,
     greet(){
         console.log('Heu, my name is '+this.name);
     }
 };

//  const printName = (person) => {
//     console.log(person.name);
//  }



 //Now, if we actually don't wanna use the object there too, we can destructure what we get.
 const printName = ({ name })  =>{
     console.log(name);
 }                       //We specify the property we are interested in.
 printName(Object1);

//  const {var1,var2} = Object1;  ///You have to specify the name of the actual keys.
const {name,age} = Object1;
 console.log(name,age);
 //Here, we destructure objects.

 const hobbies = ['Reading','writing','speaking','saying'];
 let [hobby1,hobby2] = hobbies;   //Here, we can use any names of our choice. //[] as it is arrays.
 console.log(hobby1,hobby2);