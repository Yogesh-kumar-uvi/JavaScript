console.log("Hii-1")

function hello() {
    console.log("hello world");  
}
function h1() {
    console.log("h1");  
}
function h2() {
    console.log("h2");  
}
function h3() {
    console.log("h3");  
}
function h4() {
    console.log("h4");  
}

for(let i = 1; i <= 4; i++){
    console.log(i);
}
// debugger
hello()
setTimeout(function(){
    console.log("Hii-3")
});
setTimeout(hello,1000);
setTimeout(h1,2000);
setTimeout(h2,3000);
setTimeout(h4,5000);
setTimeout(h3,4000);

console.log("Hii-2")