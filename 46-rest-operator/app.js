const nums = [1,2,3]

// function add(a,b,c,...nums){
//     console.log(nums)

//     let sum = 0;
//     for (let i = 0; i<nums.length;i++){
//         sum = sum + nums[i];
//     }
//     return "abc";
// }
// const result = add(1,2,3,4,5,7)
// console.log(result)



function add(...nums) {
    return nums.reduce((acc,curr) => acc + curr)
}
const result = add(...nums)
console.log(result)


function add(...nums) {
    return [...arguments].reduce((acc,curr) => acc + curr)
}
const result1 = add(4,5,6,...nums)
console.log(result1)


function add(...nums) {
    return Array.from(arguments).reduce((acc,curr) => acc + curr)
}
const result2 = add(11,22,33,...nums)
console.log(result2)


