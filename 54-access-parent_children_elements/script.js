// CHILD ELEMENT
const pureCss = document.querySelector("ol li p"); // <p>Pure CSS</p>

// PARENT
const parentLi = pureCss.parentElement;      // <li>
const parentOl = parentLi.parentElement;     // <ol>

// CHILDREN
const cssOl = document.querySelector("li img + ol");
const allChildren = cssOl.children;           // all <li> inside <ol>
const firstChild = cssOl.children[0];

// SIBLINGS
const cssImage = document.querySelector("img.css-image");
const nextSibling = cssImage.nextElementSibling;     // <ol>
const prevSibling = cssImage.previousElementSibling; // <br>

console.log(parentLi);
console.log(parentOl);
console.log(allChildren);
console.log(firstChild);
console.log(nextSibling);
console.log(prevSibling);
