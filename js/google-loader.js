var Google_Loader = (function (window, document) {

	that = this;
	
	Google_Loader = function (opts) {
        
        	this.current_loop = 0;
        
        	window.addEventListener('load', function() {
			FastClick.attach(document.body);
		}, false);
		
		this.fn_loading_screen_animation();
		
		$('.replay-message-button').on('click', this.fn_replay.bind(this));

	};

	Google_Loader.prototype = {

		// ------------------------------------------------------
		// Skimmin Core Functions
		// ------------------------------------------------------
        
        	fn_replay: function() {
        	
        		$('.replay-message-button').removeClass('animated bounceIn');
        		$('.replay-message-button').addClass('animated rotateOut');
        	
        		setTimeout(function() {
        			$('.replay-message-button').fadeOut(0);
        			$('.replay-message-button').removeClass('animated rotateOut');
        		}, 0);
        	
        		loading_circles = '<div id="loading-circle-1" class="display-none">' +
					'<div id="loading-inner-circle-1" class="loading-inner-circle display-none"></div>' +
					'<div id="loading-inner-circle-11" class="loading-inner-circle display-none"></div>' +
				'</div>' +
				'<div id="loading-circle-2" class="display-none">' +
					'<div id="loading-inner-circle-2" class="loading-inner-circle display-none"></div>' +
					'<div id="loading-inner-circle-22" class="loading-inner-circle display-none"></div>' +
				'</div>' +
				'<div id="loading-circle-3" class="display-none">' +
					'<div id="loading-inner-circle-3" class="loading-inner-circle display-none"></div>' +
					'<div id="loading-inner-circle-33" class="loading-inner-circle display-none"></div>' +
				'</div>' +
				'<div id="loading-circle-4" class="display-none">' +
					'<div id="loading-inner-circle-4" class="loading-inner-circle display-none"></div>' +
					'<div id="loading-inner-circle-44" class="loading-inner-circle display-none"></div>' +
				'</div>';
        	
        		setTimeout(function() {
        			$('#loading-container').fadeIn(0);
        			$('#loading-circles-container').fadeIn(0);
        			$('#loading-circles-container').html('');
        			$('#loading-circles-container').html(loading_circles);
        		}, 300);
        	
        		this.fn_loading_screen_animation();
        
        	},
        
        	fn_loading_screen_animation: function(int_degrees) {
            
        		if (this.current_loop == 0) {
            	
            			setTimeout(function() {
            				$('#loading-inner-circle-1').fadeIn(0);
            				$('#loading-inner-circle-1').addClass('animated bounceIn');
            			}, 1000);
                
            			setTimeout(function() {
            				$('#loading-inner-circle-2').fadeIn(0);
            				$('#loading-inner-circle-2').addClass('animated bounceIn');
            			}, 1500);
            	
            			setTimeout(function() {
            				$('#loading-inner-circle-3').fadeIn(0);
            				$('#loading-inner-circle-3').addClass('animated bounceIn');
            			}, 2000);
                
       				setTimeout(function() {
                			$('#loading-inner-circle-4').fadeIn(0);
            				$('#loading-inner-circle-4').addClass('animated bounceIn');
            			}, 2500);
            
            		}
            
            		else {	
            	
            			$('#loading-circle-1').fadeIn(0);
            			$('#loading-circle-1').addClass('animated zoomIn');
            	
            			setTimeout(function() {
            				$('#loading-circle-2').fadeIn(0);
            				$('#loading-circle-2').addClass('animated zoomIn');
            			}, 75);
            	
            			setTimeout(function() {
            				$('#loading-circle-3').fadeIn(0);
            				$('#loading-circle-3').addClass('animated zoomIn');
            			}, 150);
            	
            			setTimeout(function() {
            				$('#loading-circle-4').fadeIn(0);
            				$('#loading-circle-4').addClass('animated zoomIn');
            			}, 225);
            	
            			setTimeout(function() {
            				$('#loading-circle-1').removeClass('animated zoomIn');
            				$('#loading-circle-2').removeClass('animated zoomIn');
            				$('#loading-circle-3').removeClass('animated zoomIn');
            				$('#loading-circle-4').removeClass('animated zoomIn');
            			}, 1000);
            	
            			setTimeout(function() {
        				$('#loading-inner-circle-1').fadeIn(0);
        				$('#loading-inner-circle-1').addClass('animated bounceIn');
        			}, 1225);
            	
           			setTimeout(function() {
        				$('#loading-inner-circle-2').fadeIn(0);
       					$('#loading-inner-circle-2').addClass('animated bounceIn');
        			}, 1725);	
            	
            			setTimeout(function() {
        				$('#loading-inner-circle-3').fadeIn(0);
        				$('#loading-inner-circle-3').addClass('animated bounceIn');
        			}, 2225);
            	
            			setTimeout(function() {
        				$('#loading-inner-circle-4').fadeIn(0);
        				$('#loading-inner-circle-4').addClass('animated bounceIn');
        			}, 2725);
            
            		}
            
            		// spin the colored circles, while removing the small white ones
            		setTimeout(function() {
            			$('#loading-inner-circle-1').removeClass('animated bounceIn');
                		$('#loading-circle-1').css('-webkit-transform', 'rotateY(-' + '180' + 'deg)');
               			setTimeout(function() {
                			$('#loading-inner-circle-1').fadeOut(30);
                			$('#loading-inner-circle-1').removeClass('animated bounceIn')
            			}, 260);	
            		}, 3900);
            
            		setTimeout(function() {
            			$('#loading-inner-circle-2').removeClass('animated bounceIn');
               			$('#loading-circle-2').css('-webkit-transform', 'rotateY(-' + '180' + 'deg)');
               			setTimeout(function() {
               				$('#loading-inner-circle-2').fadeOut(30);
            			}, 260);
        	 	}, 4400);
            
            		setTimeout(function() {
            			$('#loading-inner-circle-3').removeClass('animated bounceIn');
                		$('#loading-circle-3').css('-webkit-transform', 'rotateY(-' + '180' + 'deg)');
               			setTimeout(function() {
               				$('#loading-inner-circle-3').fadeOut(30);
            			}, 260);
            		}, 4900);
            
            		setTimeout(function() {
            			$('#loading-inner-circle-4').removeClass('animated bounceIn');
               			$('#loading-circle-4').css('-webkit-transform', 'rotateY(-' + '180' + 'deg)');
               			setTimeout(function() {
                			$('#loading-inner-circle-4').fadeOut(30);
            			}, 260);
            		}, 5400);
            	
            		setTimeout(function() {
       				$('#loading-inner-circle-1').fadeIn(0);
       				$('#loading-inner-circle-1').addClass('animated bounceIn');
            		}, 6400);
            
        	 	setTimeout(function() {
       				$('#loading-inner-circle-2').fadeIn(0);
       				$('#loading-inner-circle-2').addClass('animated bounceIn');
            		}, 6900);	
            	
            		setTimeout(function() {
       				$('#loading-inner-circle-3').fadeIn(0);
       				$('#loading-inner-circle-3').addClass('animated bounceIn');
            		}, 7400);
            	
        		setTimeout(function() {
       				$('#loading-inner-circle-4').fadeIn(0);
       				$('#loading-inner-circle-4').addClass('animated bounceIn');
            		}, 7900);
            
            		setTimeout(function() {
           			$('#loading-circle-1').addClass('animated bounceOut');
            			$('#loading-circle-2').addClass('animated bounceOut');
            			$('#loading-circle-3').addClass('animated bounceOut');
            			$('#loading-circle-4').addClass('animated bounceOut');
            		}, 8400);
            
            		setTimeout(function() {
        			$('.replay-message-button').fadeIn(0);
        			$('.replay-message-button').addClass('animated bounceIn');
       				$('#loading-container').fadeOut(500);
            		}, 8925);
            
            		this.current_loop += 1;
        
        	},       
		
	};

	return Google_Loader;

})(window, document);
