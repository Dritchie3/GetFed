let weeklyPlan = {
    Monday: [1,2,3,4,5],
    Tuesday:[""],
    Wednesday:[""],
    Thursday:[], 
    Friday:[],
    Saturday:[],
    Sunday:[]
}
$(".week-day").on("click", function()
{
    weekday = $(this).text();
    renderDayOfWeek(weekday)
});

function renderDayOfWeek(weekday)
{
    weeklyPlan.Monday;
  //  {
        let mealDiv = $("<div>");
        let mealImg = $("<img>");
        let mealFooterDiv = $("<div>");
        let deleteButton = $("<button");
        let mealType = $("<p>");

        mealDiv.addclass("col-lg-3 meal-card");
        mealImg.attr("src", item.imageURL)
        $(".planner-bottom-row").append(mealDiv).append(mealImg).append(mealFooterDiv);
  //  }
}