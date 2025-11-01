const evenNumbers = [4,6,3,8,2]

// at least one elements or conditions ture output true
const result = evenNumbers.some((num ) => {
    
    return num % 2 === 0
})
console.log(result)


const oddNumbers = [3,5,4,7,9]

// all elements or conditions are true then output will be ture if any condition false output will be false

const odd = oddNumbers.every((num ) => {
    debugger
    return num % 2 ==! 0
})
console.log(odd)