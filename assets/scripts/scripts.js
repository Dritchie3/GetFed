let recipes = [];
// let NutritionFacts = [];

// Function returns all the needed info from the API and delivers them into the array "recipes." 

function getData(ingredients, quantity) {
    let queryURL = 'https://api.edamam.com/search?q=' + ingredients + '&to=' + quantity + '&app_id=7c4bfe4e&app_key=d65e09f7ab643fa5a0668444302a33cc';
    // console.log('queryURL')        
    // Ajax query for Edamam
    return $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            recipes = [];

            for (let i = 0; i < response.hits.length; i++) {
                var obj = {
                    recipeName: response.hits[i].recipe.label,
                    imageURL: response.hits[i].recipe.image,
                    ingredients: response.hits[i].recipe.ingredients,
                    cal: response.hits[i].recipe.calories,
                    carbs:  response.hits[i].recipe.totalNutrients.CHOCDF.quantity,
                    fat: response.hits[i].recipe.totalNutrients.FAT.quantity, 
                    saturatedFats: response.hits[i].recipe.totalNutrients.FASAT.quantity,
                    polySatFats: response.hits[i].recipe.totalNutrients.FAPU.quantity,
                    monoSatFats: response.hits[i].recipe.totalNutrients.FAMS.quantity,
                    protien:  response.hits[i].recipe.totalNutrients.PROCNT.quantity,
                    fiber: response.hits[i].recipe.totalNutrients.FIBTG.quantity,                 
                    sugars: response.hits[i].recipe.totalNutrients.SUGAR.quantity
                };
                
                recipes.push(obj);
                console.log(obj);
                
            };
     
            
        });
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





