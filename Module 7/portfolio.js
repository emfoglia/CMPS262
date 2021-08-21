$(document).ready(function(){
  $("#WordPress").hide(); // Hide WordPress on page load
  $("#discordbtn").click(function(){ //Discord Button
    $("#WordPress").fadeOut(600, function () {
    $("#WordPress").hide();
    $("#DiscordBot").fadeIn(600);
    });
  });
  $("#wordpressbtn").click(function(){ //WordPress Button
    $("#DiscordBot").fadeOut(600, function () {
      $("#DiscordBot").hide();
      $("#WordPress").fadeIn(600);
    });
  });
});
