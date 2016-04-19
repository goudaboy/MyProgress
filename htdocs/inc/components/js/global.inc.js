$( document ).ready(function() {
	$('.mainmenu__list-item:not(.nochild)').hover( function () {
		$('.mainmenu').toggleClass('hover');
		$(this).children('ul').toggleClass('hover');
	});

	// Run scrollController on scroll
    $(window).scroll(function () { 

    	var Hello = $(this).scrollTop();

    	if(Hello > $('#topmenu').height()){
			$('header').addClass('sticky');
    	}else{
    		$('header').removeClass('sticky');
    	}

    });
});