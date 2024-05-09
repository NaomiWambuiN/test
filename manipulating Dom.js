//create a h1 element
let h1 = document.createElement("h1");
//add text to h1 element
h1.textContent = "This is a new h1 heading";
//modifying the style of the h1 element
h1.style.color = "blue";
//append h1 to the body
document.body.appendChild(h1);
//create a paragraph
let p = document.createElement("p");
//add text to p element
p.textContent = "This is a new paragraph";
//modify the style of the paragraph
p.style.color = "black";
p.style.backgroundColor = "aqua";
//append p to the body
document.body.appendChild(p);
//create a div
let div = document.createElement("div");
//add content to the div
div.innerHTML = "<h2>This is a new div</h2>";
//append div to the body
document.body.appendChild(div);
//adding list items using javascript
//create a new list item and add it to the ul

let li = document.createElement("li");
li.textContent = "About us";
//get the ul element by its id
document.getElementById("menu").appendChild(li);
let lu = document.createElement("li");
lu.textContent = "Contact us";
//get the ul element by its id
document.getElementById("menu").appendChild(lu);
//removing a paragraph
//get the paragraph by its id
let para = document.getElementById("myp");
//remove the id from the div
document.getElementById("container").removeChild(para);
//another way you can do it
//get the paragraph by its id
//let para2 = document.getElementById("myp");
//container.removeChild(para)
//creating a div element
let mmm = document.createElement("div");
//adding content to the div
mmm.innerHTML = "<h2>This is another  div</h2>";
//adding the div to the body
document.body.appendChild(mmm);
//another way
let www = document.createElement("div");
document.body.appendChild(www);
//add innerText of h2 to the div
let xy = document.createElement("h2");
xy.textContent = "This is a h2 within a div";
//appendind the div to the h2
www.appendChild(xy);
