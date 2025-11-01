const nums = [10,20,30,40]

const total = nums.reduce((acc,curr)=>{
    console.log("acc:",  acc, "curr:", curr)
    return acc * curr;
},50)
console.log("total:", total)