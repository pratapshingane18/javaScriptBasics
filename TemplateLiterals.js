const names ='Lily';
const age = 30;
const job = "web Developer";
const city = "sangli";
let html;

//It is generally used when inserting HTML using JS, When Fetch Something Through AJAX

// Without Template  Strings:
html='<ul><li>Name: ' + names + '</li><li>Age: ' + age +'</li><li> ' + job + '</li><li>' + city+ '</li></ul>';


//With Template Literals

html = `
<ul>
<li>Name: ${names}</li>
<li>Age: ${age}</li>
<li>job: ${job}</li>
<li>City: ${city}</li>



</ul>

    

`
document.body.innerHTML = html;

