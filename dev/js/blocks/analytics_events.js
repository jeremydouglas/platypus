$(function() {

    $('a[href^="tel"]').on('click', function() {
        var this_rel = $(this).attr('rel');
        if (typeof attr !== typeof undefined && attr !== false) {
            this_rel = 'general';
        }
        ga('send', 'event', 'phone', 'click', this_rel);
    });

    var scrolled_once = 0;

    $(window).scroll(function() {
       if($(window).scrollTop() + $(window).height() == $(document).height()) {
           if (scrolled_once == 0) {
               ga('send', 'event', 'scroll-to-bottom', 'Page: 'window.location.href, 'Page height: '$(document).height());
           }
           scrolled_once = 1;
       }
    });
});
