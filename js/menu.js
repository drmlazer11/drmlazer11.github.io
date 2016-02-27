var Menu = (function (window, document) {

    that = this;
	
	Menu = function (opts) {

		// Options from user
		for (i in opts) this.options[i] = opts[i];
        
        $('#about-us-close-text').on('click', this.fn_close_about_us.bind(this));
        $('#settings-close-text').on('click', this.fn_close_settings.bind(this));
        
        $('.settings-category-tappable-element').on('click', this.fn_change_category_settings.bind(this));
        
        $('#about-us-circle-cover').on('click', this.fn_tap_about_us_circle.bind(this));
        $('#feedback-circle-cover').on('click', this.fn_tap_feedback_circle.bind(this));
        $('#settings-circle-cover').on('click', this.fn_tap_settings_circle.bind(this));
        
        this.fn_check_for_non_mobile_browser();
    	this.fn_set_settings_html();

		window.addEventListener('load', function() {
		    FastClick.attach(document.body);
		}, false);
       
    };
    
	Menu.prototype = {

		// ------------------------------------------------------
		// Skimmin Core Functions
		// ------------------------------------------------------ 
        
        fn_check_for_non_mobile_browser: function() {
        	
  			var check = false;
  			(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  			if (check == true) {
  				$('.desktop-screen').fadeOut(0);
  			}
    	},
        
        fn_tap_about_us_circle: function() {
            setTimeout(function() {
            	$('#about-fresh-screen').fadeIn(0);
            	$('#about-fresh-screen').addClass('animated slideInUp');
            }, 50);
            setTimeout(function() {
                $('#about-fresh-screen').removeClass('animated slideInUp');
            }, 910);
            $('.heart-emoji').css('-webkit-transition', '-webkit-transform .4s');
            $('.heart-emoji').css('-webkit-transform', 'scale(.78)');
            setTimeout(function() {
                $('.heart-emoji').css('-webkit-transform', 'scale(1)');
            }, 410);
        },
        
        fn_close_about_us: function() {
            $('#about-fresh-screen').addClass('animated slideOutDown');
            setTimeout(function() {
                $('#about-fresh-screen').fadeOut(0);
                $('#about-fresh-screen').removeClass('animated slideOutDown');
            }, 250);
            $('#about-scrollable-container').scrollTop(0);
        },
        
        fn_tap_settings_circle: function() {
            $('#settings-fresh-screen').fadeIn(0);
            $('#settings-fresh-screen').addClass('animated slideInUp');
            setTimeout(function() {
                $('#settings-fresh-screen').removeClass('animated slideInUp');
            }, 810);
            
            $('#settings-circle').css('-webkit-transition', '-webkit-transform .5s');
            $('#settings-circle').css('-webkit-transform', 'rotate(-90deg)');
            
            setTimeout(function() {
            	$('#settings-circle').css('-webkit-transform', 'rotate(0deg)');
            }, 600);
            
        },
        
        fn_close_settings: function() {
            $('#settings-fresh-screen').addClass('animated slideOutDown');
            setTimeout(function() {
                $('#settings-fresh-screen').fadeOut(0);
                $('#settings-fresh-screen').removeClass('animated slideOutDown');
            }, 250);
            $('#settings-scrollable-container').scrollTop(0);
        },
        
        fn_tap_feedback_circle: function() {
        	$('.speaking-head-emoji').css('-webkit-transition', '-webkit-transform .3s');
            $('.speaking-head-emoji').css('-webkit-transform', 'scale(.78)');
        	setTimeout(function() {
                $('.speaking-head-emoji').css('-webkit-transform', 'scale(1)');
            }, 310);
            window.location.href = "mailto:feedback@skimmin.com";
        }, 
        
        fn_set_settings_html: function() {
            
            var arr_category_settings = window.localStorage.getItem('arr_category_settings');
            if (arr_category_settings === null) {
                arr_category_settings = {'us': 0, 'world': 0, 'business': 0, 'sports': 0, 'technology': 0, 'entertainment': 0};
                window.localStorage.setItem('arr_category_settings', JSON.stringify(arr_category_settings));
            }
            else {
                arr_category_settings = JSON.parse(arr_category_settings);
            }
            
            // if any of the categories have been turned off, we need to adjust the "already-set" html settings code onResume
            if (arr_category_settings['us'] == 1) {
                $('#settings-tappable-element-us').removeClass('us');
                $('#settings-tappable-element-us').addClass('muted');
                $('#settings-status-text-us').html('Mute Stories');
                $('#settings-status-text-us').addClass('muted');
            }
            if (arr_category_settings['world'] == 1) {
                $('#settings-tappable-element-world').removeClass('world');
                $('#settings-tappable-element-world').addClass('muted');
                $('#settings-status-text-world').html('Mute Stories');
                $('#settings-status-text-world').addClass('muted');
            }
            if (arr_category_settings['business'] == 1) {
                $('#settings-tappable-element-business').removeClass('business');
                $('#settings-tappable-element-business').addClass('muted');
                $('#settings-status-text-business').html('Mute Stories');
                $('#settings-status-text-business').addClass('muted');
            }
            if (arr_category_settings['sports'] == 1) {
                $('#settings-tappable-element-sports').removeClass('sports');
                $('#settings-tappable-element-sports').addClass('muted');
                $('#settings-status-text-sports').html('Mute Stories');
                $('#settings-status-text-sports').addClass('muted');
            } 
            if (arr_category_settings['technology'] == 1) {
                $('#settings-tappable-element-technology').removeClass('technology');
                $('#settings-tappable-element-technology').addClass('muted');
                $('#settings-status-text-technology').html('Mute Stories');
                $('#settings-status-text-technology').addClass('muted');
            }
            if (arr_category_settings['entertainment'] == 1) {
                $('#settings-tappable-element-entertainment').removeClass('entertainment');
                $('#settings-tappable-element-entertainment').addClass('muted');
                $('#settings-status-text-entertainment').html('Mute Stories');
                $('#settings-status-text-entertainment').addClass('muted');
            }
            
            return ('Done initializing this user\'s category settings array');
        
        },
            
                
        /********* Function is called when someone mutes, unmutes category ***************/
        fn_change_category_settings: function (e) {
        
            element_id = e.target.id;
            index_of_last_underscore = element_id.lastIndexOf("-");
            str_category = element_id.slice(index_of_last_underscore + 1);
            
            var arr_category_settings = window.localStorage.getItem('arr_category_settings');
            arr_category_settings = JSON.parse(arr_category_settings);
            
            if (arr_category_settings[str_category] == 0) {
                    $('#settings-tappable-element-' + str_category).removeClass(str_category);
                    $('#settings-tappable-element-' + str_category).addClass('muted');
                    $('#settings-status-text-' + str_category).addClass('muted');
                    $('#settings-status-text-' + str_category).html('Mute Stories');
            }
            else {
                $('#settings-tappable-element-' + str_category).removeClass('muted');
                $('#settings-tappable-element-' + str_category).addClass(str_category);
                $('#settings-status-text-' + str_category).removeClass('muted');
                $('#settings-status-text-' + str_category).html('Show Stories');
            }
            
            if (arr_category_settings[str_category] == 0) { 
                arr_category_settings[str_category] = 1;
                window.localStorage.setItem('arr_category_settings', JSON.stringify(arr_category_settings));
            }
            else {
                arr_category_settings[str_category] = 0;
                window.localStorage.setItem('arr_category_settings', JSON.stringify(arr_category_settings));
            }
        
        },
		
	};

	return Menu;

})(window, document);		
