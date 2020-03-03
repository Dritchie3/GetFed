
$('#test').text('hello');
// getFed();
// function GetFed(){
// query recipePuppy
// $('#')
let ingredients = 'beef';
var queryURL ='http://www.recipepuppy.com/api/?i=' + ingredients + '&p=3';
console.log('queryURL')

// Ajax query for recipePuppy
$.ajax({
    url: queryURL,
    method: "GET"
})
.then(function(response) {
    // let shows = 0;
    // function showMore(){
    // for (i = 0; i < shows + 3; i++){
    // $('#').text(response.results[i].title)    
    // $('#').text(response.results[i].ingredient)
    // let image = response.results[i].thumbnail
    // $('#').append('<img src = 'image'');
    console.log('response' + response);

    });
    // };
// click event to run showMore() to show 3 more recipes.
// });

// };