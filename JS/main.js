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


    //Open contact&support buttons
    $("dropup_btn").click(function(){
        $("p").toggle();
    });


    //Show booking section information
    $(document).ready(function(){
        $(".heading_booking__paragraph").hide()
            $("#show").click(function(){
                $(".heading_booking__paragraph").fadeToggle("fast");
        });
    });

    //Show journal section information
    $(document).ready(function(){
        $(".heading_journal__paragraph").hide()
        $("#show").click(function(){
          $(".heading_journal__paragraph").fadeToggle("slow");
        });
      });

    
    //Show settings section information
    $(document).ready(function(){
        $("#show").click(function(){
            $(".a-content__settings-main").toggle();
        });
    });


});

