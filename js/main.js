$(document).ready(function(){

	//initialize dom reading variables
	var $window = $(window),
		$home = $('.home'),
		$nav = $('nav'),
		$htmlbody = $('html,body'),
		$homeLink = $('.link-home');
		smallWindow = $window.innerWidth() <= 1050;

	if(!smallWindow){
		//set main background to viewport height
		$home.css('height',$window.innerHeight()-85);

		$(window).resize(function(){
			if(!smallWindow){ $home.css('height',$window.innerHeight()-85); }
		});

	}

	//link scrolling functionality
	$homeLink.click(function(e){
		e.preventDefault();
		$htmlbody.animate({scrollTop: 0}, 800);
	});

	$nav.click(function(e){

		switch (e.target.className){
			case "link-announce":
				e.preventDefault();
				$htmlbody.animate({scrollTop: $('.announcement').offset().top}, 800);
				break;

			case "link-party":
				e.preventDefault();
				$htmlbody.animate({scrollTop: $('.party').offset().top}, 1000);
				break;

			case "link-info":
				e.preventDefault();
				$htmlbody.animate({scrollTop: $('.info').offset().top}, 800);
				break;

			default: break;
		}

	});

});