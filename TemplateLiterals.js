const names ='Lily';
const age = 30;
const job = "web Developer";
const city = "sangli";
let html;

//It is generally used when inserting HTML using JS, When Fetch Something Through AJAX

// Without Template  STrings:
html='<ul><li>Name: ' + names + '</li><li>Age: ' + age +'</li><li> ' + job + '</li><li>' + city+ '</li></ul>';

document.body.innerHTML = html;
