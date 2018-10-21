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