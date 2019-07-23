$('nav ul li a').smoothScroll({speed: 800});
$('.logo').smoothScroll({speed: 800});
$('.check-btn').smoothScroll({speed: 800});


$(function() {
var nav = $("nav");

$(window).scroll(function() {
   var scroll = $(window).scrollTop();
   if (scroll >= 80) {
       nav.addClass("scrolled");
   } else {
       nav.removeClass("scrolled");
   }
 });
});


$(window).scroll(function(){
 parallax();
})
function parallax(){
 var wScroll = $(window).scrollTop();

 $('.home-section').css('background-position', 'center ' + (-wScroll * 0.5) + 'px')
};


$(document).ready(function(){
 $('.bar').click(function() {
     $('nav').slideToggle(500);
 });
});

$(document).ready(function() {
  
    var scrollLink = $('.scroll');
    
    // Active link switching
    $(window).scroll(function() {
      var scrollBarLocation = $(this).scrollTop();
      
      scrollLink.each(function() {
        
        var sectionOffset = $(this.hash).offset().top - 20;
        
        if ( sectionOffset <= scrollBarLocation ) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      })
      
    })
    
  })