let object={
    name:kush,
    name:kushi,
}

let object=new Object({
    name:kussu,
    name:fussu
});

var object=Object.create({
    name:kush,
    name:kushi,
     }
    )

    function person(name){
        this.name=name;
    }

    var object=new person("sudheer");

    jab bhi ham koi naya function ,array ,object bnate hai to uska prototype bnta hai ise ham prototype kehte hai jisme kuch
    properties judi rhti hai pehle se ek funcrion ka protoype ek object hoga aur ek object ka null ye prototype chaining hai
    by use of prototype chaining we can make new objects from existing members;

    in call method we use data of one object and use it with another function this is called as function borrowing


    
    let printname = function (hometown){

        console.log(this.firstname + " " this.lastname + " " + "from" + hometown );


    } 

    let name2={
        firstname:"sachin",
        lastname:"tendua",
    }

    printname.call(name2,"mumbai");

    apply me kuch nhi hota bas dusra parameter as array list bhej dete hai
    aur bind me copy bna lete hai jisko baad me invoke kiya jaa ske 