const colors = ['red','green','black','yellow','pink']

//normal destructuring👇

// const clr1 = colors[0]
// const clr2 = colors[1]
// const clr3 = colors[2]

//Es6 destructuring👇

// const [clr1, b,c,d ,e] = colors
// const {4:clr,2:clr1} = colors
// console.log("first:", clr1, "second:",b, "third:",c, "fourth:",d, "fifth:",e)

const user = {
    name:'Yogesh',
    age: 23,
    address:{
        vill :'Lucknow',
        state:'UP',
        city:'LKO',
        pinCodes:{
            pincode1:12345,
            pincode2: 45678
        },
    },
}

// const age= user.age
// const name= user.name
// const{name,age} = user
// const {address:{city}} = user
// const{address:{pinCodes:{pincode2,pincode1}}} = user


// function intro({name,address:{vill,city,state,pinCodes:{pincode2}}}){
// console.log(name,vill,city,state,pincode2)
// }  
// intro(user)

// function intro({age,name,address}){
// console.log(age,name,address)
// }

// intro(user)

function printColors([a,b,,e,d]){
console.log([a,b,,e,d])
}
printColors(colors)
