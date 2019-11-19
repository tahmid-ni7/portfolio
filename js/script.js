$(function () {
    //for finding the footer current year
    $('#year').text(new Date().getFullYear());

    //For hiding collapse
    $('.port-item').click(function () {
        $('.collapse').collapse('hide');
    });
});