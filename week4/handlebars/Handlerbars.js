
// turn our "template" into html
`var source = $('#store-template').html();
`
// compile our template html using handlebars
var template = Handlebars.compile(source);

// fill our template with information
let people = [1,2,3]
var newHTML = template({item: "bread", price: "3", people});

// append our new html to the page
$('.items').append(newHTML);

var newHTML2 = template({item: "Cheese", price: "10"});

$('.items').append(newHTML2);
