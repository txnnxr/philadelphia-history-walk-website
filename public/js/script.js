$(document).ready(function() {
    $('#fade').hide();
    $('#navicon').click(function() {
        if($('#navicon').hasClass('closed')) {
            $('body').animate({right: "-250px"}, 400).css({"overflow":"hidden"});
            $('#main-nav').animate({left: "0"}, 400);
            $(this).removeClass('closed').addClass('open').html('<i class="fa fa-caret-left" aria-hidden="true"></i>');
            $('#fade').fadeIn(); }
        else if($('#navicon').hasClass('open')) {
            $('body').animate({right: "0"}, 400).css({"overflow":"scroll"});
            $('#main-nav').animate({left: "-250px"}, 400);
            $(this).removeClass('open').addClass('closed').html('&#9776;');
            $('#fade').fadeOut(); }
    });
});