// using this file is optional
// you can also load the code snippets in using your browser's console



//1)
const main = document.getElementById('main');
 
main.addEventListener('click', function(event) {
  alert('I was clicked!');
});



//2) Print key on keydown Event
//const input = document.querySelector('input');

//function whichKey(e) {
//  console.log(e.which);
//}

//input.addEventListener('keydown', whichKey);



//3) Prevent default
const input = document.querySelector('input')
 
input.addEventListener('keydown', function(e) {
  if (e.which === 71) {
    return e.preventDefault()
  } else {
    console.log(e.which)
  }
});



//4) Bubbling
/*let divs = document.querySelectorAll('div');
 
function bubble(e) {
 
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
  
}
 
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
*/


//5) Capturing
/*divs = document.querySelectorAll('div');
 
function capture(e) {
  
  console.log(this.firstChild.nodeValue.trim() + ' captured');
  
}
 
for (let i = 0; i < divs.length; i++) {
  
  // set the third argument to `true`!
  divs[i].addEventListener('click', capture, true);
}
*/

//Stop Propagation
const divs = document.querySelectorAll('div');
 
function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation();
 
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}
 
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}