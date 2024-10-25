const main = document.querySelector('body');
main.style.backgroundColor="grey";

const div= document.createElement('div');
div.id = "first";
div.className = "parent";
div.setAttribute('title','My First Page');
div.style.backgroundColor = "green";
div.style.height = "50px";
div.style.padding = "15px";
const addText = document.createTextNode('Hello this is me how are you jeba');
div.appendChild(addText);
document.body.appendChild(div);
console.log(div);
div.style.color= "white";
div.style.border="2px solid black";
div.style.width="96px";
div.style.borderRadius="15px";

const button = document.createElement('button');
document.body.appendChild(button);
const button_text = document.createTextNode('Click here');
button.appendChild(button_text);
button.style.padding="15px";
button.style.backgroundColor="red";
button.style.color = "white";
button.style.borderRadius = "15px";
button.style.border = "none";
button.style.margin="5px";

const para = document.createElement('p');
const text  = document.createTextNode('hay js is com piled langueage or not ?');
para.appendChild(text);
document.body.appendChild(para);

const heading =  document.createElement('h1'
);
const head = document.createTextNode("Jeba Ansari");
heading.appendChild(head);
document.body.appendChild(heading);
head.innerText = "jeba";

