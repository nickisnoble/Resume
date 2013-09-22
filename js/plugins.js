$(window).on("scroll resize", function(){
    // if($(window).width() >= 738) {
            // if larger or equal
             var pos = $('#date').offset(); //find #date
			    $('article').each(function(){
			        if(pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top){ //check #date is on article
			            $('#date').html($(this).attr("data-date")); //grep from [data-date]
			            return; //break the loop
			        }
			    });
       //  } else {
       //      var pos = $('header h1').offset(); //find header h1
			    // $('article').each(function(){
			    //     if(pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top){ //check header h1 is on article
			    //         $('header h1').html($(this).attr("data-date")); //grep from [data-date]

			    //         return; //break the loop
			    //     }
			    // });
       //  }
});

$(document).ready(function(){
  $(window).trigger('scroll'); // init the value
});

