var coverLetter = (function (window, document) {

	that = this;
	
	// endEvent = hasTouch ? 'touchend' : 'mouseup',
	
	coverLetter = function (opts) {
	
		that = this;
       
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
				$('.animated-introduction-container').addClass('animated fadeOutUp');
				$(".cover-letter-container").fadeIn(0);
				$(".cover-letter-container").addClass('animated fadeInUp');
			}, 3500);

		},

	};

	return coverLetter;

})(window, document);
