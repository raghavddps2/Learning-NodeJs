var name = "Max"; //String
console.log(name);

var age = 10; //Number
console.log(age);

var isMale = false; //Boolean
console.log(isMale);

var salary = 2500.00 //Salary
console.log(salary);

function summarizeUser(userName,userAge,isMale,userSalary){
    return 'Name is '+ userName + ' and age is '+ userAge + ' .The person is ' + (isMale ? 'Male':'Female') + ' salary is '+userSalary;
}

console.log(summarizeUser('Rohani ',10,false,25000));