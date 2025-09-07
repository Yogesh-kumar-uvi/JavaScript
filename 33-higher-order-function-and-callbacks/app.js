//higher order function
function a(b){
    console.dir(b)
    b()
}

function sayHii(){
    console.log("hiiiiiii")
}
a(sayHii)


// callback Function (jab kisi bhe function ko call krte time dusre function ko pass krte hai to jis functio ko pass kiya jata hai use callback function khate hai 
a(function (){
    console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
})


