$(function(){$('a[href^="tel"]').on("click",function(){var t=$(this).data("location");"undefined"!=typeof attr&&attr!==!1&&(t="general"),ga("send","event","phone","click",t)}),$('a[href^="mailto"]').on("click",function(){var t=$(this).data("location");"undefined"!=typeof attr&&attr!==!1&&(t="general"),ga("send","event","phone","click",t)});var t=0;$(window).scroll(function(){$(window).scrollTop()+$(window).height()==$(document).height()&&(0==t&&ga("send","event","scroll-to-bottom","Page: "+window.location.href,"Page height: "+$(document).height()),t=1)})});