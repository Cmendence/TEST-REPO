let button = document.getElementById('btn');
let content = document.getElementById('content');
let id = 0;
 
// button.addEventListener('click', () => {
//     if (content.innerHTML == 'Testing Testing') {
//         content.innerHTML = 'Lazy Lazy';
//     } else {
//         content.innerHTML = 'Testing Testing';
//     }
// })

document.getElementById('remove').addEventListener('click', () => {
    let idToRemove = document.getElementById('remove-id').value;
    let elementToRemove = document.getElementById(idToRemove);
    elementToRemove.parentNode.removeChild(elementToRemove);
    document.getElementById('remove-id').value = ""
})


document.getElementById('add').addEventListener('click', () => {
    let parent = document.getElementById('paragraphs');
    let newElement = document.createElement('p');
    newElement.innerHTML = document.getElementById('new-text').value;
    newElement.setAttribute('id', id++);
    parent.appendChild(newElement);
    document.getElementById('new-text').value = "";
})