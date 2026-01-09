const container = document.querySelector(".container")

//----------first method----------

for(let i = 1;i<=100;i++){
    const imgContainer = document.createElement('div')
imgContainer.classList.add('img-container')

const newImage = document.createElement('img')
newImage.src =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

const paragraph = document.createElement('p')
paragraph.innerText = i


imgContainer.append(newImage,paragraph)
container.append(imgContainer)
}

const myimg = document.querySelector("body > div > div:nth-child(5)")