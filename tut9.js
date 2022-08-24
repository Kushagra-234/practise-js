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
    let a=1+4;

    if(a==2){

        resolve();
       
        
    }else{
        reject("error");
    }


})

p.then(()=>{
     let a=3;
     let b=5;
     console.log(a+b);


}).catch((message)=>{
    console.log("hello" + message );
})


