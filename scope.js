for(let i=0;i<5;i++){
    let msg="abcd"
    console.log(msg);
}
console.log(msg);
// block ke andar nhi chalta hai let

for(var i=0;i<5;i++){
    var msg="bcda"
    console.log(msg);
}

console.log(msg);
// var ka scope bahar hota hai block se 

const arr=["manu","tanu","chanu","hanu"];
for( let hero of arr){
    console.log(`bachao hame ${hero}`);
}

// array me for of use hota hai 
const ary={fname:"kush",lname:"gupta",mname:"kumar",gname:"agar"};
for( let hero in ary){
    console.log(hero.fname);
    
}