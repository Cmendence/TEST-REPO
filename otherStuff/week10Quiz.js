// A new paragraph is added to the div anytime the button is clicked.
// The paragraph's content should be the text entered into the input element. 
// Clear the input element's text when the button is pressed.


let paragraphId = 0;

document.getElementById ('p-button').addEventListener('click' , () => {

// Locate the parent 
var parent = document.getElementById ('p-div' );
console.log(parent);

// create a new element
var newElement = document.createElement ('p' );
newElement.innerHTML = document.getElementById ('p-input' ).value ;
newElement.setAttribute('id', paragraphId++);
console.log(newElement.innerHTML);

// attach to the parent
parent.appendChild (newElement);


// clear out the input box after adding the element
document.getElementById ('p-input').value = '';
});
