const radius=[1,2,3,4];
// radius is callback function

function calcarea(radius){
    output=[];
    
    // calcarea is hof
    for(i=0;i<radius.length;i++)
    {
        area=(Math.PI*radius[i]*radius[i])
        // console.log(area);
        output.push(area);
        
        
    }
    console.log(output);
    
    // console.log(area);

}

// calcarea();
console.log(calcarea(radius));