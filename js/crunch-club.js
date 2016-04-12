var first_page_bool = false;
var second_page_bool = false;

var crunchClub = (function (window, document) {

    that = this;
		
	crunchClub = function (opts) {
	
	    that = this;
				
        $('.purchase-button').on('click', this.fn_tap_purchase.bind(this));

        this.fn_check_if_first_visit();
    	this.fn_convert_emoji();
		
		window.addEventListener('load', function() {
		    FastClick.attach(document.body);
		}, false);
       
    };
    
	crunchClub.prototype = {

		// ------------------------------------------------------
		// Skimmin Core Functions
		// ------------------------------------------------------
        
       	fn_convert_emoji: function() {
			
			$(".emoji").each(function() {
    			emojione.imageType = 'svg';
    			var input = $(this).html();
    			var output = emojione.shortnameToImage(input);
    			$(this).html(output);
			});
		},
		
		fn_check_if_first_visit: function() {

			// home page
			if ($(".content-container")[0]) {
				var first = this.fn_read_cookie('crunchclubfirst');
				if (first) {
					first_page_bool = true;
				}
				else {
					this.fn_create_cookie('crunchclubfirst', 'test', 7);
				}
			} 

			// sign up page
			else {
				var second = this.fn_read_cookie('crunchclubsecondary');
				if (second) {
					second_page_bool = true;
				}
				else {
					this.fn_create_cookie('crunchclubsecondary', 'testagain', 7);
				}
			}

		},

		fn_create_cookie: function(name, value, days) {
			if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				var expires = "; expires="+date.toGMTString();
			}
			else var expires = "";
			document.cookie = name+"="+value+expires+"; path=/";
		},

		fn_read_cookie: function(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for (var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
			}
			return null;
		}

	};

	return crunchClub;

})(window, document);
