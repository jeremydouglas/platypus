  $(function() {

    $('a[href^="tel"]').on('click', function() {
      this_rel = $(this).attr('rel');
      ga('send', 'event', 'phone', 'click', this_rel);
    });

    $(window).scroll(function() {
       if($(window).scrollTop() + $(window).height() == $(document).height()) {
           ga('send', 'event', 'scroll-to-bottom', 'Page: 'window.location.href, 'Page height: '$(document).height());
       }
    });
  });