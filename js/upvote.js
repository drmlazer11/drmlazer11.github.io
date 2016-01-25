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
        	
        	hyphen_index = e.target.id.indexOf("-");
        	element_id = e.target.id.substr(0, hyphen_index);
        	
        	if (element_id == this.current_category) {
        		return;
        	}
        	
        	$('#' + element_id + '-container').addClass('selected');
        	$('#' + this.current_category + '-container').removeClass('selected');
        	
        	if ($('.upvote-container').hasClass('upvoted') == true) {
        		$('.upvote-container').removeClass(this.current_category);
        		$('.upvote-text').removeClass(this.current_category);
        		$('.upvote-icon').removeClass(this.current_category);
        		$('.upvote-container').addClass(element_id);
        		$('.upvote-text').addClass(element_id);
        		$('.upvote-icon').addClass(element_id);	
        	}
        	
        	this.current_category = element_id;
        
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
