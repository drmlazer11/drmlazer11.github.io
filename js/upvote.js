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
            
        	$('#loading-circle').fadeIn(0);
            	alert('ok');
        	setTimeout(function() {
       			$('body').fadeIn(0);
            	}, 300);
            
            	// $('#loading-circle').addClass('animated bounceIn');
            
            	int_loading_count = 0;
            	arr_colors = Array('rgba(52, 152, 219, 1)', 'rgba(255, 140, 0, 1)', 'rgba(231, 76, 60, 1)', 'rgba(0, 128, 0, .9)', 'rgba(0, 154, 136, .9)', 'rgba(164, 121, 228, 1)');
                      
            	// bool_kill_next_loop = false;
        	
        		pulsing_circle_interval = setInterval(function() {
        		
        			$('#1').css('opacity', '.8');
        		
        			setTimeout(function() {
        				$('#1').css('opacity', '1');
        				$('#2').css('opacity', '.8');
        			}, 100);
        		
        			setTimeout(function() {
        				$('#2').css('opacity', '1');
        				$('#3').css('opacity', '.8');
        			}, 200);
        		
        			setTimeout(function() {
        				$('#3').css('opacity', '1');
        				$('#4').css('opacity', '.8');
        			}, 300);
        		
        			setTimeout(function() {
        				$('#4').css('opacity', '1');
        				$('#5').css('opacity', '.8');
        			}, 400);
        		
        			setTimeout(function() {
        				$('#5').css('opacity', '1');
        				$('#6').css('opacity', '.8');
        			}, 500);
        		
        			setTimeout(function() {
        				$('#6').css('opacity', '1');
        				$('#7').css('opacity', '.75');
        			}, 600);
        		
        			setTimeout(function() {
        				$('#7').css('opacity', '1');
        			}, 700);
        		
        			// $('#loading-circle').css('background-color', arr_colors[int_loading_count]);
        			int_loading_count += 1;
        			if (int_loading_count == 4) {
        				clearInterval(pulsing_circle_interval);
        				setTimeout(function() {
        					// $('#loading-circle').addClass('animated slideOutUp');
        					// $('#loading-circle').fadeOut(300);
        				}, 500);
        				setTimeout(function() {
        					// $('#content').fadeIn(300);
        					// $('#content').addClass('animated slideInUp');
        				}, 750);
        				setTimeout(function() {
        					$('#loading-circle').fadeOut(650);
        					$('#content').fadeIn(650);
        				}, 1200);
        			}
        		}, 1000);
        
        	},	
        
        	fn_reveal_content: function() {
        		
        		alert('ok1');
        		
        		setTimeout(function() {
        			$('body').fadeIn(0);
        			$('body').addClass('animated bounceInUp');
        		}, 300);
        
        	},
        
        	fn_hide_rendering_icons: function() {
        		
        		setTimeout(function() {
        			$('.rendering-container').addClass('display-none');
        		}, 3000);
        	
        	},
        
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
