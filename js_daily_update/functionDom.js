 
const body = document.querySelector('body');
body.style.backgroundColor="grey";
console.log("hello");
 
function addList(listName){
    const list = document.createElement('li');
    list.innerHTML = `${listName}`;
    document.querySelector('.parent').appendChild(list); // mistake ->list string me likh rhe the ppendchild me 
}
addList("ghee");
addList("salt");

function addPara(name){
    const newText = document.createElement('p');
    newText.innerHTML = `${name}`;
    document.querySelector('.parent').appendChild(newText);
}
addPara('<i class="fa-solid fa-eye"></i>');
// optimised code 
function addNode(node){
    const h = document.createElement('h1');
    h.appendChild(document.createTextNode(node));
    document.querySelector('.parent').appendChild(h);
}
addNode('Jeba ansari');
addNode('fareen Ansari');

// /edit 
const editOne = document.querySelector("li:nth-child(1)");
const newOne = document.createElement('span');
newOne.innerHTML = "<i class='fa-solid fa-eye'></i>";
editOne.replaceWith(newOne);

// remove
const lastlang = document.querySelector('li:last-child');
lastlang.remove();





