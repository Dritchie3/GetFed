function getData(ingredients, quantity) {
    
}

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
                let idNum = 0
             // Add function to clear all
                for (let i = 0; i < response.hits.length; i++) {
                    console.log('i = ' + i);                                 
                    
                    // call for the Recipe name
                    let newId = response.hits[i].recipe.label;  
                    console.log('recipe name = ' + newId);
                    let menuId =('menu' + idNum)
                    $('#menuItem').append('<div id="' + menuId + '/"><h3>' + newId + '</h3></div>');

                    //  new div comenyt out before merge
                    idNum++
                    $('<div></div>').addClass('imageContainer').appendTo('#menuItem');
                    
                    // call for Image of recipe   
                    let image = response.hits[i].recipe.image;  
                    console.log('image = ' + image);
                    let newURL = response.hits[i].recipe.url;
                    console.log('recipe = ' + newURL);                                  
                    $('<a target="_blank" href="' + newURL + '"><img src=' + image + '></a>').appendTo('.imageContainer');

                    // Ingredient list
                    for (let k=0; k<response.hits[i].recipe.ingredients.length; k++){
                        $('.imageContainer').append(response.hits[i].recipe.ingredients[k].text + '<br>');    
                    
                    };
                };

            });           
        };
});


      