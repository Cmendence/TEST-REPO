let p = $('#test');
let div = $('.my-class');
let ul = $('ul');


console.log(p);
console.log(div);
console.log(ul);


console.log(p.text());
p.text('New Text');

$('input').attr('placeholder', 'Placeholder Text');

div.prepend('<p> Prepended Paragraph</p>');
div.append('<p>Appended Paragraph</p>');
div.before('<p>Paragraph that was added before the div</p>');
div.after('<p>Paragraph that was added after the div</p>');


div.empty();
ul.remove();

$('input').hide()
setTimeout(()=> $('input').show(), 2000);


$.get('https://reqres.in/api/users/2', (data) => console.log(data));

$.post('https://reqres.in/api/users', {
    name: 'Tommy',
    job: 'Front End Dev'
}, (data)=> console.log(data));