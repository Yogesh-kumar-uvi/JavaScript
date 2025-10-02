function parent(num) {
    const a = num;
    const b = 5 ;
    function child() {
        console.log(a);
    }
    return child
}
const store = parent()
const store1 = parent()

console.dir(store);
console.dir(store1);