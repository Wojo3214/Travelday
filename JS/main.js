$(document).ready(function(){

    //Slide right mobile navigation
    $(".c-content__button-nav").click(function(){
        console.log('we have a click now.');
        let distance = $(".nav").css("left");
        if(distance === "-1000px"){
            $(".nav").animate({left: "0px"}, 200);
        } else {
            $(".nav").animate({left: "-1000px"}, 200);
        };
    });

    //Counting days left to upcoming trip 
    var today = new Date();
    var upcomingTrip = new Date(today.getFullYear(),05,20);

    if(today.getMonth()==05 && today.getDate()>02){
        upcomingTrip.setFullYear(upcomingTrip.getFullYear()+1);
    }
    var oneDay = 1000*60*60*24;
    var score = Math.ceil((upcomingTrip.getTime()-today.getTime())/(oneDay));

    if(score < 0){
        $(".c-content__days-left__num").text("0");
    }   else {
        $(".c-content__days-left__num").text(score);
    }
    

    //Current year in rights in nav
    var date = new Date();
    var currentYear = date.getFullYear();
    $(".nav__rights__date").append(currentYear);

    //Dashboard opening and closing achievements popup
    $(".c-content__achievements-container").hide();
    $(".c-content__achievements-container__bgimg").hide();
    
    $("#show").click(function(){
      $(".c-content__achievements-container").fadeToggle("fast");
      $(".c-content__achievements-container__bgimg").fadeToggle("fast");
      
    });

    $("#close").click(function(){
      $(".c-content__achievements-container").fadeToggle("fast");
      $(".c-content__achievements-container__bgimg").fadeToggle("fast");
    });


    //Open contact&support buttons
    $("dropup_btn").click(function(){
        $("p").toggle();
    });


    //Show booking section information
    
    $(".heading_booking__paragraph").hide()
        $("#show").click(function(){
            $(".heading_booking__paragraph").fadeToggle("fast");
    });

    //Show feed section information
    
    $(".heading_feed__paragraph").hide()
        $("#show").click(function(){
            $(".heading_feed__paragraph").fadeToggle("fast");
    });
    

    //Show journal section information
    
    $(".heading_journal__paragraph").hide()
    $("#show").click(function(){
        $(".heading_journal__paragraph").fadeToggle("slow");
    });
     
    
    //Show settings section information
    $("#show").click(function(){
        $(".a-content__settings-main").toggle();
    });


    //Open support button
    $(".s-content__support").hide()
    $(".btn1").click(function(){
        $(".support1").slideToggle("slow");
    });

    $(".s-content__support").hide()
    $(".btn2").click(function(){
        $(".support2").slideToggle("slow");
    });

    $(".s-content__support").hide()
    $(".btn3").click(function(){
        $(".support3").slideToggle("slow");
    });

    $(".s-content__support").hide()
    $(".btn4").click(function(){
        $(".support4").slideToggle("slow");
    });

    $(".s-content__support").hide()
    $(".btn5").click(function(){
        $(".support5").slideToggle("slow");
    });

    $(".s-content__support").hide()
    $(".btn6").click(function(){
        $(".support6").slideToggle("slow");
    });

    $(".s-content__support").hide()
    $(".btn7").click(function(){
        $(".support7").slideToggle("slow");
    });

    $(".s-content__support").hide()
    $(".btn8").click(function(){
        $(".support8").slideToggle("slow");
    });
    
    //Follow&Unfollow
    $(".f-content__also-like__follow").each(function(){
        $(".f-content__also-like__follow").click(function(){
            var follow = $(this).text("Unfollow");         
        });
    });

    //My booking popup hidden from the beggining
    $(".g-content__booking__popup").hide();
    $(".g-content__booking__popup__background").hide();

    //My booking popup open
    $(".g-content__post__tickets__button").click(function(){
        $(".g-content__booking__popup").fadeToggle("fast");
        $(".g-content__booking__popup__background").fadeToggle("fast");
    });

    //My booking popup close
    $("#close").click(function(){
        $(".g-content__booking__popup").fadeToggle("fast");
        $(".g-content__booking__popup__background").fadeToggle("fast");
    });

    //My booking popup close on "submit"
    $("#submit").click(function(){
        $(".g-content__booking__popup").fadeToggle("fast");
        $(".g-content__booking__popup__background").fadeToggle("fast");
    });

    //My jouranl popup hidden from the beggining
    $(".z-content__journal__popup").hide();
    $(".z-content__journal__popup__background").hide();

    //My journal popup open
    $(".z-content__post__info__button").click(function(){
        $(".z-content__journal__popup").fadeToggle("fast");
        $(".z-content__journal__popup__background").fadeToggle("fast");
    });

    //My journal popup close
    $("#close").click(function(){
        $(".z-content__journal__popup").fadeToggle("fast");
        $(".z-content__journal__popup__background").fadeToggle("fast");
    });

    //My journal popup close on "submit"
    $("#submit").click(function(){
        $(".z-content__journal__popup").fadeToggle("fast");
        $(".z-content__journal__popup__background").fadeToggle("fast");
    });

});

