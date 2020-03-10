let recipes = [];
let times = 0;
let nutrient;
// let NutritionFacts = [];

// Function returns all the needed info from the API and delivers them into the array "recipes." 

function getData(ingredients, quantity) {
    let queryURL = 'https://api.edamam.com/search?q=' + ingredients + '&to=' + quantity + '&app_id=7c4bfe4e&app_key=d65e09f7ab643fa5a0668444302a33cc';
    console.log('queryURL', queryURL);        
    // Ajax query for Edamam
    return $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            recipes = [];
            for (let i = 0 ; i < response.hits.length ; i++) {
                console.log('i = ' + i);
                // console.log(response);
                var recipe = response.hits[i].recipe;
                var obj = {
                    recipeName: recipe.label,
                    imageURL: recipe.image,
                    ingredients: recipe.ingredients,
                    cal: recipe.calories
                };
                if (recipe.totalNutrients.hasOwnProperty('CHOCDF')) {
                    obj.carbs =  recipe.totalNutrients.CHOCDF.quantity
                };
                if (recipe.totalNutrients.hasOwnProperty('FAT')) {
                    obj.fat =  recipe.totalNutrients.FAT.quantity
                };
                if (recipe.totalNutrients.hasOwnProperty('FASAT')) {
                    obj.saturatedFats =  recipe.totalNutrients.FASAT.quantity
                };
                if (recipe.totalNutrients.hasOwnProperty('FAPU')) {
                    obj.polySatFats =  recipe.totalNutrients.FAPU.quantity
                };
                if (recipe.totalNutrients.hasOwnProperty('FAMS')) {
                    obj.monoSatFats =  recipe.totalNutrients.FAMS.quantity
                };
                if (recipe.totalNutrients.hasOwnProperty('PROCNT')) {
                    obj.protien =  recipe.totalNutrients.PROCNT.quantity
                };
                if (recipe.totalNutrients.hasOwnProperty('FIBTG')) {
                    obj.fiber =  recipe.totalNutrients.FIBTG.quantity
                };
                if (recipe.totalNutrients.hasOwnProperty('SUGAR')) {
                    obj.sugar =  recipe.totalNutrients.SUGAR.quantity
                };
                console.log('working thus far');





                //     carbs:  recipe.totalNutrients.CHOCDF.quantity,                    
                //     fat: recipe.totalNutrients.FAT.quantity, 
                //     saturatedFats: recipe.totalNutrients.FASAT.quantity,
                //     polySatFats: recipe.totalNutrients.FAPU.quantity,
                //     monoSatFats: recipe.totalNutrients.FAMS.quantity,
                //     protien:  recipe.totalNutrients.PROCNT.quantity,
                //     fiber: recipe.totalNutrients.FIBTG.quantity,                 
                //     sugars: recipe.totalNutrients.SUGAR.quantity
                

                
                // givenNutrients('carbs', response.hits[i].recipe.totalNutrients.CHOCDF.quantity);
                
                
                recipes.push(obj);
                console.log(obj);
                
            };
     
            
        });
};

function givenNutrients(responseNutrient) {
    
    if (responseNutrient === undefined) {
        var obj = {
            nutrient: 'null'            
        }
        } else {
            var obj = {
               nutrient: responseNutrient
            }
        };
    };


// Buttton starts function not attached to any text box.
$("#btn").on("click", function () {
    console.log('choice button clicked');
    event.preventDefault();
    let ingredients = $('.search-btn').val();
    // renderResults();
    getData(ingredients, 10)
    // .then(getNutrition);
});



// script moment clock
$(document).ready(function () {
    setInterval(() => {
        var now = moment();
        var readable = now.format("dddd MMM Do YYYY h:mm:ssa");
        $("#menuItem").text(readable);
    }, 1000);
});









