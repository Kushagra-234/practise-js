// fetch('https://jsonplaceholder.typicode.com/todos/1').then(res=>res.json())
// .then(json=>console.log(json))

// fetch('https://jsonplaceholder.typicode.com/todos/1')

// .then ka itna istemaal hota tha jo promises ki wajah se wo ht gya aysnc await ke istemaal se 
// ab itni jhanjhat nhi krni pdhti asyncawait ki wajah se code clean rhta hai 


async function loaduser(){
    const response=await fetch ("https://jsonplaceholder.typicode.com/todos/1")
    return response.json();


    // fetch ('https://jsonplaceholder.typicode.com/todos/1')
}

loaduser()
.then(jsondata=>console.log(jsondata))