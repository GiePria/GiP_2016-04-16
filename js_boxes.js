$(document).ready(function () {
    $("#firstBox").click(function () {
        $(this).fadeOut();
        $(this).fadeIn();
    });
    $("#secondBox").click(function () {
        $(this).slideUp();
        $(this).slideDown();
    });
});

