// javascript me sab kuch exectuion context ke andar store hota hai
// iske do section hote hai memory section aur code section
// javascript line by line code ko read krte chalta hai
// memory section me saare variables ko memory allocate hoti hsi
// jaise
// var n=2

// function square (num){
//     var ans=num*num
//     return ans
// }
// var square 2=square(n)
// var square4=square(4)

// memory me n ko undefined allocate krta hai aur saare function ko bhi store krta hai n undefined hota hai
// var n=2
// second phase joki code execution phase hai usme n me undefined ki jagah 2 pdh jaegi value n ki

// first phase ko memory execution kehte hai
// jab invoke hota hai function to fir naya execution context bnta hai aur firse undefined value dete hai n ko aur fir 2 phase me
// kaam chalta hai  memory creation aur code exectuion aur fir jab return hoti hai value tb global execution context
// delete hojata hai aur local execution context delete hojata hai
// js ka apna Call stack hota hai jisme pehle wo gec global execution stack push krta hai aur fir local execution stack


// event loop decide krta hai ki callstack me kya jaega jo execute ho do queue hoti hai callback queue and microtask queue
// callback queue me ssaare callback function execute hote hai aur microtask queue me wo callback jo promises se aate hai
// microtask queue ki priority jyada hoti hai jo microtask queue me hai wo pehle exectue hota hai 
// aur jo callback queue me hoti hai wo mocrotask queue ke baad hi execute hoti hai kyuki microtask queue ki prioriyy jyada hai 

// hoisting basically ek aisa phenomenon hai jisse ki banda define karne se pehlehi use kr leta hai 
// ek function ko ham variable ko use nhi kr skte hai aise kyuki usme equal operator hota hai 
// arrow function me bhi istemaal nhi kr skte
//  let const me bhi  nhi hota hai hoisting 
// scope chain is lexical environment of all functions present in program
// lexical enivronment hota hai local memory + lexical enivronment of its parent global ka le hota hai null

// function a(){
//     // var b=10;
    
//         console.log(b);
//     }

//     var b=10

// a();
// temporal deadzone me chale jaate hai let aur const ye global scope me nhi hote mtlb 