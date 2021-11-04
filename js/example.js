// Worked with Tynan Hollyer
// ADD NEW ITEM TO END OF LIST
// https://www.w3schools.com/jsref/met_node_insertbefore.asp
// https://www.w3schools.com/jsref/met_node_appendchild.asp
var list = document.getElementsByTagName("UL")[0];
var newItem = document.createElement("LI");
var textnode = document.createTextNode("cream");
newItem.appendChild(textnode);

list.appendChild(newItem, list.childNodes[list.length]);

// ADD NEW ITEM START OF LIST
// https://www.w3schools.com/jsref/met_node_appendchild.asp
var newItem = document.createElement("LI");
var textnode = document.createTextNode("kale");
newItem.appendChild(textnode);

list.insertBefore(newItem, list.childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var elements = document.getElementsByTagName('li');

for (let i = 0; i < elements.length; i++) {
    // https://www.w3schools.com/howto/howto_js_add_class.asp
    elements[i].classList.add("cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var numli = document.createElement("span");
numli.innerHTML = elements.length;

var hele = document.getElementsByTagName('h2')[0];
hele.appendChild(numli);
