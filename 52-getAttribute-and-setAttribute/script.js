let box = document.getElementById("box");

// console.log(box.getAttribute("id"));          // box
// console.log(box.getAttribute("style"));       // padding:10px; border:1px solid black;
// console.log(box.getAttribute("class"));       // null (agar class nahi hai)


// ----------------------
// SET ATTRIBUTE
// ----------------------


box.setAttribute("class", "new-class");     // class update
box.setAttribute("title", "This is a div"); // new attribute add
box.setAttribute("data-info", "updated");   // data attribute update

