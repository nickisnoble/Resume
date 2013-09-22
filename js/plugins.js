$(window).on("scroll resize", function(){
    var pos = $('#date').offset(); //find #date
    $('article').each(function(){
        if(pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top){ //check #date is in between articles
            $('#date').html($(this).attr("data-date")); //grep from [data-date]
            return; //break the loop
        }
    });
});

$(document).ready(function(){
  $(window).trigger('scroll'); // init the value
});

