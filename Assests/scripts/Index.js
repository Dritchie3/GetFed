
let l = 0;

$("#btn").on("click", function() {
    console.log('button clicked');
    event.preventDefault();
    // ingredients = this.className
    let ingredients = $('#ingredient').val();
    console.log(ingredients);

    renderResults();

    function renderResults() {
        var queryURL ='https://api.edamam.com/search?q=' + ingredients + '&app_id=7c4bfe4e&app_key=35198e90b1a2413dbcf9af60310e5939';
        console.log('queryURL')

        // Ajax query for recipePuppy
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response) {
            $('#title').empty();
            $('#link').empty();
            $('#image').empty();
            $('#title1').empty();
            $('#link1').empty();
            $('#image1').empty();
            $('#title2').empty();
            $('#link2').empty();
            $('#image2').empty();
            

            $('#title').text(response.hits[l].recipe.label);               
            let recipeLink = $('#link').text(response.hits[l].recipe.url);
            $('#link').attr('href', recipeLink)   
           
            let image = response.hits[l].recipe.image;
            console.log('image0 = ' + response.hits[l].recipe.image)
            $('#image').append('<img src ='+ image+'/>');
            console.log('response' + response.hits[l].recipe.label);
            console.log('image0 = ' + image);

            l=l + 1
            $('#title1').text(response.hits[l].recipe.label);    
            $('#link1').text('<a>' + response.hits[l].recipe.url);
            image = response.hits[l].recipe.image;
            $('#image1').append('<img src ='+ image+'/>');
            console.log('response' + response.hits[l].recipe.label);

            l=l + 2
            $('#title2').text(response.hits[l].recipe.label);    
            $('#link2').text(response.hits[l].recipe.url);
            image = response.hits[l].recipe.image;
            $('#image2').append('<img src ='+ image+'/>');
            console.log('response' + response.hits[l].recipe.label);
            });
        
    };
});
