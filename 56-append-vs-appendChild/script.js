const h1 = document.querySelector("h1")
const container = document.querySelector(".container")
const card = document.querySelector(".card")

//container.appendChild(h1) only append
//container.appendChild(h1.cloneNode(true)) append with content

// for(let i = 2;i<=100;i++){

// const newCard = card.cloneNode()
// newCard.innerText = i
// container.append(newCard)

// }

const newTextNode = document.createTextNode('Hello World')

// container.appendChild(newTextNode)
container.appendChild(newTextNode,h1)
