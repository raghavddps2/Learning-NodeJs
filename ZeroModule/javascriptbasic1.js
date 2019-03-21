//So, in this what i am gonna learn is the concept of this in javascript.

var myNewobject = {
    name: 'Raghav',
    age: 10,
    speak: function(fullname){
        console.log(this); //When we log this out, we notice that whole object is outputted as it refers to the current object here.
    }
}

var myNewObject2 = {
    name: 'Rohit',
    age: 20,
    speak: function(){
        console.log(this); //When we log this out, we notice that whole object is outputted as it refers to the current object here.
    }
}s

myNewobject.speak();
myNewObject2.speak();