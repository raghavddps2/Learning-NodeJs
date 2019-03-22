const person = {
    name: 'Max',
    age: 29,
    // greet: () =>{
    //     console.log('Hey is am '+this.name + ' and my age is '+this.age);
    // }

    /*This won't work now as the this here in the greet function is referring to the 
        global scope and not to the object. So, its better to use the old school function approach.
    */
//    greet: function(){
//     console.log('Hey is am '+this.name + ' and my age is '+this.age);
//    }
   /*
    But, now we need something better than this, so what we do is we basically apply the function directly here itself.
   */

   greet(){
    console.log('Hey is am '+this.name + ' and my age is '+this.age);
   }
};
person.greet();

