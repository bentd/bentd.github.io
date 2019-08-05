$(document).ready(() => {
  var nav = $("nav");
  var main = $("main");
  var main_col = $(".main-col");

  main.css("padding-top", nav.outerHeight().toString() + "px");
  main_col.innerHeight(window.innerHeight - nav.outerHeight());
});
