$(document).ready(function() {

    //ScrollTo
      $( ".scroll" ).on("click", function(event){
          var href = $(this).attr("href");
          $( "html, body" ).animate({scrollTop: $(href).offset().top + "px"});
          event.preventDefault();
      });
});