var Upvote = (function (window, document) {

    that = this;
	
	// endEvent = hasTouch ? 'touchend' : 'mouseup',
	
	Upvote = function (opts) {
	
	    that = this;
		
		this.current_category = 'us';
		
		// ---------------------------------------------------------
		// Muench launch
		// ---------------------------------------------------------
				
		// Options from user
		for (i in opts) this.options[i] = opts[i];
		
		// ---------------------------------------------------------
		// Skimmin launch
		// ---------------------------------------------------------
          
        $('.upvote-container').on('click', this.fn_tap_upvote.bind(this));
        $('.category-container').on('click', this.fn_change_category.bind(this));
		
		window.addEventListener('load', function() {
		    FastClick.attach(document.body);
		}, false);
       
    };
    
	Upvote.prototype = {

		// ------------------------------------------------------
		// Skimmin Core Functions
		// ------------------------------------------------------
        
        fn_change_category: function(e) {
        	
        	space_index = e.target.className.lastIndexOf(" ");
        	category_class = e.target.className.substr(space_index);
        	
        	category_class = category_class.slice(1);
        	
        	$('.selected').toggleClass('selected');
        	$('.category-container.' + category_class).toggleClass('selected');
        	
        	// $('.category-container.' + category_class).addClass('selected');
        	
        	if ($('.upvote-container').hasClass('upvoted') == true) {
        		$('.upvote-container').removeClass(this.current_category);
        		$('.upvote-text').removeClass(this.current_category);
        		$('.upvote-icon').removeClass(this.current_category);
        		
        		$('.upvote-container').addClass(category_class);
        		$('.upvote-text').addClass(category_class);
        		$('.upvote-icon').addClass(category_class);
        		
        	}
        	
        	this.current_category = category_class;
        
        },
        
        
		fn_tap_upvote: function() {
			
			if ($('.upvote-container').hasClass('upvoted') == true) {
			
				$('.upvote-container').removeClass('upvoted');
				
				setTimeout(function() {
        			$('.upvote-container').removeClass('tapped us world sports business technology entertainment');
        			$('.upvote-text').removeClass('us world sports business technology entertainment');
        			$('.upvote-text').html(30);
        			$('.upvote-icon').removeClass('us world sports business technology entertainment');
        		}, 300);
        	}
			else {
				
				$('.upvote-container').addClass('upvoted');
    			setTimeout(function() {
        			$('.upvote-container').addClass('tapped ' + that.current_category);
        			$('.upvote-text').addClass(that.current_category);
        			$('.upvote-text').html(31);
        			$('.upvote-icon').addClass(that.current_category);
    			}, 300);
			}
		
		},
		
	};

	return Upvote;

})(window, document);		
