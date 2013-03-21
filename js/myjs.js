

var initheader= $('.header').offset().top;
$(function(){
     $window = $(window);
     $(window).scroll(scrollr);
     console.log($('#arrow').offset().top);
     if($('#arrow').offset().top <= 100){
        $('#arrow').empty();
     }

});

function scrollr(){
          var yPos = ($window.scrollTop());
          //topnavscroll(yPos);


        $('#arrowhold').css("opacity",100/(yPos*60+100));

        if(yPos > 200){
           $("#dochart").stop();
            chartit();
        }

}

function topnavscroll(yPos){
  tD =  - $(window).scrollTop();
  console.log($('.header').offset().top)
  if(yPos >= initheader ){
   $('.header').css("margin-top", yPos -initheader + "px");
  }
}




function chartit(){
      //Get context with jQuery - using jQuery's .get() method.
      var ctx = $("#dochart").get(0).getContext("2d");
      //This will get the first returned node in the jQuery collection.

      var data = {
        labels : ["Food","Reading","Dogs","Code","Design","Running"],
        datasets : [
          {
            fillColor : "rgba(151,187,105,0.5)",
            strokeColor : "rgba(151,187,105,1)",
            pointColor : "rgba(151,187,105,1)",
            pointStrokeColor : "#fff",
            data : [60,30,35,46,35,20]
          },
          {
            fillColor : "rgba(151,187,205,0.5)",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            data : [50,40,19,86,27,80]
          }
        ]
      }

      var options = {
        //Boolean - If we show the scale above the chart data
        scaleOverlay : false,
        //Boolean - If we want to override with a hard coded scale
        scaleOverride : false,
        //** Required if scaleOverride is true **
        //Number - The number of steps in a hard coded scale
        scaleSteps : null,
        //Number - The value jump in the hard coded scale
        scaleStepWidth : null,
        //Number - The centre starting value
        scaleStartValue : null,
        //Boolean - Whether to show lines for each scale point
        scaleShowLine : true,
        //String - Colour of the scale line
        scaleLineColor : "rgba(0,0,0,.3)",
        //Number - Pixel width of the scale line
        scaleLineWidth : 1,
        //Boolean - Whether to show labels on the scale
        scaleShowLabels : false,
        //Interpolated JS string - can access value
        scaleLabel : "<%=value%>",
        //String - Scale label font declaration for the scale label
        scaleFontFamily : "'Arial'",
        //Number - Scale label font size in pixels
        scaleFontSize : 12,
        //String - Scale label font weight style
        scaleFontStyle : "normal",
        //String - Scale label font colour
        scaleFontColor : "#000",
        //Boolean - Show a backdrop to the scale label
        scaleShowLabelBackdrop : true,
        //String - The colour of the label backdrop
        scaleBackdropColor : "rgba(255,255,255,0.75)",
        //Number - The backdrop padding above & below the label in pixels
        scaleBackdropPaddingY : 2,
        //Number - The backdrop padding to the side of the label in pixels
        scaleBackdropPaddingX : 2,
        //Boolean - Whether we show the angle lines out of the radar
        angleShowLineOut : true,
        //String - Colour of the angle line
        angleLineColor : "rgba(0,0,0,.8)",
        //Number - Pixel width of the angle line
        angleLineWidth : 1,
        //String - Point label font declaration
        pointLabelFontFamily : "'Crimson Text'",
        //String - Point label font weight
        pointLabelFontStyle : "normal",
        //Number - Point label font size in pixels
        pointLabelFontSize : 18,
        //String - Point label font colour
        pointLabelFontColor : "#333",
        //Boolean - Whether to show a dot for each point
        pointDot : true,
        //Number - Radius of each point dot in pixels
        pointDotRadius : 2,
        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth : 1,
        //Boolean - Whether to show a stroke for datasets
        datasetStroke : true,
        //Number - Pixel width of dataset stroke
        datasetStrokeWidth : 2,
        //Boolean - Whether to fill the dataset with a colour
        datasetFill : true,
        //Boolean - Whether to animate the chart
        animation : true,
        //Number - Number of animation steps
        animationSteps : 600,
        //String - Animation easing effect
        animationEasing : "easeOutQuart",
        //Function - Fires when the animation is complete
        onAnimationComplete : null

      }
      var myNewChart = new Chart(ctx).Radar(data,options);
}

