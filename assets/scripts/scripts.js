let recipes = [
    {
        recipeName: "Deviled Ham",
        imageURL: "https://www.edamam.com/web-img/ecb/ecbe5f690b7fc62cb134d52f172a4b32.jpg",
    },
    {
        recipeName: "Deviled Ham",
        imageURL: "https://www.edamam.com/web-img/ecb/ecbe5f690b7fc62cb134d52f172a4b32.jpg",
    }];
let cookbook = [];
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
            console.log(response);
            recipes = [];
            for (let i = 0; i < response.hits.length; i++) {
                console.log('i = ' + i);
                // console.log(response);
                var recipe = response.hits[i].recipe;
                var obj = {
                    recipeName: recipe.label,
                    imageURL: recipe.image,
                    ingredients: recipe.ingredients,
                    cal: recipe.calories,
                    recipeUrl: recipe.url
                };
                if (recipe.totalNutrients.hasOwnProperty('CHOCDF')) {
                    obj.carbs = recipe.totalNutrients.CHOCDF.quantity
                }
                else if (!recipe.totalNutrients.hasOwnProperty('CHOCDF')) {
                    obj.carbs = 0;
                };
                if (recipe.totalNutrients.hasOwnProperty('FAT')) {
                    obj.fat = recipe.totalNutrients.FAT.quantity
                }
                else if (!recipe.totalNutrients.hasOwnProperty('FAT')) {
                    obj.fat = 0;
                };
                if (recipe.totalNutrients.hasOwnProperty('FASAT')) {
                    obj.saturatedFats = recipe.totalNutrients.FASAT.quantity
                }
                else if (!recipe.totalNutrients.hasOwnProperty('FASAT')) {
                    obj.saturatedFats = 0;
                };
                if (recipe.totalNutrients.hasOwnProperty('FAPU')) {
                    obj.polySatFats = recipe.totalNutrients.FAPU.quantity
                }
                else if (!recipe.totalNutrients.hasOwnProperty('FAPU')) {
                    obj.polySatFats = 0;
                };
                if (recipe.totalNutrients.hasOwnProperty('FAMS')) {
                    obj.monoSatFats = 0;
                }
                else if (!recipe.totalNutrients.hasOwnProperty('FAMS')) {
                    obj.monoSatFats = 0;
                };
                if (recipe.totalNutrients.hasOwnProperty('PROCNT')) {
                    obj.protien = recipe.totalNutrients.PROCNT.quantity
                }
                else if (!recipe.totalNutrients.hasOwnProperty('PROCNT')) {
                    obj.protien = 0;
                };
                if (recipe.totalNutrients.hasOwnProperty('FIBTG')) {
                    obj.fiber = recipe.totalNutrients.FIBTG.quantity
                }
                else if (!recipe.totalNutrients.hasOwnProperty('FIBTG')) {
                    obj.fiber = 0;
                };
                if (recipe.totalNutrients.hasOwnProperty('SUGAR')) {
                    obj.sugar = recipe.totalNutrients.SUGAR.quantity
                }
                else if (!recipe.totalNutrients.hasOwnProperty('SUGAR')) {
                    obj.sugar = 0;
                };

                recipes.push(obj);
            };

            renderSearch();
        });
};
//-------------------Render Search Results-------------------
function renderSearch()
{
    $("#meal-container").empty();
    recipes.forEach(function (item, indx)
    {
       $("<div class='col-lg-6 meal-card'>"+
       "<div class=meal-img>"+"<img"+" "+"src="+"'"+item.imageURL+"'"+" "+"alt='meal-img'>"+"<h4 class='meal-title'>"+item.recipeName+"</h4>"+"</div>"+
       "<div class='meal-facts-right'>"+"<p>"+"Cal: "+item.cal.toFixed(0)+"</p>"+"<p>"+"Carbs: "+item.carbs.toFixed(0)+"</p>"+"<p>"+"Fiber: "+item.fiber.toFixed(0)+"</p>"+"</div>"+
       "<div class='meal-facts-left'>"+"<p>"+"Protein: "+item.protien.toFixed(0)+"</p>"+"<p>"+"Fat: "+item.fat.toFixed(0)+"</p>"+"<p>"+"Sugar: "+item.sugar.toFixed(0)+"</p>"+"</div>"+
       "<div class='meal-options'>"+"<a href="+"'"+item.recipeUrl+"'"+" target='_blank'>View Recipe</a>"+"<button>Add To Cookbook</button>"+"</div>"+
       "</div>").appendTo("#meal-container");
    });
}
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
$(".search-btn").on("click", function () {
    console.log('choice button clicked');
    event.preventDefault();
    let ingredients = $('#ingredient').val();
    // renderResults();
    getData(ingredients, 6)
    // .then(getNutrition);
});



// script moment clock
