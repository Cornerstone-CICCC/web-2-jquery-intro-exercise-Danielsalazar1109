$(function() {
  const toggle=$("#toggleButton");
  const color=$("#colorButton");
  const addclass=$("#addClassButton");
  const removeclass=$("#removeClassButton");
  const fadein=$("#fadeInButton");
  const fadeout=$("#fadeOutButton");
  const slideup=$("#slideUpButton");
  const slidedown=$("#slideDownButton");

  toggle.click(function(){
    $("#myParagraph").toggle();
  });
  color.click(function(){
    $("#colorDiv").css("background-color", "yellow");
  });
  addclass.click(function(){
    $("#classDiv").addClass("newClass");
  });
  removeclass.click(function(){
    $("#classDiv").removeClass("newClass");
  });
  fadein.click(function(){
    $("#fadeDiv").fadeIn();
  });
  fadeout.click(function(){
    $("#fadeDiv").fadeOut();
  });
  slideup.click(function(){
    $("#slideDiv").slideUp();
  });
  slidedown.click(function(){
    $("#slideDiv").slideDown();
  });
  
})