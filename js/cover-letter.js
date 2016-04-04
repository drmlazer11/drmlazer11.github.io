var coverLetter = (function (window, document) {

    that = this;
	
	// endEvent = hasTouch ? 'touchend' : 'mouseup',
	
	coverLetter = function (opts) {
	
	    that = this;
				
		this.int_refresh = 180;
        
		window.addEventListener('load', function() {
		    FastClick.attach(document.body);
		}, false);
       
      	this.fn_reveal_cover_letter();

    };
    
	coverLetter.prototype = {

		fn_reveal_cover_letter: function() {
				
			$(".sbd").fadeIn(0);
			$(".plus").fadeIn(0);
			$(".drm").fadeIn(0);
			$(".sbd").addClass('animated fadeInRight');
			$(".plus").addClass('animated fadeInLeft');
			$(".drm").addClass('animated fadeInRight');

			setTimeout(function() {
				$('.animated-introduction-container').addClass('animated fadeOutUpBig');
				$(".cover-letter-container").fadeIn(0);
				$(".cover-letter-container").addClass('animated fadeInUpBig');
			}, 3500);

		},

	};

	return coverLetter;

})(window, document);
