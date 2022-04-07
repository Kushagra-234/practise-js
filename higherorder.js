function calltwice(func){
    func()
    func()
}
// hhof me functiom passsed as an argument inside nother function

function rolldie(){
    const roll=Math.floor(Math.random()*6)
    console.log(roll);
}

// rolldie()
// calltwice(rolldie())
calltwice(rolldie);