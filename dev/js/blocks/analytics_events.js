$(function() {

    $('a[href^="tel"]').on('click', function() {
        var this_rel = $(this).attr('rel');
        if (typeof attr !== typeof undefined && attr !== false) {
            this_rel = 'general';
        }
        ga('send', 'event', 'phone', 'click', this_rel);
    });

    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            ga('send', 'event', 'window', 'scroll', 'bottom');
        }
    });
});
