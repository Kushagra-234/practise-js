// const parent=document.getElementsByClassName("parents")
const parent=document.querySelector(".parent")
const grand=document.querySelector(".grand ")
// const parent = document.getElementById("parent")
// const parent=document.getElementsByClassName("parents")

// document.addEventListener

// parent.addEventListener(
//     "oncl",e=>{
//         console.log("hey");
//     })
grand.addEventListener("click",e=>{
    console.log("document 1")
})





parent.addEventListener("click",e=>{
    console.log("document 2")
})
// maan lo aapne ek div bnaya uske andar ek aur div bnaya aur fir andar wale div pe ek event lgaya to fir bahar wala
// div bhi apne aap ho jaega agar uspe koi event lga hoga to ise hi event bubbling kehte hai 
// ise rokna hai to istemaal kro capture ka 


