$(document).ready(function(){
  // Cache the Window object

  $window = $(window);


      $(window).scroll(function() {
          var yPos = -($window.scrollTop());// $bgobj.data('speed'));

            gitscale(yPos);
            linkscale(yPos);
            twitscale(yPos);

    });// window scroll Ends


});


/*
screen: Screen
availHeight: 876
availLeft: 0
availTop: 24
availWidth: 1600
colorDepth: 24
height: 900
pixelDepth: 24
width: 1600
__proto__: Screen
screenLeft: 0
screenTop: 24
screenX: 0
screenY: 24
scrollY: 48
scrollX: 0
*/
function twitscale(yPos){
          var twitvert =  (yPos/8 +350);
          twithor= 120;
          if (twitvert < 350){
            twitvert = -(yPos);
            twithor = yPos/16+120;
            if(twithor <=70){
              twithor =70;
            }
        }
        var sizer = (350/(twitvert^0.5));
        if(sizer>1){
          sizer = 1;
        }else if(sizer<0.5){
          sizer=0.5;
        }else{
          sizer = sizer;
        }
        $('#twithover').css('margin-top', twitvert +'px');
        $('#twithover').css('margin-left', twithor +'px');
        $('#twithover').css("-webkit-transform", 'scale(' + sizer+ ')');
}
function linkscale(yPos){
          var linkvert =  (yPos/4 +250);
          linkhor= 120;
          if (linkvert < 200){
            linkvert = -(yPos) -5 ;
            linkhor = yPos/4+180;
            if(linkhor <=30){
              linkhor =30;
            }
        }
        var sizer = (250/(linkvert^0.5));
        if(sizer>1){
          sizer = 1;
        }else if(sizer<0.5){
          sizer=0.5;
        }else{
          sizer = sizer;
        }
        $('#linkhover').css('margin-top', linkvert +'px');
        $('#linkhover').css('margin-left', linkhor +'px');
        $('#linkhover').css("-webkit-transform", 'scale(' + sizer+ ')');
}


function gitscale(yPos){
          var gitvert =  (yPos +150);
          var githor= 120;
          if (gitvert < 70){
            gitvert = -(yPos) -3 ;
            githor = yPos+220;
            if(githor <=-10){
              githor =-10;
            }
        }
        var sizer = 150/gitvert;
        if(sizer>1){
          sizer = 1;
        }else if(sizer<0.6){
          sizer=0.6;
        }else{
          sizer = sizer;
        }
        $('#githover').css('margin-top', gitvert +'px');
        $('#githover').css('margin-left', githor +'px');
        $('#githover').css("-webkit-transform", 'scale(' + sizer+ ')');
}