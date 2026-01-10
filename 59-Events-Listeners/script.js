const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')

function sayHii() {
    console.log('hiiiii');
}

// h1.onclick = sayHii

function secondHii() {
    console.log('second hiii');
}

// h1.onclick= sayHii
// h1.onclick=secondHii

// h1.addEventListener('click',sayHii)
// h1.addEventListener('click',secondHii)

//----------------------------------------------------

// by createElement  method

//-----------------------------

// let count = 1;

// card.addEventListener('click', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })


//-----------------------------------------------

// by cloneNode method

//--------------------------

let count = 1;

card.addEventListener('click', () => {
    // const newCard = document.createElement('div')
    // newCard.classList.add('card')
    const newCard = card.cloneNode()
    newCard.classList.remove('add-card')
    newCard.innerText = count++
    container.append(newCard)
})
