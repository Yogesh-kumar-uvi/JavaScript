// const allImages = document.images
// const allImages = document.getElementsByTagName('img')
// const cssImage = document.getElementsByClassName('css-image')
// const cssImage = document.getElementById('css-id')
// const cssImage = document.querySelector('.css-image')
// const cssImage = document.querySelector('#css-img')
// const cssImage = document.querySelectorAll('.css-image')
// const jsImage = document.querySelector('[alt="javascript roadmap"]')
// const li = document.querySelector('ul li')

const allImages = document.querySelectorAll('img')

const imagesUrl = ["https://media.istockphoto.com/id/2166282428/photo/a-beautiful-and-lush-green-forest-canopy-illuminated-by-warm-sunlight-streaming-through.webp?a=1&b=1&s=612x612&w=0&k=20&c=pAbM-TaCjxMefRxZBp3uQp27lwlEFFqni5yJnrzpPho=",
    "https://plus.unsplash.com/premium_photo-1719943510748-4b4354fbcf56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://media.istockphoto.com/id/1269451119/photo/a-long-winding-road-between-green-hills.webp?a=1&b=1&s=612x612&w=0&k=20&c=mqZVWzJxHFhqcKakwBbFwkxQJg96WJORz_VWJ8aEP6c="]

// for (let i = 0; i < allImages.length; i++) {
//     allImages[i].src = imagesUrl[i]
// }

allImages.forEach((image, i) => {
    image.src = imagesUrl[i]
})