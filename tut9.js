// const fun = (resolve,reject) =>{

//     // console.log("hello");
//     console.log(resolve +  reject);

// }

// fun("hello", "hi");

// let p=new Promise((resolve,reject)=>{

// })

// const fun=((c,d)=>{
//     console.log(c+d);
// })

// fun(4,5);

// const hello=(a,b)=>{
//     console.log(a+b);
// }
// hello(3,4);

var p=new Promise((resolve,reject)=>{
    let a=1+1;

    if(a==3){

        resolve();
       
        
    }else{
        reject();
    }


})

p.then(()=>{
    console.log("sahi hai ");

}).catch(()=>{
    console.log("helloerror");

})


