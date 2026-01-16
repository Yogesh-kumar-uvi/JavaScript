const green = document.querySelector(".green")
const pink = document.querySelector(".pink")
const blue = document.querySelector(".blue")

// window.addEventListener('click', (e) => {
    
//     console.log("6: window Event Listner")
// },{capture:true})

// document.addEventListener('click', (e) => {
//     // e.stopPropagation()
//     console.log("5: document Event Listner")
// },{capture:true})

// document.body.addEventListener('click', (e) => {
//     // e.stopPropagation()
//     console.log("4: body Event Listner")
// },{capture:true})

// green.addEventListener('click', (e) => {
//     // e.stopPropagation()
//     console.log("3: green Event Listner")
// },{capture:true})
// pink.addEventListener('click', (e) => {

//     console.log("2: pink Event Listner")
// },{capture:true})

blue.addEventListener('click', (e) => {

    console.log("1: blue Event Listner")
},{once:true})
