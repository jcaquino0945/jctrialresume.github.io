
/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
/*
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.100)";
  } else {
    document.getElementById("navbar").style.top = "-140px";
  }
  prevScrollpos = currentScrollPos;
}
*/
//code below is for hiding nav bar on scroll down
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.padding = "10px 0px 10px 0px";
    document.getElementById("logo").style.fontSize = "1.5em";
    document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.750)";

      
  }else {
    document.getElementById("navbar").style.top = "-500px";
      
  }
  prevScrollpos = currentScrollPos;
}
/*
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("logo").style.fontSize = "1.5em";
    document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.750)";
    document.getElementById("navz").style.display="block";
    
  } else {
    document.getElementById("navz").style.display="none";
    
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("logo").style.fontSize = "2em";
    document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0)";
    
   
  }
}
*/ /* CODE DOESNT WORK LOL. DAPAT MAG SHRINK NAVBAR ON CLICK SA A LINKS
$('.navbar').on('click', 'a', function() {
  $('.nav-link').triggerHandler('tap');
});
*/

//AOS
AOS.init({
  easing: 'ease-in-quad',
});