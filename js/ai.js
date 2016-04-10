var Ai = (function (window, document) {

    that = this;
		
	Ai = function (opts) {
	
	    that = this;

	    window.addEventListener('load', function() {
		    FastClick.attach(document.body);
		}, false);

		$('#insta-like-text').on('click', this.fn_tap_insta_like.bind(this));

		this.fn_animation();

    };
    
	Ai.prototype = {

		// "Patience, Kimosabi" Function
		fn_tap_insta_like: function() {
			$('#insta-like').html('Coming soon! Patience, Kimosabi...');
		},

		// On load animation
		fn_animation: function() {
			
			setTimeout(function() {
				$('.left-lining').css('-webkit-transform', 'translateY(12rem)');
				$('.right-lining').css('-webkit-transform', 'translateY(-12rem)');
			}, 500);
			
			setTimeout(function() {
				$('.seeking-text').fadeIn(0);
				$('.seeking-text').addClass('animated slideInLeft');
				$('.knowledge-text').fadeIn(0);
				$('.knowledge-text').addClass('animated slideInRight');
			}, 1500);

			setTimeout(function() {
				$('.seeking-text').addClass('animated slideOutLeft');
				$('.knowledge-text').addClass('animated slideOutRight');
			}, 9000);

			setTimeout(function() {
				$('.left-lining').css('-webkit-transition', '-webkit-transform 1s');
				$('.left-lining').css('-webkit-transform', 'translateY(-12rem)');
				$('.right-lining').css('-webkit-transition', '-webkit-transform 1s');
				$('.right-lining').css('-webkit-transform', 'translateY(12rem)');
			}, 9800);

			setTimeout(function() {
				$('.seeking-text').fadeOut(0);
				$('.seeking-text').removeClass('animated slideOutLeft slideInLeft');
				$('.knowledge-text').fadeOut(0);
				$('.knowledge-text').removeClass('animated slideOutRight slideInRight');
			}, 10000);

			setTimeout(function() {
				$('.top-tv-screen').fadeIn(0);
				$('.top-tv-screen').addClass('animated slideInDown');
				$('.bottom-tv-screen').fadeIn(0);
				$('.bottom-tv-screen').addClass('animated slideInUp');
			}, 10600);

			setTimeout(function() {
				$('.top-tv-screen').fadeOut(0);
				$('.bottom-tv-screen').fadeOut(0);
				$('.info-container').fadeIn(0);
				$('#large-header').remove();
			}, 11550);

			setTimeout(function() {
				$('.menu-container').fadeIn(0);
				$('.menu-container').addClass('animated fadeInLeft');
			}, 11550);

		}
		
	};

	return Ai;

})(window, document);		
