// console.log(window);
// window.alert(1)

// function book(){
//     console.log("book initialized");
// }
// // const book2
// // book();
// const book2=new book();

// constructor functions
// console.log("hello");

// function generalcar(givenname,givenspeed){
//     this.name=givenname;
//     this.speed=givenspeed;
//     this.run=function(){
//         console.log(`${this.name} is running`);
//     }
// }
// car1=new generalcar("nisaan",180)
// // console.log(car1);
// // console.log(`${this.name}`);
// console.log(`${car1.name}`);
// console.log(car1.run())
// generalcar();
// car=new generalcar('nissan',100)
// console.log(car);
// prototype mtlb jo pehle se maujood ho prototype me object me pehle se maujood hoti hai kuch property hamare define krte samay bhi
// use kehte hai object prototype

function obj1(){
    console.log("name");
    // firstname:"manu",
    // lastname:"gupta",
    // firstname:"manu",
    // lastname:"gupta",
    // console.log(this.lastname);
    // console.log(hello); 
}
// console.log(obj1.firstname);
// console.log(obj1.lastname);
obj2= new obj1();
console.log(obj2);
// prototype mtlb jo uspe pehle se ho tumhare object define krne se pehle 