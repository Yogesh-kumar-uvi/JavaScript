const nameElement = document.querySelector('.name-tag')
const nameInput = document.querySelector('.name')

// nameElement.innerText = localStorage.myName

// besttarika
nameElement.innerText = localStorage.getItem('myName')

nameInput.addEventListener('input', (e) => {
    // best way
    localStorage.setItem('myName',e.target.value)
    
    // localStorage.myName = e.target.value;
    nameElement.innerText = localStorage.myName
})



