$(document).ready(function() {

  $("#submit").on('click', function() {

    var name = $("#name");
    var email = $("#email");
    var message = $("#message");
    var phone = $("#phone");

    var required = [name, email, phone];

    for (var i = 0; i < required.length; i++) {
      if (required[i].val() === "") {
        $(message).text("Please Fill Out Required Fields").addClass(
          'warning');
        required[i].prev().addClass('warning');
      } else {
        required[i].prev().removeClass('warning');
      }
    }

    if (!$("#form label").hasClass('warning')) {
      $("#form")[0].remove();
      $("#pre-form h2").text("Thanks for your feedback!")
    }

  });
});
//Animate fade out
$('#box').fadeOut();

//Animate fadeIn
$('#box').fadeIn();

//Slide and remove element
$('#box').slideUp('slow');

// Custom effects with .animate()
$( "#box" ).animate(

  //properties to animate
  {opacity: 0.25},

    // Duration
    300,

    // Callback to invoke when the animation is finished
    function() {
        console.log( "done!" );
    }
);

$.fn.greenify = function() {
    this.css( "color", "green" );
};

$( "a" ).greenify();
