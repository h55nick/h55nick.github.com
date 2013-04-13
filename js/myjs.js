
/*$('#matrix').fadeOut(4000,easing(),function(){$(this).remove();});*/


var initheader= $('.header').offset().top;
$(function(){
    /*$('body').on('click','#aboutlink', about);
    $('body').on('click','#projectlink', project);
    $('body').on('click','#contactlink', contact);*/
    $('#porthidden').hide();
    $('.reading').hide();
    $('.events').hide();
     $window = $(window);
     $(window).scroll(scrollr);
     var ah = $('#barrow').offset().top;
     if(ah <= 300  || $(window).width() < 600 ){
        $('#barrow').empty();
     }
     setupblam();
});


function scrollr(){
        var yPos = ($window.scrollTop());
        $('#arrowhold').css("opacity",100/(yPos*60+100));
      if($(document).height()-yPos-440<=0){
      }
}

function easing(x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t===0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*0.3;
    if (a < Math.abs(c)) { a=c; s=p/4; }
    else s = p/(2*Math.PI) * Math.asin (c/a);
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  }

function setupblam(){
  $('#projects').on('click','#proj',clickproj);
  $('#projects').on('click','#rd',clickread);
  $('#projects').on('click','#ev',clickevent);

}
function clickproj(e){
  e.preventDefault();
  $('.projects').fadeIn('slow');
  $('.reading').hide();
  $('.events').hide();
  $('#di').animate({"left":"255px"}, "slow");
}
function clickread(e){
  e.preventDefault();
  $('.reading').fadeIn('slow');
  $('.projects').hide();
  $('.events').hide();
  $('#di').animate({"left":"680px"}, "slow");
}
function clickevent(e){
  e.preventDefault();
  $('.events').fadeIn('slow');
  $('.reading').hide();
  $('.projects').hide();
 $('#di').animate({"left":"470px"}, "slow");
}


function about(e) {
  e.preventDefault();
  var position = $('#about').offset().top - 15
/*  $('html, body #about ').animate({scrollBottom: $(document).height()}, 300);*/
/*  $('html, body').animate({scrollTop:position}, 'slow');*/
  alert("Boom- "+ position);
}

function project(e) {
  e.preventDefault();
  var position = $('#projects').parent().offset().top - 15
  $('html, body').animate({scrollTop:position}, 'slow');
}