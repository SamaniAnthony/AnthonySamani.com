//toggle between the removing and adding  "responsive"
// to class traditional-navigation-bar when user clicks the icon
function mobileMenu() {
  var i = document.getElementById("myTopnav");

  if(i.className === "traditional-navigation-bar"){
      i.className += " responsive";
  } else {
      i.className="traditional-navigation-bar"
  }
};
