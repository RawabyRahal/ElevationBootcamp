var classData = {
    classmates: [
        {name: "That on gal", description: "Always has the ansswer"},
        {name: "The weird dude", description: "Quick with a smile"},
        {name: "Taylor", description: "Just Taylor"}
    ]
}

const source = $('#classmates-template').html();
const template = Handlebars.compile(source);
const newHTML = template(classData);

$('.classmates').append(newHTML);