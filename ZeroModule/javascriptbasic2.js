var myVariables = {
    name: 'Raghav Maheshwari',
    age: 30,
    appointements: 0,

    fixAppointment: function(){
        this.appointements += 1; ///We can hence access each of the property of the object.
    },

    summaryAppointements: function(){
        return(`${this.name} has ${this.appointements} appointments today`);  //So, we basically use this to access the values inside the function
    }
}

myVariables.fixAppointment();
myVariables.fixAppointment();
myVariables.fixAppointment();
myVariables.fixAppointment();
myVariables.fixAppointment();
myVariables.fixAppointment();

console.log(myVariables.summaryAppointements());
