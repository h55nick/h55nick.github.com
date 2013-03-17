$(document).ready(function(){
  // Cache the Window object

  $window = $(window);



$('#block1').css('height',screen.availHeight);

      $(window).scroll(function() {
          var yPos = -($window.scrollTop());// $bgobj.data('speed'));

            $('#arrow').css({
              opacity: 50/-yPos
            });
            $('#block2').css('margin-top',yPos*0.50);
            gitscale(yPos);
            linkscale(yPos);
            twitscale(yPos);

    });// window scroll Ends


});

function twitscale(yPos){
          var twitvert =  ( -yPos/3 +350);
          twithor= 120;
          if (twitvert > 530){
            twitvert = -(yPos);
            twithor = yPos/8+150;
            if(twithor <=68){
              twithor =68;
            }
        }
        var sizer = (350/(twitvert));
        if(sizer>1){
          sizer = 1;
        }else if(sizer<0.5){
          sizer=0.5;
        }else{
          sizer = sizer;
        }
        console.log(yPos);
        $('#twithover').css('margin-top', twitvert +'px');
        $('#twithover').css('margin-left', twithor +'px');
        $('#twithover').css("-webkit-transform", 'scale(' + sizer+ ')');
}
function linkscale(yPos){

          var linkvert =  ( -yPos/8 +250);
          linkhor= 120;
          if (linkvert > 285){
            linkvert = -(yPos)-2;
            linkhor = yPos/6+125;
            if(linkhor <=30){
              linkhor =30;
            }
        }
        var sizer = (300/(linkvert));
        if(sizer>1){
          sizer = 1;
        }else if(sizer<0.5){
          sizer=0.5;
        }else{
          sizer = sizer;
        }
        console.log(yPos);
        $('#linkhover').css('margin-top', linkvert +'px');
        $('#linkhover').css('margin-left', linkhor +'px');
        $('#linkhover').css("-webkit-transform", 'scale(' + sizer+ ')');
}


function gitscale(yPos){
          var gitvert =  (yPos +150);
          var githor= 120;
          if (gitvert < 70){
            gitvert = -(yPos) -3 ;
            githor = yPos/2+165;
            if(githor < -10){
              githor = -10;
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