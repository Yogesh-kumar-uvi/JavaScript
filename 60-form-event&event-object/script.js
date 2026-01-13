const usernameInput = document.querySelector('#username')
const paragraph = document.querySelector('p')


// usernameInput.addEventListener('click',() => {
//     console.log("input clicked") 
// })

// usernameInput.addEventListener('dblclick',() => {
//     console.log("input dblclicked") 
// })

// usernameInput.addEventListener('input',(e) => {
//     console.log(e.target.value)
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value
    
// })


// usernameInput.addEventListener('change',(e) => {
//     console.log(e.target.value)
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value
    
// })

// usernameInput.addEventListener('focus',(e) => {
// console.log(e.type)
//     // console.log(e.target.value)
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value
// })

// usernameInput.addEventListener('blur',(e) => {
//     console.log(e.type)
//     // console.log(e.target.value)
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value
    
// })

const form = document.querySelector('form')

// form.addEventListener('submit',(e) => {
//     e.preventDefault()
// console.log("form Submited")
// })

form.addEventListener('click',(e) => {
    e.preventDefault()
console.log(e.target)
console.log(e.currentTarget)
})