$( document ).ready(function() {
	$('.mainmenu__list-item').hover(function () {
		$(this).children('ul').stop(true, false, true).slideToggle(300);
	});

	// Run scrollController on scroll
    $(window).scroll(function () { 

    	var Hello = $(this).scrollTop();

    	if(Hello > 100){
			$('header').addClass('sticky');
    	}else{
    		$('header').removeClass('sticky');
    	}

    });
});