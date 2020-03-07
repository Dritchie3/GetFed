

$("#btn").on("click", function() {
    console.log('choice button clicked');
    event.preventDefault();
    // ingredients = this.className
    let ingredients = $('#ingredient').val();
    renderResults();

    function renderResults() {
        let quantity = 10
        let queryURL ='https://api.edamam.com/search?q=' + ingredients + '&to=' + quantity + '&app_id=7c4bfe4e&app_key=d65e09f7ab643fa5a0668444302a33cc';
        // console.log('queryURL')        
            // Ajax query for Edamam
            $.ajax({
                url: queryURL,
                method: "GET"
            })
            .then(function(response) {
             // Add function to clear all
                for (let i = 0; i < response.hits.length; i++) {
                    console.log('i = ' + i);
                    let newId = response.hits[i].recipe.label;
                    console.log('recipe name = ' + newId); 
                    // Add to HTML with id= menuItem, add new div with id= newId named the recipe name (label)
                    // $('<div></div>').addClass('imageContainer').appendTo('#menuItem');
                    $('#menuItem').append('<div id=' + newId + '<h3>' + newId + '</h3></div>').css({'display': 'inline-block','font-size': '30px', 'color': 'red'})
                    let image = response.hits[i].recipe.image;  
                    console.log('image = ' + image);
                    let newURL = response.hits[i].recipe.url;
                    console.log('recipe = ' + newURL);  
                    // append image to page  and anchor to href to take to instructions page.                  
                    $('<a target="_blank" href="' + newURL + '"><img src=' + image + '></a>').appendTo('#menuItem');

                    // How to do this with each?????
                    for (let k=0; k<response.hits[i].recipe.ingredients.length; k++){
                        $('#menuItem').append('Ingredients needed.' + response.hits[i].recipe.ingredients[k].text).css({'color': 'black'});    
                    
                    };
                };

            });           
        };
});


      