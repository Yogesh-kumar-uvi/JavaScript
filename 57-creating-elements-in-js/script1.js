const container = document.querySelector(".container")

//----------first method----------

for(let i = 1;i<10;i++){
    const imgContainer = document.createElement('div')
imgContainer.classList.add('img-container')

const newImage = document.createElement('img')
newImage.src =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

const paragraph = document.createElement('p')
paragraph.innerText = i


imgContainer.append(newImage,paragraph)
container.append(imgContainer)
}


//------------Second Method--------------

// let myHtml = ``
// for (let i = 1; i <= 100; i++) {
//     myHtml += ` 
//     <div class="img-cantainer">
//     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//     <p>${i}</p>
//     </div>`           
// }
// container.innerHTML = myHtml