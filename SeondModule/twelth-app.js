console.log('Statement 1');
console.log('Statement 2');

const fetchData = () =>{
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('done!');
        },6000);
    });
    return promise;
    //Resolve accepts the promise and the reject rejects it!
    
}

// setTimeout(()=>{
//     console.log('Statement 5');
//     fetchData(text =>{  //So, text is as a calllback here.
//         console.log('Statement 6');
//         console.log(text);
//         console.log('Statement 7');
//     })
// },3000);

setTimeout(()=>{
    console.log()
},3000);

console.log('Statement 3');
console.log('Statement 4');

//I didn't get promises.
//Have to watch this again!