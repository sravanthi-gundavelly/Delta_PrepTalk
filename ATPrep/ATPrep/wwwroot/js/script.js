$(function() {
    $('.menu_btn').click(function() {
        $(".sidebar").addClass("active");
        $(".sidebar_overlay").addClass("active");
    });
    $('.sidebar_overlay').click(function() {
        $(".sidebar").removeClass("active");
        $(".sidebar_overlay").removeClass("active");
    });
});