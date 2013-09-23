$(window).on("scroll resize", function(){
    var pos = $('#date').offset(); //find #date
		$('article').each(function(){
			if(pos.top >= $(this).offset().top && pos.top <= $(this).next().offset().top){ //check #date is on article
				$('#date').html($(this).attr("data-date")); //grep from [data-date]
				return; //break the loop
			}
		});
});

$(document).ready(function(){
	$(window).trigger('scroll'); // init the value for scroll
});

(function(){
	$("a.social-link").mouseenter(function(){
		var socialClass = $(this).attr("class").replace('social-link','');
		$('footer').addClass(socialClass);
	});
	$("a.social-link").mouseleave(function(){
		$('footer').removeClass();
	});
})($);