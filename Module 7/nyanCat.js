$(document).ready(function(){
  // buttons

  $("#show").on("click", function(){ //show nyan cat
    $("#sldr").show();
  })
  $("#hide").on("click", function(){ //hide nyan cat
    $("#sldr").hide();
  })

  //nyan cat animation
  function rgt(){
    $('#sldr').animate({left: screen.width }, 5000, hider);
  }
  rgt();
  function hider() {
    $('#sldr').css('left', '0px');
    rgt();
  }
});
