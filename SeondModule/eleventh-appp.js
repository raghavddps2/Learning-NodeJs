console.log("Statement 1");
console.log("Statement 2");

const fetchData = callback => {
    setTimeout(() => {
        console.log('done!');
    },4000);
}

setTimeout(() => {
    console.log("Statement 3");
    fetchData(text=>{
        console.log('Sup!'); //First, all synchronous will be logged.
        console.log(text);
        console.log("Hi!");
        
    })
},2000);