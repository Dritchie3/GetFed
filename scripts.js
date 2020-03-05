
// getFed();
// function GetFed(){
// query recipePuppy
// $('#')
let ingredients = 'beef';



var queryURL ='https://api.edamam.com/search?q=' + ingredients + '&app_id=7c4bfe4e&app_key=d65e09f7ab643fa5a0668444302a33cc';
console.log('queryURL')

let b = $('#ingredient');

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