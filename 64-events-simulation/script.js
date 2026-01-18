const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
const input = document.querySelector('input')
const form =  document.querySelector('form')

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

// setInterval(()=>{
//     console.log("form submited")
//     form.submit()
// },3000)

// setInterval(()=>{
//     input.focus()
//     console.log("input focused")
// },1000)

// setInterval(()=>{
//     input.blur()
//     console.log("input blured")
// },5000)


//  const intervalId = setInterval( () => {
//     console.log(intervalId)
//     if(count >= 1000){
//         clearInterval(intervalId)
//     }
//     addCardBtn.click()
// },10)

