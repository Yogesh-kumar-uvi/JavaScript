const usernameInput = document.querySelector('#username')
const paragraph = document.querySelector('p')

// usernameInput.addEventListener('click',() => {
//     console.log("input clicked") 
// })

// usernameInput.addEventListener('dblclick',() => {
//     console.log("input dblclicked") 
// })

usernameInput.addEventListener('input',(e) => {
    console.log(e.target.value)
    paragraph.innerText = e.target.value
    
})