// fetch me basically do paramater pass hote hai ek options aur ek URL
// fetch(URL,options)
// ye options ek object hota hai 
// object ek key value pair hai 

// const

const data={
    a: 1, 
    b: 'Textual content'

}

fetch("https://httpbin.org/post",{

    method:"POST",
    headers:{
        "Content-type":'application/json'
    },
    body:JSON.stringify(data),





}).then(res=>console.log(res))
// .then(data=>console.log(data))




