
console.log("Welcome to my page! -Kenny");

$( document ).ready(function() {

  $('a[href*=\\#]').on('click', function(event){
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
  });

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  $(function() {
    $(document).scroll(function() {
      var x = $(this).scrollTop(),
        $nav = $(".navbar-fixed-top");
      if (x > 3400) {
        $nav.removeClass('scrolled');
      }
    });
  });

});
