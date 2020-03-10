$(document).ready(function () {
    setInterval(() => {
        var now = moment();
        var readable = now.format("dddd"+","+" MMM Do"+","+" YYYY");
        $("#date").text(readable);
    }, 1000);
});









