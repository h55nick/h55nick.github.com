

var initheader= $('.header').offset().top;
$(function(){
    $('.curtains').curtain();
    $('#matrix').fadeOut(4000,easing(),function(){$(this).remove();});
     $window = $(window);
     $(window).scroll(scrollr);
     var ah = $('#barrow').offset().top;
     if(ah <= 300  || $(window).width() < 600 ){
        $('#barrow').empty();
     }
     //setupblam();


});

function scrollr(){
        /*$('#matrix').fadeIn(100).fadeOut(400);*/
        var yPos = ($window.scrollTop());
        $('#arrowhold').css("opacity",100/(yPos*60+100));
        console.log($(document).height()-yPos-430);
      if($(document).height()-yPos-440<=0){
        alert("Boom");
      }
}

function easing(x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t===0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*0.3;
    if (a < Math.abs(c)) { a=c; s=p/4; }
    else s = p/(2*Math.PI) * Math.asin (c/a);
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  }

/*function setupblam(){
  $('#projects').on('click','#proj',clickproj);
  $('#projects').on('click','#rd',clickread);
  $('#projects').on('click','#ev',clickevent);

}
function clickproj(e){
  e.preventDefault();
  $('.projects').removeClass('hide');
  $('.reading').addClass('hide');
  $('.events').addClass('hide');
}
function clickread(e){
  e.preventDefault();
  $('.reading').removeClass('hide');
  $('.projects').addClass('hide');
  $('.events').addClass('hide');
}
function clickevent(e){
  e.preventDefault();
  $('.events').removeClass('hide');
  $('.reading').addClass('hide');
  $('.projects').addClass('hide');
}*/



/*
function topnavscroll(yPos){
  tD =  - $(window).scrollTop();
  console.log($('.header').offset().top)
  if(yPos >= initheader ){
   $('.header').css("margin-top", yPos -initheader + "px");
  }
}
*/