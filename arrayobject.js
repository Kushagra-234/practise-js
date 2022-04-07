// const arr=[


//     {fname:"manu",lname:"gupta"},
//     {fname:"tanu",lname:"tupta"},
//     {fname:"hanu",lname:"hupta"},
//     {fname:"fanu",lname:"fupta"},
// ]

// console.log(arr[0]["lname"]);

// const name={
//     fname:"manu",lname:"gupta",
// }

// console.log(name.lname);

// function greet(fname){
//     console.log(`hey there ${fname}`);
// }

// greet("manu");
const testscore={
    manu:90,
    tanu:40,
    hanu:50,
    ganu:20,
    fanu:80,
}

// console.log(testscore["manu"]);
// console.log(testscore.manu);
// for(let person in testscore)
// {
//     console.log(` ${person} and ${testscore[person]}`   );
// }

let score=Object.values(testscore)
// console.log(score);
let total=0;
// for(i=0;i<score.length;i++){
//     total+=score;

// }
for( let scores in score){
    total+=scores;
}
console.log(`average is ${total/score.length}`)
// for in se object par iterarte kro  