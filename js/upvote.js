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
		
		this.fn_hide_rendering_icons();
		this.fn_loading();
       		this.fn_reveal_content();
       	
    	};
    
	Upvote.prototype = {

		// ------------------------------------------------------
		// Skimmin Core Functions
		// ------------------------------------------------------
       
        
        	// primarily used to hide slow rendering
        	fn_loading: function() {
            	
            	that = this;
            
            	/*$('#L').fadeIn(0);
            	$('#L').addClass('animated zoomIn');
            	
            	setTimeout(function() {
            		$('#O').fadeIn(0);
            		$('#O').addClass('animated zoomIn');	
            	}, 75);
            	
            	setTimeout(function() {
            		$('#A').fadeIn(0);
            		$('#A').addClass('animated zoomIn');	
            	}, 150);
            	
            	setTimeout(function() {
            		$('#D').fadeIn(0);
            		$('#D').addClass('animated zoomIn');	
            	}, 225);
            	
            	setTimeout(function() {
            		$('#I').fadeIn(0);
            		$('#I').addClass('animated zoomIn');	
            	}, 300);
            	
            	setTimeout(function() {
            		$('#N').fadeIn(0);
            		$('#N').addClass('animated zoomIn');	
            	}, 375);
            	
            	setTimeout(function() {
            		$('#G').fadeIn(0);
            		$('#G').addClass('animated zoomIn');	
            	}, 450);*/
            	
            	/*setTimeout(function() {
            		$('#loading-container').addClass('animated pulse');
            	}, 1500);*/
            	
            	/*setTimeout(function() {
            		$('#L').removeClass('animated zoomIn');
            		$('#O').removeClass('animated zoomIn');	
            		$('#A').removeClass('animated zoomIn');	
            		$('#D').removeClass('animated zoomIn');	
            		$('#I').removeClass('animated zoomIn');	
            		$('#N').removeClass('animated zoomIn');	
            		$('#G').removeClass('animated zoomIn');	
            	}, 1500);*/
            
            	int_loading_count = 0;
            	arr_colors = Array('rgba(52, 152, 219, 1)', 'rgba(255, 140, 0, 1)', 'rgba(231, 76, 60, 1)', 'rgba(0, 128, 0, .9)', 'rgba(0, 154, 136, .9)', 'rgba(164, 121, 228, 1)');
                      
            	// bool_kill_next_loop = false;
        	
        		// $('#loading-circle').addClass('animated pulse');
        	
        	pulsing_circle_interval = setInterval(function() {
        			
        			/*$('#L').fadeOut(300);
        			$('#O').fadeOut(300);
        			$('#A').fadeOut(300);
        			$('#D').fadeOut(300);
        			$('#I').fadeOut(300);
        			$('#N').fadeOut(300);
        			$('#G').fadeOut(300);*/
        			
        			if (int_loading_count == 0 || int_loading_count == 1 || int_loading_count == 2 || int_loading_count == 3) {
        			
        				$('#L').fadeIn(0);
            				// $('#L').addClass('animated zoomIn');
            	
            				setTimeout(function() {
            					$('#O').fadeIn(0);
            					// $('#O').addClass('animated zoomIn');	
            				}, 75);
            	
            				setTimeout(function() {
            					$('#A').fadeIn(0);
            					// $('#A').addClass('animated zoomIn');	
            				}, 150);
            	
            				setTimeout(function() {
            					$('#D').fadeIn(0);
            					// $('#D').addClass('animated zoomIn');	
            				}, 225);
            	
            				setTimeout(function() {
            					$('#I').fadeIn(0);
            					// $('#I').addClass('animated zoomIn');	
            				}, 300);
            	
            				setTimeout(function() {
            					$('#N').fadeIn(0);
            					// $('#N').addClass('animated zoomIn');	
            				}, 375);
            	
            				setTimeout(function() {
            					$('#G').fadeIn(0);
            					// $('#G').addClass('animated zoomIn');	
            				}, 450);
        			
        				/*setTimeout(function() {
        					$('#L').removeClass('animated zoomIn');
        					$('#O').removeClass('animated zoomIn');
        					$('#A').removeClass('animated zoomIn');
        					$('#D').removeClass('animated zoomIn');
        					$('#I').removeClass('animated zoomIn');
        					$('#N').removeClass('animated zoomIn');
        					$('#G').removeClass('animated zoomIn');
        				}, 1000);
        			
        				setTimeout(function(){
        					$('#L').addClass('animated zoomOut');
        					$('#O').addClass('animated zoomOut');
        					$('#A').addClass('animated zoomOut');
        					$('#D').addClass('animated zoomOut');
        					$('#I').addClass('animated zoomOut');
        					$('#N').addClass('animated zoomOut');
        					$('#G').addClass('animated zoomOut');
        				}, 1700);*/
        				
        				/*$('#L').css('-webkit-transform', 'translateY(-5px)');
        				setTimeout(function() {
        					$('#L').css('-webkit-transform', 'translateY(0px)');
        				}, 300);
        				
        				
        				setTimeout(function() {
        					$('#O').css('-webkit-transform', 'translateY(-5px)');
        				}, 100);
        				setTimeout(function() {
        					$('#O').css('-webkit-transform', 'translateY(0px)');
        				}, 400);
        				
        				setTimeout(function() {
        					$('#A').css('-webkit-transform', 'translateY(-5px)');
        				}, 200);
        				setTimeout(function() {
        					$('#A').css('-webkit-transform', 'translateY(0px)');
        				}, 500);
        				
        				setTimeout(function() {
        					$('#D').css('-webkit-transform', 'translateY(-5px)');
        				}, 300);
        				setTimeout(function() {
        					$('#D').css('-webkit-transform', 'translateY(0px)');
        				}, 600);
        				
        				setTimeout(function() {
        					$('#I').css('-webkit-transform', 'translateY(-5px)');
        				}, 400);
        				setTimeout(function() {
        					$('#I').css('-webkit-transform', 'translateY(0px)');
        				}, 700);
        				
        				setTimeout(function() {
        					$('#N').css('-webkit-transform', 'translateY(-5px)');
        				}, 500);
        				setTimeout(function() {
        					$('#N').css('-webkit-transform', 'translateY(0px)');
        				}, 800);
        				
        				setTimeout(function() {
        					$('#G').css('-webkit-transform', 'translateY(-5px)');
        				}, 600);
        				setTimeout(function() {
        					$('#G').css('-webkit-transform', 'translateY(0px)');
        				}, 900);*/
        				
        				setTimeout(function() {
        					$('#L').fadeOut(0);
        				}, 1000);
        				setTimeout(function() {
        					$('#O').fadeOut(0);
        				}, 1075);
        				setTimeout(function() {
        					$('#A').fadeOut(0);
        				}, 1150);
        				setTimeout(function() {
        					$('#D').fadeOut(0);
        				}, 1225);
        				setTimeout(function() {
        					$('#I').fadeOut(0);
        				}, 1300);
        				setTimeout(function() {
        					$('#N').fadeOut(0);
        				}, 1375);
        				setTimeout(function() {
        					$('#G').fadeOut(0);
        				}, 1450);
        			}
        			
        			/*if (int_loading_count == 0 || int_loading_count == 2 || int_loading_count == 4 || int_loading_count == 6 || int_loading_count == 8) {
        				$('#L').css('opacity', '0');
        				$('#O').css('opacity', '0');
        				$('#A').css('opacity', '0');
        				$('#D').css('opacity', '0');
        				$('#I').css('opacity', '0');
        				$('#N').css('opacity', '0');
        				$('#G').css('opacity', '0');
        			}
        			else {
        				$('#L').css('opacity', '1');
        				$('#O').css('opacity', '1');
        				$('#A').css('opacity', '1');
        				$('#D').css('opacity', '1');
        				$('#I').css('opacity', '1');
        				$('#N').css('opacity', '1');
        				$('#G').css('opacity', '1');	
        			}*/
        			
        			// $('#L').addClass('zoomOut');
        			/*$('#L').css('opacity', '.7');
        			
        			
        			setTimeout(function() {
        				// $('#O').addClass('zoomOut');
        				$('#L').css('opacity', '1');
        				$('#O').css('opacity', '.7');
        			}, 75);
        			
        			setTimeout(function() {
        				$('#O').css('opacity', '1');
        				$('#A').css('opacity', '.7');
        			}, 150);
        			
        			setTimeout(function() {
        				$('#A').css('opacity', '1');
        				$('#D').css('opacity', '.7');
        			}, 225);
        			
        			setTimeout(function() {
        				$('#D').css('opacity', '1');
        				$('#I').css('opacity', '.7');
        			}, 300);
        			
        			setTimeout(function() {
        				$('#I').css('opacity', '1');
        				$('#N').css('opacity', '.7');
        			}, 375);
        			
        			setTimeout(function() {
        				$('#N').css('opacity', '1');
        				$('#G').css('opacity', '.7');
        			}, 450);*/
        		
        			// $('#loading-circle').css('background-color', arr_colors[int_loading_count]);
        			int_loading_count += 1;
        			if (int_loading_count == 4) {
        				clearInterval(pulsing_circle_interval);
        				setTimeout(function() {
        					// $('#loading-container').addClass('animated slideOutUp');
        					$('#loading-container').fadeOut(300);
        				}, 500);
        				setTimeout(function() {
        					$('#content').fadeIn(0);
        					$('#content').addClass('animated bounceInUp');
        					// $('#content').addClass('animated slideInUp');
        				}, 750);
        			}
        			
        			/*setTimeout(function() {
        				$('#loading-circle').css('opacity', '1');
        			}, 500);*/
        			
        		}, 1800);
        
        	},	
        
        	fn_reveal_content: function() {
        		
        		/*setTimeout(function() {
        			$('#loading-circle').addClass('animated zoomOut');
        			$('#content').addClass('animated slideInUp');
        		}, 300);*/
        
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
