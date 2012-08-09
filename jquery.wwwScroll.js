$('a[href*=#]').bind("click", function(event) {
  event.preventDefault();
  var ziel = $(this).attr("href");
    $('html,body').animate({
      scrollTop: $(ziel).offset().top
    }, 2000 , function (){location.hash = ziel;});
});