function test(a, b){
    {console.log(arguments[3]);}
    {console.log(arguments[2]);}
    {console.log(arguments[0]);}
}
test (5,7,8,9,0); 

function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i]
    }
    return sum;
}
console.log(add(1,2,3,4,5,6,7,8,9,0))


// not working in arrow function error 

const add = ()  => {
    let num = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i]
    }
    return sum ;
}

// *************************************************//
const add1 =  (...num) =>{
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i]
    }
    return sum ;
}



// now its possible this method

function add2() {
    const num = Array.from(arguments)
    return num.reduce((sum,current)=>sum+current,0)
}
console.log(add2(1,2,3,4,5,6,7,8,9,0))