$(function() {

    $('a[href^="tel"]').on('click', function() {
        var this_rel = $(this).attr('rel');
        if (typeof attr !== typeof undefined && attr !== false) {
            this_rel = 'general';
        }
        ga('send', 'event', 'phone', 'click', this_rel);
    });

    $(window).scroll(function() {
<<<<<<< HEAD
       if($(window).scrollTop() + $(window).height() == $(document).height()) {
           ga('send', 'event', 'scroll-to-bottom', 'Page: 'window.location.href, 'Page height: '$(document).height());
       }
=======
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            ga('send', 'event', 'window', 'scroll', 'bottom');
        }
>>>>>>> 26ca116aaa972129181a46c93612a61950f6eb63
    });
});
