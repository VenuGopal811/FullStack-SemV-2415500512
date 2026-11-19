let a= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        return resolve("Success");
    }, 1000);
});

a.then((res)=>{
    console.log(res);
}).catch((rej)=>{
    console.log(rej);
}).finally(()=>{
    console.log("code completed");
});