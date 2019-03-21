class NameField{
    constructor(name){
        const field = document.createElement('li');
            field.textContent = name;
            const nameListHook = document.querySelector("#names");
            nameListHook.appendChild(field);
    }
}

class NameGenerator{
    constructor(){
        const btn = document.querySelector('button');
        // btn.addEventListener('click',this.addName()); 
        //So, if we execute this code, this function gets executed immediately, as it has parenthesis there.As, we are simply
        //executing a function, so we jsut get it without even clicking on the button.

        //So, to add it only on click, we should remove the parenthesis (We will discuss the reason.)
        // btn.addEventListener('click',this.addName); //So, here i am just passing a reference to my function and not actually callingf it
        //We are telling it to work, when the click actually occurs.

        this.names = ['Manu','Tanu','Panu'];
        this.currentName =0;
        // btn.addEventListener('click',this.addName.bind(this));
        

        //Now instead we can use a function like this,
            btn.addEventListener('click',()=>{
                this.addName(); //This will again give an error, though it will not be executed immediately, this is just because
                //of the unambiguity of this in javascript, so to avaoid this we came out with the concept of arrow functions(which 
                //completely remove this ambiguity.)
            });


    }


    addName(){
        console.log(this); 
        const name = new NameField(this.names[this.currentName]); //Here, we can't access this.currentName,
        //We get a special thing, this doesn;t refer to class always, it refers to who ever callled the function, in this case it is a button

        //To avoid from button, becoming the this, we use something called as bind in javascript.
        this.currentName++;
        console.log(this);
        if(this.currentName >=this.names.length){
            this.currentName = 0;
        }
    }
}
//So, long in short, what we are basically doing is using the bind function to bind the this or the refernece we wanna have 
// so in turn in this case, it will refer to the constructor and not the button.
const gen = new NameGenerator();

