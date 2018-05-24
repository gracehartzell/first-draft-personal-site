$(document).ready(main);
var main = function() {
    $('.icon-menu').click(function() {
      $('.menu').animate({
          left: '0px'
        }, 10);
        
        $('body').animate({
            left: '285px'
        }, 10);
    });
    $('.icon-close').click(function() {
        $('.menu').animate({
            left: "-285px"
        }, 10);
        
        $('body').animate({
            left: "0px"
        }, 10);
    });
};
