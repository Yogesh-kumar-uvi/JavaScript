const h1 = document.querySelector("h1")
const container = document.querySelector(".container")
// const firstImage = document.querySelector("img")

// for(let i = 2; i<=100; i++){
//     const newImg = firstImage.cloneNode()
//     newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png` 
//     container.append(newImg)
// }

// const paragraph = document.createElement('p')
// //how to edit text and class ,id
// paragraph.innerText = " Hello World "
// paragraph.classList.add("my-para")
// paragraph.id = ("hii")

// container.append(paragraph)


const newImage = document.createElement('img')

newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`
container.append(newImage)

for(let i = 1; i<=100; i++){
    const newImg = document.createElement('img')
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png` 
    container.append(newImg)
}