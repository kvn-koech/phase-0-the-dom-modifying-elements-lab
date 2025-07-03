// Write your code here!

// // add a div in the DOM
// const element = document.createElement("div");

// // append an element into body
// document.body.append(element);

// // create ul and add a list in it
// const ul = document.createElement("ul");

// for (let i = 0; i < 3; i++) {
//   const li = document.createElement("li");
//   li.textContent = (i + 1).toString();
//   ul.append(li);
// }

// //append our ul

// element.append(ul);

// //using innerHTML

// const main = document.getElementById("main");
// main.innerHTML =
//   "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

// //styling

// const Element = document.getElementById("main");
// Element.style.height = "300px";
// Element.style.backgroundColor = "#27647B";

// //changing content

// element.textContent = "You've changed what's on the screen!";

// //styling 

// element.style.fontSize = "24px";
// element.style.marginLeft = "30px";
// element.style.lineHeight = 2;

//  //creating a className

// // element.className = "pet-listing dog";

// // <main id="main" class="pet-listing dog"></main>

// // // removing and adding elements

// // element.classList.remove("dog");
// // element.classList.add("cat", "sale");

// // <main id="main" class="pet-listing cat sale"></main>

// Remove the main#main node
const mainNode = document.getElementById('main');
if (mainNode) {
  mainNode.remove();
}

// Create new h1 element
const newHeader = document.createElement('h1');

// Set id attribute
newHeader.id = 'Victory';  
newHeader.id = 'victory';  

// Set text content (replace 'YOUR-NAME' with your actual name)
newHeader.textContent = 'Kevin is the champion';  

// Append to the document body (or another appropriate parent)
document.body.appendChild(newHeader);