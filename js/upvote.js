var Upvote = (function (window, document) {

	that = this;
	
	// endEvent = hasTouch ? 'touchend' : 'mouseup',
	
	Upvote = function (opts) {
	
		that = this;
		
		this.current_category = 'world';
		this.loading_interval_count = 0;
		
		// ---------------------------------------------------------
		// Muench launch
		// ---------------------------------------------------------
				
		// Options from user
		for (i in opts) this.options[i] = opts[i];
		
		// ---------------------------------------------------------
		// Skimmin launch
		// ---------------------------------------------------------
          
          	this.fn_loading_entry();
          	setTimeout(function() {
          		loading_pulse = setInterval(function() {
          			that.fn_loading();
          			that.loading_interval_count += 1;
          		}, 2400);
          	}, 450);
          	setTimeout(function() {
          		this.fn_loading();
          	}, 450);
          	
          
        	$('.upvote-container').on('click', this.fn_tap_upvote.bind(this));
        	$('.category-container').on('click', this.fn_change_category.bind(this));
		
		window.addEventListener('load', function() {
		    FastClick.attach(document.body);
		    if (that.loading_interval_count == 0) {
		    	setTimeout(function() {
		    		that.fn_loading_finish();
		    	}, 7200);
		    }
		    else if (that.loading_interval_count == 1) {
			setTimeout(function() {
		    		that.fn_loading_finish();
		    	}, 4800);
		    }
		    else if (that.loading_interval_count == 2) {
			setTimeout(function() {
		    		that.fn_loading_finish();
		    	}, 2400);
		    }
		    else {
		    	that.fn_loading_finish();	
		    }
		}, false);
		
		this.fn_hide_rendering_icons();
		// this.fn_loading();
       	
    	};
    
	Upvote.prototype = {

		// ------------------------------------------------------
		// Skimmin Core Functions
		// ------------------------------------------------------
        
        	fn_loading_entry: function() {
            
            		$('#L').fadeIn(0);
            		$('#L').addClass('animated zoomIn');
            	
            		setTimeout(function() {
            			$('#O').fadeIn(0);
            			$('#O').addClass('animated zoomIn');	
            		}, 65);
            	
            		setTimeout(function() {
            			$('#A').fadeIn(0);
            			$('#A').addClass('animated zoomIn');	
            		}, 130);
            	
            		setTimeout(function() {
            			$('#D').fadeIn(0);
            			$('#D').addClass('animated zoomIn');	
            		}, 195);
            	
            		setTimeout(function() {
            			$('#I').fadeIn(0);
            			$('#I').addClass('animated zoomIn');	
            		}, 260);
            	
            		setTimeout(function() {
            			$('#N').fadeIn(0);
            			$('#N').addClass('animated zoomIn');	
            		}, 325);
            	
        	 	setTimeout(function() {
            			$('#G').fadeIn(0);
            			$('#G').addClass('animated zoomIn');	
            		}, 390);
            		
        	},
            	
            	fn_loading: function() {
            		
            		$('#loading-container').css('opacity', '.37');
            		$('#loading-container').css('-webkit-transform', 'scale(.98)');
            		
            		setTimeout(function(){
        			$('#loading-container').css('opacity', '1');
        			$('#loading-container').css('-webkit-transform', 'scale(1)');
       			}, 1200);
            		
            	},
            	
            	fn_loading_finish: function() {
        		
        		$('#loading-container').fadeOut(500);
        		// $('#content').fadeIn(1500);
        		$('#content').fadeIn(0);
        		$('#content').addClass('animated slideInUp');
        		clearInterval(loading_pulse);
            	
            	},
        
        	fn_hide_rendering_icons: function() {
        		
        		setTimeout(function() {
        			$('.rendering-container').addClass('display-none');
        		}, 3000);
        	
        	},
        
        	fn_change_category: function(e) {
        	
        		if (this.current_category == 'world') {
        			$('#category-container').removeClass('world')
        			$('#category-container').addClass('us');
        			$('#category-text').html('us');
        			this.current_category = 'us';
        		}
        	
        		else if (this.current_category == 'us') {
        			$('#category-container').removeClass('us')
        			$('#category-container').addClass('sports');
        			$('#category-text').html('sports');
        			this.current_category = 'sports';
        		}
        	
        		else if (this.current_category == 'sports') {
        			$('#category-container').removeClass('sports')
        			$('#category-container').addClass('business');
        			$('#category-text').html('business');
        			this.current_category = 'business';
        		}
        	
        		else if (this.current_category == 'business') {
        			$('#category-container').removeClass('business')
        			$('#category-container').addClass('technology');
        			$('#category-text').html('technology');
        			this.current_category = 'technology';
        		}
        	
        		else if (this.current_category == 'technology') {
        			$('#category-container').removeClass('technology')
        			$('#category-container').addClass('entertainment');
        			$('#category-text').html('entertainment');
        			this.current_category = 'entertainment';
        		}	
        	
        		else {
        			$('#category-container').removeClass('entertainment')
        			$('#category-container').addClass('world');
        			$('#category-text').html('world');
        			this.current_category = 'world';
        		}
        	
        		if ($('.upvote-container').hasClass('upvoted') == true) {
        			$('.upvote-container').removeClass('us world sports business technology entertainment');
        			$('.upvote-text').removeClass('us world sports business technology entertainment');
        			$('.upvote-icon').removeClass('us world sports business technology entertainment');
        			$('.upvote-container').addClass(this.current_category);
        			$('.upvote-text').addClass(this.current_category);
        			$('.upvote-icon').addClass(this.current_category);	
        		}
        
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
