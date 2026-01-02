const h1 = document.querySelector('h1')
h1.style.color = 'green';

const paragraph = document.querySelector('p')
paragraph.style.color = 'hotpink';

const anchorTags = document.querySelectorAll('a')

// for (let i = 0; i < anchorTags.length; i++) {
//     anchorTags[i].style.color = 'teal'
// }

for (const tags of anchorTags) {
    // tags.style.color='green'
    // tags.style.textDecorationLine ='none'
    // tags.style.fontFamily='cursive'
    // tags.style.fontSize='20px'
    // tags.style.fontWeight='bold'

    tags.style.cssText = `
        color: green;
        text-decoration-line: none; 
        font-family: cursive; 
        font-size: 20px; 
        font-weight: bold;`
}

const listItems = document.querySelectorAll('li')

// for (let i = 0; i <listItems.length;i++){
//     listItems[i].style.color = 'red'
// }

for (const list of listItems){
list.style.color = 'red'
}


const list = document.querySelectorAll('li');

list.forEach((li) => {
    const p = li.querySelector('p');
    if (p) {
        p.style.color = 'yellow';
    }
});

    
