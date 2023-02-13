// scope

// var is global scope
// let and const are block scope

// function test(){
//     let a=5;
//     {
//         var a=8;
//         console.log(a);
//     }

//     console.log(a);
// }

// let cannot be shadwoed by var but vice-versa can happen var shadowing let is illegal shadowing
// test();

// shadowing is when a variable shadows another variable like we see in test2 here when we console value of
// a becomes 7

// function test2(){
//     var a=5;

//     {
//        let  a=7;
//        console.log(a);

//     }
// console.log(a);

// }
// test2();

// let and var can be initialized without use
// but not const
// var a;
// let b;
// const c;
// syntax error throw kr dega wo

// let and const can be reupdated but not const

// let a=6;
//  a=9;
// console.log(a);
// temporal deadzone is a place where let and const variable recide before their initialization and after their
// declaration

// Basically, a function which takes another function as an argument or returns a function is known as a higher order function.

// map is higher order function which transforms an array by applying any specific operation on every element of array
// and returning result
// for eg
// const arr=[1,2,3,5];

// const newarr=arr.map((num)=>{
//     return num+1;

// })

// console.log(newarr);

// filter returns only those elements from array which fulfill the criteria
// it applies a condition (specific) on every element and if it returns true than it pushes that index in output array
// and if it returns false then it rejects it

// const arr=[1,2,3,4];

// const newarr=arr.filter((num)=>{
//      return num>2;
// })

// console.log(newarr);

// reduce takes a full array and reduces it in one value

// const arr=[1,2,3,4];

// const newarr= arr.reduce((acc,cur)=>{
//     return acc+cur

// },0)

// console.log(newarr);

// polyfill for map

// Array.prototype.mymap= function (cb){
//     let temp=[];
//     for (let i = 0; i < this.length; i++) {
//         temp.push(cb(this[i],i,this));

//     }

//     return temp;
// }

// polyfill for filter

// Array.prototype.myfilter = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) temp.push(this[i]);
//   }

//   return temp;
// };

// const arr = [1, 2, 3];
// const newarr = arr.myfilter((cur, i, arr) => {
//   return cur > 2;
// });

// console.log(newarr);

// difference between foreach and map
// both are array looping functions

// map does not modify original array
// whereas foreach modifies original array
// other functions cannot be used on foreach but on map can be used

// const arr=[1,2,3,4,5];

// const nayaarr=arr.map((cur,i,nums)=>{
//     return cur*2;

// })

//  const newarr=arr.forEach((cur, i, nums) => {
//   arr[i]= cur * 2;
// });

// console.log(nayaarr);
// console.log(newarr);
// console.log(arr);

// const students = [
//   {
//     name: "piyush",
//     rollno: 31,
//   },
//   {
//     name: "psjsjyush",
//     rollno: 401,
//   },
// ];

//  const newarr= students.map((cur)=>{
//      if(cur.rollno < 40 )
//      cur.rollno+= 20;

//      return cur

//  }).reduce((acc,cur)=>{
//      return acc + cur.rollno ;
//  },0)

//  console.log(newarr);

// const newstu = students.map(stu => stu.name.toUpperCase());

// console.log(newstu);

// const newmarks= students.filter((cur)=>{
//     return cur.rollno >30

// })

// console.log(newmarks);

// ques name of student whose marks greater than 40

// const newstu= students.filter( cur => cur.rollno >40 
// ).map( cur2 => cur2.name)

// console.log(newstu);
