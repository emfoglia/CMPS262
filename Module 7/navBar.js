$(document).ready(function() {
  hide(); //hide all sections on load
  $("#home").show(); //show homepage on load
  $("#homeBTN").addClass("active"); //home button active on load

  function hide(){ //hide all sections, remove active
    $("#home").hide();
    $("#homeBTN").removeClass("active");

    $("#education").hide();
    $("#educationBTN").removeClass("active");

    $("#API").hide();
    $("#apiBTN").removeClass("active");

    $("#portfolio").hide();
    $("#portfolioBTN").removeClass("active");
  }

  $("#homeBTN").on("click", function(){ // click HOME
    hide();
    $("#home").show();
    $("#homeBTN").addClass("active");
  })
  $("#educationBTN").on("click", function(){ //click EDUCATION
    hide();
    $("#education").show();
    $("#educationBTN").addClass("active");
  })
  $("#apiBTN").on("click", function(){ //click API
    hide();
    $("#API").show();
    $("#apiBTN").addClass("active");
  })
  $("#portfolioBTN").on("click", function(){ //click PORTFOLIO
    hide();
    $("#portfolio").show();
    $("#portfolioBTN").addClass("active");
  })

  $("#flip").click(function(){ //contact info dropdown
    $("#panel").slideToggle("slow");
  })
});
