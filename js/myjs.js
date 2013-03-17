var initheader= $('.header').offset().top;
$(function(){
     $window = $(window);
     $(window).scroll(scrollr);

     if($('#barrow').offset().top < 300){
        $('#arrowhold').remove();
     }

});

function scrollr(){
          var yPos = ($window.scrollTop());
          //topnavscroll(yPos);


        $('#arrowhold').css("opacity",100/(yPos+100));
        if($('#arrowhold').offset().top > 860){
            $('#arrowhold').css("opacity",0);
        }
}

function topnavscroll(yPos){
  tD =  - $(window).scrollTop();
  console.log($('.header').offset().top)
  if(yPos >= initheader ){
   $('.header').css("margin-top", yPos -initheader + "px");
  }


}