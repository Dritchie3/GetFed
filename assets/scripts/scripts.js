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
    let ingredients = $('#ingredient').val();
    // renderResults();
    getData('beef', 10)
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












// function getNutrition(){
//     let recipe = recipes[0];
//     let recipeIngred = encodeURI(recipes[0].ingredients[0].text);
//     let query2 = 'https://api.edamam.com/api/nutrition-data?app_id=6a19c081&app_key=f8bc949d4bca737a82744dc19e89b1fa&ingr=' + recipeIngred;
//     console.log('query2 = ' + query2);
//     console.log('recepeIngred = ' + recipeIngred);
//     console.log('recipe = ' + recipe);
    
//     return $.ajax({
//         url: query2,
//         method: "GET"
//     })
//         .then(function (response1) {
//             console.log('ajax is working');
//                 let obj2 = {
//                     cal: response1.calories,
//                     carbs:  response1.dietLabels,
//                     fat: response1.totalNutrients.FAT.quantity, 
//                     saturatedFats: response1.totalNutrients.FASAT.quantity,
//                     polySatFats: response1.totalNutrients.FAPU.quantity,
//                     monoSatFats: response1.totalNutrients.FAMS.quantity,
//                     protien:  response1.totalNutrients.PROCNT.quantity,
//                     // fiber: ,  not available                  
//                     // sugars: , not available
                    
//                 };                
//                 nutritionFacts.push(obj2);                
            
//                 console.log('obj2 = ' + obj2);
//                 console.log('nutritionFacts array = ' + nutritionFacts)

//                 console.log('cal: = ' + response1.calories);
//                 console.log('carbs: = ' +  response1.dietLabels);
//                 console.log('fat: = ' + response1.totalNutrients.FAT.quantity); 
//                 console.log('saturatedFats: = ' + response1.totalNutrients.FASAT.quantity);
//                 console.log('polySatFats: = ' + response1.totalNutrients.FAPU.quantity);
//                 console.log('monoSatFats: = ' + response1.totalNutrients.FAMS.quantity);
//                 console.log('protien: = ' + response1.totalNutrients.PROCNT.quantity);
//                 fiber: ,                    
//                 sugars: ,

//             });            

// };





