const colors = ['red','green','black','yellow','pink']

//normal destructuring👇

// const clr1 = colors[0]
// const clr2 = colors[1]
// const clr3 = colors[2]

//Es6 destructuring👇

const [clr1, b,c,d ,e] = colors
console.log("first:", clr1, "second:",b, "third:",c, "fourth:",d, "fifth:",e)




const user = {
    name:'yogesh',
    age: 23,
    address:{
        vill :'lucknow',
        state:'up',
        pinCode:12345
    },
}



