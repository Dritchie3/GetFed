$(document).ready(function () {

    $('#sidebar-collapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#notebook-spiral').toggleClass('active');
        $('#content').toggleClass('active');
    });

});
$('.dropdown-menu').on('click', function(e) {
    e.stopPropagation();
  });