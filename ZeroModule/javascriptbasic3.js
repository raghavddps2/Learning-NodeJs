class User{
    constructor(name,age,email,profession){
        this.name = name; //This w
        this.age = age;
        this.email = email;
        this.profession = profession;
    }
    //Note that we ahve no need to provide any function keyword or anything like that here.
    generateReport(){
        let reportString = `The name is ${this.name} with age ${this.age} and the email id as ${this.email} and the professions as ${this.profession}`;
        console.log(reportString);
    }
}

//We created a class here, and now we can create various users out of this class.

const User1 = new User('Raghav',28,'raghav.ddps2@gmail.com','Beginner');
const User2 = new User();
User2.generateReport();
User1.generateReport();
